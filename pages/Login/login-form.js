import ButtonComponent from "../../components/Button";
import Input from "../../components/Input/Input";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div>
      <form>
        <Input />
        <Input />
        <ButtonComponent> Login</ButtonComponent>
        <span>
          <Link href="/ForgotPassword">Forgot Password?</Link>
        </span>
      </form>
    </div>
  );
}
