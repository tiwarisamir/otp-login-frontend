import React, { useRef, useState } from "react";
import OtpInput from "./OtpInput";

const Phoneotp = () => {
  const phoneNumber = useRef();
  const [showOtpInput, setshowOtpInput] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    const phone = phoneNumber.current.value;
    // Validation
    const regex = /[^0-9]g/;
    if (phone.length < 10 || regex.test(phone)) {
      alert("Invalid Phone number");
      return;
    }

    // Call API

    // Show OTP Field
    setshowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login sucessful ", otp);
  };

  return (
    <div className="p-5 ">
      {!showOtpInput ? (
        <form className="flex gap-2 justify-center" onSubmit={handelSubmit}>
          <input
            ref={phoneNumber}
            type="text"
            className="border border-black rounded-lg px-3"
            placeholder="Enter phone number"
          />
          <button className="bg-zinc-800 p-3 border rounded-lg text-white font-medium ">
            Submit
          </button>
        </form>
      ) : (
        <div>
          <h1>
            Otp sent to <strong> {phoneNumber.current.value}</strong>
          </h1>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default Phoneotp;
