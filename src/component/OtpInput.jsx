import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setotp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);
  const handelChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];

    newOtp[index] = value.substring(value.length - 1);
    setotp(newOtp);

    // submit
    const combineOtp = newOtp.join("");
    if (combineOtp.length === length) onOtpSubmit(combineOtp);

    // move to next field
    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  };
  const handelClick = (index) => {
    inputRef.current[index].setSelectionRange(1, 1);

    if (index > 0 && !otp[index - 1]) {
      inputRef.current[otp.indexOf("")].focus();
    }
  };
  const handelKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      // move focus to previous
      inputRef.current[index - 1].focus();
    }
  };
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            type="text"
            key={index}
            ref={(input) => {
              inputRef.current[index] = input;
            }}
            value={value}
            onChange={(e) => handelChange(index, e)}
            onClick={() => handelClick(index)}
            onKeyDown={(e) => handelKeyDown(index, e)}
            className=" border border-black rounded-lg shadow-inner shadow-sm shadow-zinc-400 w-10 h-10 m-1 mt-5 text-center"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
