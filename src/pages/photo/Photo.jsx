
import { useState } from "react";
import { authorList } from "../../components/Menu and dropdown/MenuDropDown";
import Photos from "../../components/photos/Photos";
import { useAppContext } from "../../context/appContex/AppContext";
import Spinner from "../../components/spinner/Spinner";


const Photo = () => {
 
  const [author,setAuthor] = useState(authorList)
 const {isDark ,isLoginItem, handleVisibleItem, visibleItem }=useAppContext()

  return (

    <div className={`  overflow-hidden min-h-screen h-full ${isDark ? 'bg-slate-700':'from-lime-400 to-lime-900 bg-gradient-to-b'}`}>
      <div className="container mx-auto">
      <div className="flex justify-center items-center mt-10 h-screen">
        <div className={`bg-slate-950 h-full w-full flex items-center justify-center rounded-l-full ${isDark ? 'bg-lime-500':'bg-slate-950'}`}>
          <h1 className={` text-6xl ${isDark ?'text-slate-950':'text-lime-500'}`}>PHOTOS</h1>
        </div>

        <img
          className="h-full w-full"
          src="https://cdn.dribbble.com/users/31752/screenshots/15555654/media/6cdfccc29ef5940b5d1de8b4fd132cbd.jpg?resize=768x576&vertical=center"
          alt=""
        />
        
      </div>
      <div className="flex justify-between items-center mb-16 mt-24 flex-wrap">
        
      {
          author.slice(0,visibleItem).map((item,index)=>(
      <Photos key={index} {...item} />
          ))
        }
      </div>
      <button onClick={handleVisibleItem} className=" mx-auto mb-32 bg-blue-700 text-slate-100 px-6 py-3 rounded-full text-lg font-semibold flex items-center">{isLoginItem && <Spinner/> }<span>Show me More</span></button>
     
      
      

  
      </div>
     

    </div>
  );
};

export default Photo;
