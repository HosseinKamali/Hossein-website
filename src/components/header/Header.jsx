import { useState } from "react"
import bgImage from "./../../assets/image/bruno-van-der-kraan-gL00qFb_ivE-unsplash.jpg"
import {authorList} from "./../Menu and dropdown/MenuDropDown"
import { useAppContext } from "../../context/appContex/AppContext"

const Header = () => {
    const [authorLists,setAuthorList]=useState(authorList)
    const {isDark} =useAppContext()
    
  
    return (  
        <div className="flex justify-center items-center overflow-hidden">
            <div className=" w-[86%] h-[720px] flex justify-center items-center rounded-[4rem] relative mt-5">
                <img src="https://cdn.dribbble.com/userupload/14048199/file/original-1291d8b6830766ffaddd2e7e248c9764.png?resize=1024x768"  className={`w-full h-full rounded-[4rem] ${isDark ?'border-[1px] border-slate-500':'border-none'}`}/>

                <div className="absolute bg-slate-100 p-10 top-5 right-[1%] w-[33%] h-[95%] rounded-[4rem] custom-scroll ">
                <ul className="p-1">
                    {authorLists &&
                      authorLists.map((item,index)=>(
                        <li key={index} className="mb-10 ">
                        <h2 className="font-semibold text-lg mb-4">{item.title}</h2>
                        <div className="flex border-b-2 border-slate-200 items-center pb-7">
                            <div className="w-10 h-10 rounded-full mr-3">
                            <img className="rounded-full w-full h-full object-cover"  src={item.autorImageUrl} />
                            </div>
                            
                            <span className="font-semibold text-sm text-gray-700 mr-3">{item.name} .</span>
                            <span className="font-semibold text-slate-500 text-sm"> {item.date}</span>
                        </div>
                        </li>
                      ))  
                    }
                  
                 
                </ul>
            </div>
            </div>
         
        </div>
    );
}
 
export default Header;