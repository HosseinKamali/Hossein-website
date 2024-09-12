import { LiaFacebookF } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { useAppContext } from "../../context/appContex/AppContext";


const SignIn = () => {

    const {handleIsLogin,handleIsCloseLogin} = useAppContext()

  return (
    <div className="py-5 px-5 w-[30rem] h-[37rem] bg-slate-200 m-auto rounded-2xl">
        <div className="flex justify-between items-center mx-4 mb-7 mt-4">
        <h1 className="text-2xl font-medium">Sign in</h1>
        <button onClick={()=>handleIsCloseLogin()} className="hover:bg-slate-400 rounded-3xl p-3"><LiaTimesSolid size={22}/></button>
       
        </div>
     
      <hr className=" bg-gray-500"/>
      <form className="w-full mt-11">
        <div className="mb-7">
          <input
            type="text"
            className="w-full rounded-full p-4 outline-none border-[3px] border-slate-400"
          />
        </div>

        <div>
          <input
            type="text"
            className="w-full rounded-full  p-4 outline-none border-[3px] border-slate-400"
          />
        </div>

        <div className="flex justify-between mt-4 items-center mx-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-full rounded-full p-4 outline-none border-[3px] border-slate-400 mr-3 scale-150"
            />
            <span>Remember</span>
          </label>

          <a href="">Forgot password?</a>
        </div>
        
        <div className="flex justify-center mt-11">
          <button onClick={handleIsLogin} className="w-full p-4 bg-blue-700 text-white rounded-full text-xl font-semibold hover:bg-blue-800">Sign in</button>
        </div>

        <div className="flex justify-center items-center mt-4">
            <span>Or sign in with social</span>
        </div>

        <div className="flex justify-center items-center mt-5">
            <button className="px-8 py-3  border-[3px] border-sky-600 text-sky-600 rounded-3xl "><LiaFacebookF size={19}/></button>
            <button className="px-8 py-3 border-[3px] border-cyan-500 text-cyan-500 rounded-3xl ml-2"><FaTwitter size={19}/></button>
            <button className="px-8 py-3  border-[3px] border-red-600 text-red-600 rounded-3xl ml-2"><FaGooglePlusG size={19}/></button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
