import { SignUp } from "@clerk/clerk-react";

function SignupPage() {
  return (
    <div className="signUpPage">
      <SignUp path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
}

export default SignupPage;
