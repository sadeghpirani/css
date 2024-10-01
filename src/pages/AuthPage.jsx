import React, { useState } from "react";
import SendOtpForm from "../components/temlate/SendOtpForm";
import CheckOtpForm from "../components/temlate/CheckOtpForm";

function AuthPage() {
  const [step, setStep] = useState(2);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");

  return (
    <div>
      {step === 1 && (
        <SendOtpForm setMobile={setMobile} setStep={setStep} mobile={mobile} />
      )}
      {step === 2 && (
        <CheckOtpForm
          code={code}
          setCode={setCode}
          mobile={mobile}
          setStep={setStep}
        />
      )}
    </div>
  );
}

export default AuthPage;
