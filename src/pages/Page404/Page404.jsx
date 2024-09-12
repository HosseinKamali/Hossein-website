import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

const Page404 = () => {
  const form = useForm();
  const { register ,control,handleSubmit, formState:{errors} } = form;

  const onSubmit = (data)=>{
    console.log([data]);
  }

  return (
    <div className="mt-40 mb-60 container mx-auto ">
      <h1 className="text-center">loging</h1>

      <form className="flex flex-col justify-between items-center" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="userName">User Name</label>
          <input type="text" id="userName"  className="border-2 border-slate-950 rounded-lg min-w-80 p-2" {...register("userName",{
            required:"you should write your User Name"
          })} />
          <p className="text-red-700">{errors.userName?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" id="email"  className="border-2 border-slate-950 rounded-lg min-w-80 p-2" {...register("email",{
            required:"you should write your User Name",
            pattern:{
                value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message:"invalid form"
            }
          })} />
          <p className="text-red-700">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="border-2 border-slate-950 rounded-lg min-w-80 p-2"  {...register("password",{
            required:"you should write your User Name"
          })} />
          <p className="text-red-700">{errors.password?.message}</p>
        </div>
        <button type="submit">submit</button>
      </form>
      <DevTool control={control}/>
    </div>
  );
};

export default Page404;
