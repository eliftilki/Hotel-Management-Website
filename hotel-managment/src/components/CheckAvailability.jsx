
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Rooms from "./Rooms";
import { render } from "@testing-library/react";

function CheckAvailability() {
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    checkin: "",
    checkout: "",
    adults: "1",
    children: "0",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
    console.log(formData.checkin, formData.checkout, formData.adults, formData.children);
  };
  const handleRoomCheck = async() => {
    console.log("Check-in Date:", formData.checkin);
    console.log("Check-out Date:", formData.checkout);
    console.log("Adults:", formData.adults);
    console.log("Children:", formData.children);
    try {
      const CheckinDate = Date(formData.checkin);
      const CheckoutDate = Date(formData.checkout);
      console.log("Check-in Date:", CheckinDate);
      console.log("Check-out Date:", CheckoutDate);
      console.log("Form Dataaaaaaaaaa:", formData.checkin, formData.checkout, formData.adults, formData.children);
      const res = await axios.put(`https://localhost:7185/Oda?checkin=${formData.checkin}&checkout=${formData.checkout}&numAdult=${formData.adults}&numChild=${formData.children}`);
      if (res.data.length > 0) {
        console.log("Response Data yazıldı çünkü length 1:", res.data);
        navigate("/rooms", { state: { RoomsData: res.data, FormsData:formData } });
      } else {  
        alert("No rooms available for the selected dates");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const checkAvailability = async (formData) => {
  //   try {
  //     const CheckinDate = Date(formData.checkin);
  //     const CheckoutDate = Date(formData.checkout);
  //     console.log("Check-in Date:", CheckinDate);
  //     console.log("Check-out Date:", CheckoutDate);
  //     console.log("Form Dataaaaaaaaaa:", formData.checkin, formData.checkout, formData.adults, formData.children);
  //     const res = await axios.put(`https://localhost:7185/Oda?checkin=${formData.checkin}&checkout=${formData.checkout}&numAdult=${formData.adults}&numChild=${formData.children}`);
  //     console.log("Response Data:", res.data);
  //     <Rooms RoomsData={res}></Rooms>
  //     if (res.length > 0) {
  //       console.log("Response Data:", res.data);
  //       <Rooms RoomsData={res}></Rooms>
  //     } else {  
  //       alert("No rooms available for the selected dates");
  //     }

  //     // Perform any additional actions based on the response
  //   } catch (error) {
  //     console.error("Error:", error);

  //     // Handle the error as needed
  //   }
  // };

  return (
    <>
      <section className="section pb-4">
        <div className="container">
          <div className="row">
            <div className="block-32" data-aos="fade-up" data-aos-offset="-200">
           
                <div className="row">
                  <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                    <label
                      htmlFor="checkin_date"
                      className="font-weight-bold text-black"
                    >
                      Check In
                    </label>
                    <div className="field-icon-wrap">
                      <div className="icon">
                        <span className="icon-calendar"></span>
                      </div>
                      <input
                        type="date"
                        id="checkin_date"
                        className="form-control"
                        onChange={handleChange}
                        name="checkin"
                        value={formData.checkin}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                    <label
                      htmlFor="checkout_date"
                      className="font-weight-bold text-black"
                    >
                      Check Out
                    </label>
                    <div className="field-icon-wrap">
                      <div className="icon">
                        <span className="icon-calendar"></span>
                      </div>
                      <input
                        type="date"
                        id="checkout_date"
                        className="form-control"
                        onChange={handleChange}
                        name="checkout"
                        value={formData.checkout}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3 mb-md-0 col-lg-3">
                    <div className="row">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label
                          htmlFor="adults"
                          className="font-weight-bold text-black"
                        >
                          Adults
                        </label>
                        <div className="field-icon-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down"></span>
                          </div>
                          <select
                            id="adults"
                            className="form-control"
                            onChange={handleChange}
                            name="adults"
                            value={formData.adults}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4+">4+</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label
                          htmlFor="children"
                          className="font-weight-bold text-black"
                        >
                          Children
                        </label>
                        <div className="field-icon-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down"></span>
                          </div>
                          <select
                            id="children"
                            className="form-control"
                            onChange={handleChange}
                            name="children"
                            value={formData.children}
                          >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3+">3+</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 align-self-end">
                    <button
                      className="btn btn-primary btn-block text-white"
                      onClick={handleRoomCheck}
                    >
                      Check Availability
                    </button>
                  </div>
                </div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckAvailability;
