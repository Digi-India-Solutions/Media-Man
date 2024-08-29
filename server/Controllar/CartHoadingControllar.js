const HoadingCart = require("../Model/HoadingCart");

const nodemailer = require('nodemailer'); // Import Nodemailer

exports.createHoadingCart = async (req, res) => {
    try {
        console.log("i am hit ");
        console.log(req.body); // Debug log
        const { name, email, phone, message, state, hoadingcart } = req.body;

        const newHoadingCart = new HoadingCart({
            name,
            email,
            phone,
            message,
            state,
            hoadingcart, // Correct field name here
        });

        const savedHoadingCart = await newHoadingCart.save();

        // Set up Nodemailer transport
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: 'mediamanmd@gmail.com',
                pass: 'tuls epem fvwb pltc'
            }
        });

        const adminTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="text-align: center; background-color: #343a40; padding: 10px;">
                <img src="https://mediaman.in/static/media/logo.94585481204bda4cb964.png" alt="Mediaman Logo" style="max-width: 100%;">
            </div>
            <div style="padding: 20px; background-color: #f8f9fa;">
                <h2 style="color: #343a40;">New Hoading Cart Created</h2>
                <p style="color: #495057;">
                    A new hoading cart has been created with the following details:
                </p>
                <ul style="color: #495057; list-style-type: none; padding: 0;">
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                    <li><strong>State:</strong> ${state}</li>
                    <li><strong>Message:</strong> ${message}</li>
                    <li><strong>Total Price:</strong> ${totalPrice}</li>
                  <li><strong>Created At:</strong> ${new Date(savedHoadingCart.createdAt).toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        })}</li>

                </ul>
                <h3 style="color: #343a40;">Item(s) Details:</h3>
                <ul style="color: #495057; list-style-type: none; padding: 0;">
                    ${hoadingcart.map(i => `
                    <li style="margin-bottom: 15px; padding: 10px; border: 1px solid #ddd; border-radius: 4px; background-color: #fff;">
                        <strong>Hoarding Location:</strong> ${i.location}<br/>
                        <strong>State:</strong> ${i.state}<br/>
                        <strong>City:</strong> ${i.city}<br/>
                        <strong>Size:</strong> ${i.height}H ${i.width}W<br/>
                        <strong>Price:</strong> ${i.amount}<br/>
                    </li>`).join('')}
                </ul>
                <p style="color: #495057;">
                    Please review the details and follow up with the customer if needed.
                </p>
                <p style="color: #495057;">
                    Best regards,<br/>
                    The Mediaman Team
                </p>
            </div>
            <div style="text-align: center; padding: 10px; background-color: #343a40; color: white;">
                &copy; 2024 Mediaman. All rights reserved.
            </div>
        </div>
    `;

        // Send email to the admin
        await transporter.sendMail({
            from: '"Mediaman" <mediamanmd@gmail.com>',
            to: 'mediamanmd@gmail.com',
            subject: 'New Hoading Cart Created',
            html: adminTemplate
        });

        res.status(201).json({
            success: true,
            data: savedHoadingCart,
        });
    } catch (error) {
        console.error("Error creating hoading cart:", error); // Detailed error log
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};


// Get all hoading cart items
exports.getAllHoadingCarts = async (req, res) => {
    try {
        const hoadingCarts = await HoadingCart.find();
        res.status(200).json({
            success: true,
            data: hoadingCarts,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

// Get a single hoading cart item by ID
exports.getHoadingCartById = async (req, res) => {
    try {
        const hoadingCart = await HoadingCart.findOne({ _id: req.params._id });
        if (!hoadingCart) {
            return res.status(404).json({
                success: false,
                error: "Hoading cart not found",
            });
        }

        res.status(200).json({
            success: true,
            data: hoadingCart,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

// Update a hoading cart item by ID
exports.updateHoadingCartById = async (req, res) => {
    try {
        const { name, email, phone, message, item } = req.body;
        const updatedHoadingCart = await HoadingCart.findByIdAndUpdate(
            req.params.id,
            { name, email, phone, message, item },
            { new: true, runValidators: true }
        );

        if (!updatedHoadingCart) {
            return res.status(404).json({
                success: false,
                error: "Hoading cart not found",
            });
        }

        res.status(200).json({
            success: true,
            data: updatedHoadingCart,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

// Delete a hoading cart item by ID
exports.deleteHoadingCartById = async (req, res) => {
    try {
        const hoadingCart = await HoadingCart.findByIdAndDelete(req.params.id);

        if (!hoadingCart) {
            return res.status(404).json({
                success: false,
                error: "Hoading cart not found",
            });
        }

        res.status(200).json({
            success: true,
            data: {},
            message: "Hoading cart deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};
