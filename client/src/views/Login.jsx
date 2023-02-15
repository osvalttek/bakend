import { useEffect } from "react";
import { useLoginMutation } from "../store/service/userService";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [login, { error, data }] = useLoginMutation();
  const navigate = useNavigate();

  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submit = (data) => login(data);
  console.log("🚀 ~ file: Login.jsx:19 ~ Login ~ submit", submit)

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   login({
  //     email,
  //     password,
  //   });
  // };

  useEffect(() => {
    if (data) navigate("/");
  }, [data]);
  // console.log(watch("email"));

  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className="w-3/6 flex flex-col w-full h-full justify-center items-center gap-7"
      >
        <input
          type="text"
           defaultValue="pedlo"
          {...register("email", {
            required: true,
            minLength: 4,
            maxLength: 20,
            // pattern:
            //   /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
          })}
          placeholder="Email"
          className=" w-full rounded h-14"
        />
        {errors?.email?.type === "pattern" && <p>Pone un email con onda</p>}
        {errors?.email?.type === "required" && (
          <p>El campo nombre no puede estar vacio</p>
        )}
        {errors?.email?.type === "maxLength" && (
          <p>Ponete un email mas corto</p>
        )}
        {errors?.email?.type === "minLength" && (
          <p>Ponete un email mas largo</p>
        )}
        <input
          type="password"
          {...register("password")}
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
