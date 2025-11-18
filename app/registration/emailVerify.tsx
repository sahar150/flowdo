import emailIcon from "./email-18-svgrepo-com.svg";

export function EmailVerify() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex w-[500px] max-w-[100vw] flex-col items-center gap-6 text-center">
        <img
          src={emailIcon}
          alt="Email svg icon from svgrepo.com"
          className="w-24"
        />
        <h1 className="text-center leading-6 text-purple-900">
          Verify Your Email Address
        </h1>
        <p className="flex flex-col items-center gap-2">
          We've sent a verification link to the following email address:
          <span className="flex w-fit rounded-3xl bg-purple-300 p-1 pr-4 pl-4">
            user.email@example.com
          </span>
          Please check your inbox and click the link to activate your account.
        </p>
        <button className="w-full rounded-3xl bg-purple-900 p-4 text-amber-50">
          Resend Verification Email
        </button>
        <button className="w-full rounded-3xl bg-purple-900 p-4 text-amber-50">
          Return To Login
        </button>
        <hr className="h-px w-full bg-gray-300" />
        <p>
          Didn't receive the email? check your spam folder or
          <a className="ml-2 text-purple-900 underline" href="#">
            Try again
          </a>
        </p>
      </div>
    </main>
  );
}
