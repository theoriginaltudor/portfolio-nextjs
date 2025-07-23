import { loginUser } from "./actions";

export default async function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        minLength={5}
        maxLength={254}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        minLength={6}
        maxLength={128}
        autoComplete="current-password"
      />
      <button formAction={loginUser}>Log in</button>
    </form>
  );
}
