import Link from "next/link";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Lama Social.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ut nulla possimus fuga, eligendi, exercitationem eum amet officia
            culpa repellat mollitia. Fugiat corporis quia deserunt cumque
            accusantium ex, excepturi commodi.
          </p>
          <span>Do you have an account</span>
          <Link href="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
