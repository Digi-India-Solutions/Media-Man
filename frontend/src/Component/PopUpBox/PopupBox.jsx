import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const PopupBox = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        lookingfor: ""
    });

    const getInputdata = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("https://mediamanserver.onrender.com/api/contacts", data);
            if (res.status === 200) {
                toast.success("Your Query Sent Successfully");
                setData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    lookingfor: ""
                });
                setIsSubmitted(true); // Mark as submitted
                setShowModal(false); // Hide the modal after submission
            }
        } catch (error) {
            console.error(error);
            toast.error("There was an error sending your query");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let intervalId;
        if (!isSubmitted) {
            intervalId = setInterval(() => {
                setShowModal(true); // Show the modal at intervals
            }, 90000);
        }
        return () => clearInterval(intervalId);
    }, [isSubmitted]);

    // Close the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {showModal && (
                <div
                    className="modal fade show"
                    style={{ display: 'block' }}
                    id="enquiryModal"
                    aria-hidden="true"
                    aria-labelledby="enquiryModalLabel"
                    tabIndex="-1"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="enquiryModalLabel">
                                    Enquiry Form
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleCloseModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control modalInput"
                                    placeholder="Enter Name"
                                    name="name"
                                    value={data.name}
                                    onChange={getInputdata}
                                    required
                                />
                                <input
                                    type="email"
                                    className="form-control modalInput"
                                    placeholder="Enter Email"
                                    name="email"
                                    value={data.email}
                                    onChange={getInputdata}
                                    required
                                />
                                <input
                                    type="tel"
                                    className="form-control modalInput"
                                    placeholder="Enter Phone Number"
                                    name="phone"
                                    value={data.phone}
                                    onChange={getInputdata}
                                    required
                                />
                                <select
                                    name="lookingfor"
                                    className="form-control modalInput"
                                    onChange={getInputdata}
                                    value={data.lookingfor}
                                >
                                    <option value="" disabled>Please Select Looking for</option>
                                    <option value="Cinema Advertising">Cinema Advertising</option>
                                    <option value="Outdoor Hoading Advertising">Outdoor Hoading Advertising</option>
                                    <option value="Airport Advertising">Airport Advertising</option>
                                    <option value="Radio Advertisement">Radio Advertisement</option>
                                    <option value="Bus Advertising">Bus Advertising</option>
                                </select>
                                <textarea
                                    className="form-control modalInput"
                                    rows="3"
                                    placeholder="Enter Your Message (Optional)"
                                    name="message"
                                    value={data.message}
                                    onChange={getInputdata}
                                ></textarea>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={handleCloseModal}
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopupBox;
