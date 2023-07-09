import { RenderSteps } from "./components/RenderSteps";
import logo from "../../assets/images/logo.png";

export default function Register() {
  return (
    <div className="Register-container">
      <div className="logo">
        <img src={logo} alt="logo de tryning" />
      </div>
      <RenderSteps />
    </div>
  );
}
