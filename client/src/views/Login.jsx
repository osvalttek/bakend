import { useEffect } from "react";
import { useLoginMutation } from "../store/service/userService";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [login, {error, data }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login({
      email,
      password,
    });
  };

  useEffect(() => {
    if (data) navigate("/");
  }, [handleSubmit]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-3/6 flex flex-col w-full h-full justify-center items-center gap-7"
      >
        <input
          type="text"
          name="email"
          placeholder="Email"
          className=" w-full rounded h-14"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className=" w-full rounded h-14"
        />
        <button className="hidden">enviar</button>
      </form>
      {error && <p>{error.data.message}</p>}
    </>
  );
};

export default Login;
