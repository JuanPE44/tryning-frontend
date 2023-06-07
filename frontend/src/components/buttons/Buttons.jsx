import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

import "./Buttons.scss";

export function LinkButton({ to, label }) {
  return (
    <>
      <button >
        <Link to={to}>{label}</Link>
      </button>
    </>
  );
}

export function SearchButton({label}) {
  return (
    <>
      <button >{label}</button>
    </>
  );
}

export function SignOutButton({ label }) {
  const { SignOut } = useAuthContext();

  return (
    <>
      <button onClick={SignOut}>{label}</button>
    </>
  );
}

export function SignUpButton({ label }) {
  const { googleSignUp } = useAuthContext();

  return (
    <>
      <button onClick={googleSignUp}>{label}</button>
    </>
  );
}
