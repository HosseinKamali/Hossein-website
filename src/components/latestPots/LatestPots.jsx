import { useState } from "react";
import { authorList } from "../Menu and dropdown/MenuDropDown";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import Spinner from "../spinner/Spinner";
import { useAppContext } from "../../context/appContex/AppContext";


const LatestPots = () => {
  const [pots, setPots] = useState(authorList);
  const { isLoginItem, handleVisibleItem, visibleItem } = useAppContext();


  return (
    <div className="flex flex-wrap justify-between container m-auto mt-32 ">
      {pots.slice(0,visibleItem).map((pot,index) => (

        <div key={index} className="flex bg-slate-50 border-[2px] border-slate-300 rounded-3xl w-[48%] justify-between mb-6 py-4">
         
          <div className="ml-8">
          <h2 className="text-xl font-semibold mb-5">{pot.title}</h2>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full mr-2">
            <img src={pot.autorImageUrl} alt="" className="w-full h-full rounded-full object-cover" />
            </div>
            
            <h3 className="font-semibold"> {pot.name} .</h3>
            <span className="text-sm"> {pot.date}</span>
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-between ml-4">
                <div className="flex items-center">
                <span><CiHeart size={23} className="text-slate-700"/></span>
                <span ><LiaCommentDotsSolid size={23} className="text-slate-700" /></span>
                
                </div>
                <div className="flex items-center ml-10">
                <span>3 minutes</span>
                <span className="ml-3"><PiDownloadSimpleLight size={23} className="text-slate-700"/></span>
                
                </div>
              
            </div>
          </div>
          </div>
          <div className="h-[170px] w-[170px] rounded-3xl mr-7">
            <img src={pot.imageUrl} alt="" className="w-full h-full rounded-3xl object-cover" />
            </div>
         
        </div>
      ))}

      <button onClick={handleVisibleItem} className="mb-20 m-auto mt-8 bg-blue-700 text-slate-100 px-6 py-3 rounded-full text-lg font-semibold flex items-center">{isLoginItem && <Spinner/> }<span>Show me More</span></button>
    </div>
  );
};

export default LatestPots;
