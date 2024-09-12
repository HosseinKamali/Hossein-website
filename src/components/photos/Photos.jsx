import { CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { useAppContext } from "../../context/appContex/AppContext";



const Photos = ({author,date,title,autorImageUrl,imageUrl}) => {

  const {isDark,setIsDArk}=useAppContext()
  
  

  
 
  return (

    <div className={`h-[27rem] w-[24%] mt-7 rounded-3xl border-[1px] border-gray-50 ${isDark ? 'bg-slate-700 text-slate-50': ' bg-slate-50 '}`}>
      <img className="rounded-t-3xl w-full h-[53%] object-coverr"
        src={imageUrl}
        alt=""
      />
      <div className="mx-4">
      <div className="flex items-center mt-5 ">
        <div className="w-10 h-10">
        <img className="w-full h-full rounded-full object-cover" src={autorImageUrl} />
        </div>
        
        <span className="ml-2 font-semibold">{author}</span>
        <span className="ml-2 text-slate-600">- {date}</span>
      </div>
      <h2 className="mt-3 text-lg font-semibold">{title}</h2>
      <div className="flex justify-between mt-5">
        <div className="flex justify-center items-center bg-slate-100 rounded-3xl px-3 py-2"><CiHeart size={22} className="text-slate-700"/>
        <span>120</span>
        </div>
        <div className="flex justify-center items-center bg-slate-100 rounded-3xl px-3 py-2"><LiaCommentDotsSolid  size={22} className="text-slate-700"/>
        <span>10</span>
        </div>
        <div className=" flex justify-center items-center rounded-3xl px-3 py-2 bg-slate-100">
        <PiDownloadSimpleLight size={22} className="text-slate-700   "/>
        </div>
        
        
        
        
        
        
      </div>
      </div>
    
    </div>
  );
};

export default Photos;
