import React, { useEffect, useState } from "react";
import "./cart.css";
import logo from "../../Image/logo.png";
import cart from "../../Image/shopping-cart.gif";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Cart() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Determine the type based on cart items
  const getCartType = () => {
    const types = cartItems.map(item => item.type);
    return types.length > 0 ? types[0] : "";
  };

  const cartType = getCartType();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, []);

  const handleRemove = (index, type) => {
    const updatedItems = type === "radio"
      ? cartItems.filter((item, i) => item.type !== "radio" || i !== index)
      : cartItems.filter((item, i) => item.type !== type || i !== index);

    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        let price = 0;
  
        if (item.type === "cinema") {
          price = parseFloat((item.baseRate10SecWeek || "0").toString().replace(/[^\d.-]/g, "")) || 0;
        } else if (item.type === "outdoor") {
          price = parseFloat((item.total || "0").toString().replace(/[^\d.-]/g, "")) || 0;
        } else if (item.type === "radio") {
          price = parseFloat((item.rate || "0").toString().replace(/[^\d.-]/g, "")) || 0;
        }
  
        const quantity = item.quantity || 1;
        const itemTotal = price * quantity;
        const itemTotalWithGST = itemTotal + itemTotal * 0.18;
  
        return total + itemTotalWithGST;
      }, 0)
      .toFixed(2);
  };
  



  const handleSubmit = async () => {
    if (!name || !email || !phone) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    try {
      const cinemaItems = cartItems.filter(item => item.type === "cinema");
      const hoadingItems = cartItems.filter(item => item.type === "outdoor");
      const radioItems = cartItems.filter(item => item.type === "radio");

      if (cinemaItems.length > 0) {
        const cinemaData = {
          name,
          email,
          phone,
          state,
          message,
          item: cinemaItems.map(item => ({
            cinemaName: item.cinema || "",
            category: item.category || "",
            state: item.state || "",
            city: item.city || "",
            screen: item.audi || "",
            seating: item.seatingCapacity || "",
            money: item.baseRate10SecWeek || "",
            image: item.image || "",
            type: item.type || "cinema",
          })),
        };
        await axios.post("https://mediamanserver.onrender.com/api/cinemaCart", cinemaData);
      }

      if (hoadingItems.length > 0) {
        const hoadingData = {
          name,
          email,
          phone,
          state,
          message,
          hoadingcart: hoadingItems.map(item => ({
            media: item.media || "",
            state: item.state || "",
            city: item.city || "",
            location: item.location || "",
            width: item.width || "",
            height: item.height || "",
            rpm: item.rpm || "",
            amount: item.total || "",
            image: item.image || "",
            type: item.type || "outdoor",
          })),
        };
        await axios.post("https://mediamanserver.onrender.com/api/hoadingcart", hoadingData);
      }

      if (radioItems.length > 0) {
        const radioData = {
          name,
          email,
          phone,
          state,
          message,
          radiocart: radioItems.map(item => ({
            station: item.station || "",
            state: item.state || "",
            city: item.city || "",
            rate: item.rate || "",
            image: item.image || "",
            type: item.type || "radio",
          })),
        };
        console.log(radioData)
        await axios.post("https://mediamanserver.onrender.com/api/radio-cart", radioData);
      }

      localStorage.removeItem("cartItems");
      toast.success("Enquiry submitted successfully.");
      window.location.href = '/cart';
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Failed to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="cart-section">
      <div className="cart-container">
        <div className="container">
          <div className="mb-5">
            <h2>Media Man Cart</h2>
            <hr />
          </div>
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-container">
                <div className="empty-cart-content">
                  <img src={cart} width={"30%"} alt="Empty Cart" />
                  <h2>Your Cart is Empty</h2>
                  <p>Looks like you haven't added anything to your cart yet.</p>
                  <Link to="/cinema" className="shop-now-btn">
                    Add item
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <>
              <table id="cart" className="table table-hover table-condensed">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Type</th>
                    {cartItems[0]?.type === "cinema" ? (
                      <>
                        <th>Cinema Name</th>
                        <th>Category</th>
                        <th>Seating</th>
                        <th>Screen</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Price</th>
                      </>
                    ) : cartItems[0]?.type === "outdoor" ? (
                      <>
                        <th>Media</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Location</th>
                        <th>Width</th>
                        <th>Height</th>
                        <th>RPM</th>
                        <th>Amount</th>
                      </>
                    ) : (
                      <>
                        <th>Radio Name</th>
                        {/* <th>Frequency</th> */}
                        <th>State</th>
                        <th>City</th>
                        {/* <th>Location</th> */}
                        <th>Amount</th>
                      </>
                    )}
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td data-th="Image">
                        <img
                          src={item.image}
                          alt="Item"
                          className="img-responsive"
                          style={{ height: "100px" }}
                        />
                      </td>
                      <td data-th="Type">
                        {item.type === "cinema" ? "Cinema" : item.type === "outdoor" ? "Outdoor" : "Radio"}
                      </td>
                      {item.type === "cinema" ? (
                        <>
                          <td data-th="Cinema Name">{item.cinema}</td>
                          <td data-th="Category">{item.category}</td>
                          <td data-th="Seating">{item.seatingCapacity}</td>
                          <td data-th="Screen">{item.audi}</td>
                          <td data-th="State">{item.state}</td>
                          <td data-th="City">{item.city}</td>
                          <td data-th="Price">{item.baseRate10SecWeek} Rs.</td>
                        </>
                      ) : item.type === "outdoor" ? (
                        <>
                          <td data-th="Media">{item.media}</td>
                          <td data-th="State">{item.state}</td>
                          <td data-th="City">{item.city}</td>
                          <td data-th="Location">{item.location}</td>
                          <td data-th="Width">{item.width}W</td>
                          <td data-th="Height">{item.height}H</td>
                          <td data-th="RPM">{item.rpm}</td>
                          <td data-th="Amount">{item.total} Rs.</td>
                        </>
                      ) : (
                        <>
                          <td data-th="Radio Name">{item.station}</td>
                          {/* <td data-th="Frequency">{item.frequency}</td> */}
                          <td data-th="State">{item.state}</td>
                          <td data-th="City">{item.city}</td>
                          {/* <td data-th="Location">{item.location}</td> */}
                          <td data-th="Amount">{item.rate} Rs.</td>
                        </>
                      )}
                      <td className="actions" data-th="">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleRemove(index, item.type)}
                        >
                          <i className="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <Link to={cartType === "cinema" ? "/cinema" : "/outdoor-hoardings"} className="btn btn-warning">
                        <i className="fa fa-angle-left"></i> Continue Shopping
                      </Link>
                    </td>
                    <td colSpan="5" className="hidden-xs"></td>
                    <td></td>
                    <td></td>
                    <td className="hidden-xs text-center">
                      <strong>Total {calculateTotal()} Rs.(Including 18% GST)</strong>
                    </td>

                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#enquiryModal"
                      >
                        Submit Enquiry
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>

              {/* Modal */}
              <div
                className="modal fade"
                id="enquiryModal"
                aria-hidden="true"
                aria-labelledby="enquiryModalLabel"
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
                      ></button>
                    </div>
                    <div className="modal-body">
                      <input
                        type="text"
                        className="form-control modalInput"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <input
                        type="email"
                        className="form-control modalInput"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <input
                        type="tel"
                        className="form-control modalInput"
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        className="form-control modalInput"
                        placeholder="Enter State Or city"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                      />
                      <textarea
                        className="form-control modalInput"
                        rows="3"
                        placeholder="Enter Your Message (Optional)"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Cart;
