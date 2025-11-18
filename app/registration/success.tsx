import successIcon from "./success-flag-svgrepo-com.svg";
export function Success() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex min-h-0 flex-1 flex-col items-center gap-6 p-4">
        <img
          src={successIcon}
          alt="success svg icon from svgrepo.com"
          className="w-24"
        />
        <h1 className="text-center leading-6 text-purple-900">
          Account Created Successfully!
        </h1>
        <p className="w-[500px] max-w-[100vw] text-center">
          You'll receive a confirmation email shortly. Check your inbox to
          verify your account.
        </p>
      </div>
    </main>
  );
}
