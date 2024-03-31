import Link from "next/link";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ut nulla possimus fuga, eligendi, exercitationem eum amet officia
            culpa repellat mollitia. Fugiat corporis quia deserunt cumque
            accusantium ex, excepturi commodi.
          </p>
          <span>Don't you have an account</span>
          <Link href="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
