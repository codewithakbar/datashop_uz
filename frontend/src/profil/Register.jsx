import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, password1, password2);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <hr />
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={e => setPassword1(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            onChange={e => setPassword2(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <p>{password2 !== password1 ? "Passwords do not match" : ""}</p>
        </div>
        <button>Register</button>
      </form>
    </section>
  );
}

export default Register;