const cinemaCart = require('../Model/CinemaCart');
const nodemailer = require('nodemailer');

exports.createCinemaCart = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, phone, message, item, state } = req.body;
        const newCinemaCart = new cinemaCart({
            name,
            email,
            phone,
            message,
            item,
            state,
        });
        const savedCinemaCart = await newCinemaCart.save();
        // Set up Nodemailer transport
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: 'mediamanmd@gmail.com',
                pass: 'tuls epem fvwb pltc' // Use environment variables for sensitive data in production
            }
        });
        const adminTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="text-align: center; background-color: #343a40; padding: 10px;">
                <img src="https://mediaman.in/static/media/logo.94585481204bda4cb964.png" alt="Mediaman Logo" style="max-width: 100%;">
            </div>
            <div style="padding: 20px; background-color: #f8f9fa;">
                <h2 style="color: #343a40;">New Cinema Cart Created</h2>
                <p style="color: #495057;">
                    A new cinema cart has been created with the following details:
                </p>
                <ul style="color: #495057; list-style-type: none; padding: 0;">
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                    <li><strong>State:</strong> ${state}</li>
                    <li><strong>Message:</strong> ${message}</li>
                  <li><strong>Created At:</strong> ${new Date(savedCinemaCart.createdAt).toLocaleString('en-US', {
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
                    ${item.map(i => `
                    <li style="margin-bottom: 15px; padding: 10px; border: 1px solid #ddd; border-radius: 4px; background-color: #fff;">
                        <strong>Cinema Name:</strong> ${i.cinemaName}<br/>
                        <strong>Category:</strong> ${i.category}<br/>
                        <strong>State:</strong> ${i.state}<br/>
                        <strong>City:</strong> ${i.city}<br/>
                        <strong>Screen:</strong> ${i.screen}<br/>
                        <strong>Seating:</strong> ${i.seating}<br/>
                        <strong>Money:</strong> ${i.money}<br/>
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
            subject: 'New Cinema Cart Created',
            html: adminTemplate
        });
        res.status(200).json({
            success: true,
            message: 'CinemaCart created successfully',
            data: savedCinemaCart
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Failed to create CinemaCart',
            error: error.message
        });
    }
};


exports.getAllCinemaCarts = async (req, res) => {
    try {
        const cinemaCarts = await cinemaCart.find();
        res.status(200).json({
            success: true,
            data: cinemaCarts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch CinemaCarts',
            error: error.message
        });
    }
};


exports.getCinemaCartById = async (req, res) => {
    try {
        const data = await cinemaCart.findOne({ _id: req.params._id });
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'CinemaCart not found'
            });
        }

        res.status(200).json({
            success: true,
            data: data
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Failed to fetch CinemaCart',
            error: error.message
        });
    }
};

// // Update a CinemaCart entry by ID
// exports.updateCinemaCart = async (req, res) => {
//     try {
//         const { name, email, phone, message, item } = req.body;

//         const updatedCinemaCart = await CinemaCart.findByIdAndUpdate(
//             req.params.id,
//             { name, email, phone, message, item },
//             { new: true, runValidators: true }
//         );

//         if (!updatedCinemaCart) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'CinemaCart not found'
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: 'CinemaCart updated successfully',
//             data: updatedCinemaCart
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: 'Failed to update CinemaCart',
//             error: error.message
//         });
//     }
// };

// // Delete a CinemaCart entry by ID
// exports.deleteCinemaCart = async (req, res) => {
//     try {
//         const cinemaCart = await CinemaCart.findByIdAndDelete(req.params.id);

//         if (!cinemaCart) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'CinemaCart not found'
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: 'CinemaCart deleted successfully'
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: 'Failed to delete CinemaCart',
//             error: error.message
//         });
//     }
// };
