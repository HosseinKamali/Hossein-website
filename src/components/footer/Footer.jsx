import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { footerOne } from "../Menu and dropdown/MenuDropDown";
import { useState } from "react";
import { footerResources } from "../Menu and dropdown/MenuDropDown";
import { footerCommunity } from "../Menu and dropdown/MenuDropDown";
import { BsAmd } from "react-icons/bs";

const Footer = () => {
  const [footer, setFooter] = useState(footerOne);
  const [resources , setResources] = useState(footerResources)
  const [community, setCommunity] =useState(footerCommunity)

  return (

    <div className="flex justify-between items-center  container m-auto h-[480px]">

      <div className="items-center w-[20%]">
        <BsAmd size={50} className="text-blue-700 mb-5 "/>
        {footer.map((item, index) => (
          <h4 className="mb-5 text-base text-slate-500 font-semibold" key={index}>{item.title}</h4>
        ))}
      </div>

      <div className=" items-center w-[20%]">
        <h3 className="text-lg font-semibold mb-5">Resources</h3>
        {
            resources.map((item,index)=>(
                <h4 key={index} className="mb-5 text-base text-slate-500 font-semibold">{item.title}</h4>
            ))
        }
      </div>

      <div className=" w-[19%]">
        <h3 className="mb-5 text-lg font-semibold">Community</h3>
        {
            community.map((item,index)=>(
                <h4 className="text-base font-semibold text-slate-500 mb-5" key={index}>{item.title}</h4>
            ))
        }
      </div>

      <div className=" w-[41%]">
        <h2 className="mb-6 font-semibold text-lg">About us</h2>
        <p className="text-left mb-3 font-semibold text-slate-500 text-lg">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form 
        
        </p>
        <p className="text-left mb-3 font-semibold text-slate-500 text-lg">
        Contrary to popular
          belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old.
        </p>
        <div className="flex mt-6 mb-4">
          <span className="p-[7px] rounded-full bg-blue-500 text-slate-50 flex justify-center items-center"><FaFacebook size={28} /></span>
          <span className="p-[7px] rounded-full bg-rose-500 text-slate-50 ml-5 flex justify-center items-center"><FaInstagram size={28} /></span>
          <span className="p-[7px] rounded-full bg-purple-800 text-slate-50 ml-5 flex justify-center items-center"><FaTwitch size={28} /></span>
          <span className="p-[7px] rounded-full bg-sky-500 text-slate-50 ml-5 flex justify-center items-center"><IoLogoTwitter size={28} /></span>
          
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
