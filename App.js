import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors.userName);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
      style={{
        position: "absolute",
        top: "40%",
        left: "42%",
        display: "flex",
        flexDirection: "column"
      }}>
        <h2>Enter Name</h2>
        <input
          type="text"
          {...register("userName", { required: true, minLength: 2 })}
        />
        {errors.userName && errors.userName.type === "required" && (
          <p className="error">Name is required</p>
        )}
        {errors.userName && errors.userName.type === "minLength" && (
          <p className="error">MinLenght of two character required</p>
        )}
     
      <button className="btn" type="submit">Enviar pedido</button>
      </div>
    </form>
  );
};
export default App;
