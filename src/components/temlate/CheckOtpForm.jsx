import { setCookie } from "../../utils/cookie"
import { checkOtp } from "../../services/Auth";

function CheckOtpForm({ code, mobile, setStep, setCode }) {
 
  const submitHandler = async (event) => {
    event.preventDefault();

    if(code.length !== 5) return;

    const {response , error} = await checkOtp(mobile, code);

    if(response){
      setCookie(response.data)
    }
    
    if(error){
      console.log(error.response.data.message)
    }
  } 

  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد</p>
      <span>کد پیامک شده را به شماره {mobile}را وارد کنید </span>
      <label htmlFor="input">کد را وارد کنید</label>
      <input
        type="text"
        placeholder="کد تایید"
        id="input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">تایید شماره موبایل</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
