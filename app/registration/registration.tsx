export function Registration() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex min-h-0 flex-1 flex-col items-center gap-6 p-4">
        <h1 className="text-center leading-6 text-purple-900">Join Flodo</h1>
        <form className="flex w-[500px] max-w-[100vw] flex-col gap-6">
          <input
            className="w-full rounded-3xl border border-gray-200 p-4 dark:border-gray-700"
            name="fullName"
            placeholder="Full name"
          />
          <input
            className="w-full rounded-3xl border border-gray-200 p-4 dark:border-gray-700"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <input
            className="w-full rounded-3xl border border-gray-200 p-4 dark:border-gray-700"
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            className="w-full rounded-3xl border border-gray-200 p-4 dark:border-gray-700"
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
          />
          <input
            className="w-full rounded-3xl bg-purple-900 p-4 text-amber-50"
            type="submit"
            value="Sign Up"
          />
        </form>
      </div>
    </main>
  );
}
