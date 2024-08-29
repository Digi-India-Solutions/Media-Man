const RadioCartData = require("../Model/RadioCart")

const nodemailer = require('nodemailer'); // Import Nodemailer

const createRecord = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, phone, state, message, radiocart } = req.body;
        const errorMessage = [];

        if (!name) errorMessage.push("Name is required");
        if (!email) errorMessage.push("Email is required");
        if (!phone) errorMessage.push("Phone is required");
        if (!state) errorMessage.push("State is required");

        if (errorMessage.length > 0) {
            return res.status(400).json({ success: false, message: errorMessage.join(', ') });
        }

        const newRecord = new RadioCartData({
            name,
            email,
            phone,
            state,
            message,
            radiocart
        });

        await newRecord.save();

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
                <h2 style="color: #343a40;">New Radio Cart Created</h2>
                <p style="color: #495057;">
                    A new radio cart has been created with the following details:
                </p>
                <ul style="color: #495057; list-style-type: none; padding: 0;">
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                    <li><strong>State:</strong> ${state}</li>
                    <li><strong>Message:</strong> ${message}</li>
                    <li><strong>Created At:</strong> ${new Date(newRecord.createdAt).toLocaleString()}</li>
                </ul>
                <h3 style="color: #343a40;">Item(s) Details:</h3>
                <ul style="color: #495057; list-style-type: none; padding: 0;">
                    ${radiocart.map(i => `
                    <li style="margin-bottom: 15px; padding: 10px; border: 1px solid #ddd; border-radius: 4px; background-color: #fff;">
                        <strong>Station:</strong> ${i.station}<br/>
                        <strong>State:</strong> ${i.state}<br/>
                        <strong>City:</strong> ${i.city}<br/>
                        <strong>Rate:</strong> ${i.rate}<br/>
                        <strong>Created At:</strong> ${new Date(i.createdAt).toLocaleString()}
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
            subject: 'New Radio Cart Created',
            html: adminTemplate
        });

        res.status(200).json({ success: true, data: newRecord });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


const getAllRecords = async (req, res) => {
    try {
        const records = await RadioCartData.find();
        res.status(200).json({ success: true, data: records });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


const getRecordById = async (req, res) => {
    try {
        // const { id } = req.params;
        const record = await RadioCartData.findOne({ _id: req.params._id });

        if (!record) {
            return res.status(404).json({ success: false, message: "Record not found" });
        }

        res.status(200).json({ success: true, data: record });
    } catch (error) {
        clg
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


const deleteRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRecord = await RadioCartData.findByIdAndDelete(id);

        if (!deletedRecord) {
            return res.status(404).json({ success: false, message: "Record not found" });
        }

        res.status(200).json({ success: true, message: "Record deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


module.exports = {
    createRecord, getAllRecords, getRecordById, deleteRecord
}