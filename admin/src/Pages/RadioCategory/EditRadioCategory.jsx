import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditRadioCategory = () => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [data, setData] = useState({
        radiocategoryName: "",
        radioimage: null
    });
    const { _id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await axios.get(`https://api.mediaman.in/api/radioCategory/${_id}`);
                console.log(res)
                const category = res.data.data;
                setData({
                    radiocategoryName: category.radiocategoryName,
                    radioimage: null,
                });
            } catch (error) {
                console.log(error);
                toast.error("Failed to load category data.");
            }
        };
        fetchCategory();
    }, [_id]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setBtnLoading(true);
        try {
            const formData = new FormData();
            formData.append("radiocategoryName", data.radiocategoryName);
            if (data.radioimage) {
                formData.append("radioimage", data.radioimage);
            }
            const res = await axios.put(`https://api.mediaman.in/api/radioCategory/${_id}`, formData);
            if (res.status === 200) {
                toast.success("Category updated successfully!");
                navigate("/all-radiosname")
            }
        } catch (error) {
            console.log("My error", error);
            toast.error("Failed to update category.");
        } finally {
            setBtnLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Edit Category</h4>
                </div>
                <div className="links">
                    <Link to="/all-radiosname" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="radiocategoryName" className="form-label">Category Name</label>
                        <input
                            type="text"
                            name="radiocategoryName"
                            className="form-control"
                            id="radiocategoryName"
                            onChange={handleChange}
                            value={data.radiocategoryName}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="categoryradioimage" className="form-label">Category radioimage</label>
                        <input
                            type="file"
                            name="radioimage"
                            className="form-control"
                            id="categoryradioimage"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 text-center">
                        <button
                            type="submit"
                            className={`${btnLoading ? 'not-allowed' : 'allowed'}`}
                            disabled={btnLoading}
                        >
                            {btnLoading ? "Please Wait.." : "Update Category"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditRadioCategory;
