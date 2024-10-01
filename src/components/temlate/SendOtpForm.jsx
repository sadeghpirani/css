import React from "react";
import { sendOtp } from "../../services/Auth";

function SendOtpForm({ mobile, setMobile, setStep }) {

  const submitHandler = async (event) => {
    event.preventDefault();

    if(mobile.length !== 11 ) return;

    const {response , error} = await sendOtp(mobile);

    if (response) setStep(2);

    if (error) console.log(error.response.data.message);

    console.log({response , error})
  }

  
  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>شماره موبایل را وارد کنید</span>
      <label htmlFor="input">شماره موبایل را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOtpForm;
