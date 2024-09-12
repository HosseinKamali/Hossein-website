import React from "react";
import TitleMenu from "../titleMenu/TitleMenu";
import { BsAmd } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { useAppContext } from "../../context/appContex/AppContext";
import { Link } from "react-router-dom";
import { useSizeContext } from "../../context/sizeContext/SizeContext";
import ButtonShop from "../buttons/buttonShop/ButtonShop";
import ActionButton from "../buttons/actionButton/ActionButton";
import ButtonSearch from "../buttons/buttonSearch/ButtonSearch";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const {
    isDark,
    handleIsDark,
    handleIsLogOut,
    cartQty,
    isLogin,
    handleIsShowLogin,
  } = useAppContext();
  const { cartQtyOne } = useSizeContext();
  const qty = cartQty + cartQtyOne;

  return (
    <div className={isDark ? "bg-slate-700" : "bg-white"}>
      <div
        className={`flex justify-end flex-row-reverse items-center h-20 container m-auto ${
          isDark ? "bg-slate-700" : "bg-white"
        }`}
      >
        <div className="ml-auto flex justify-center items-center">
          <button className="mr-4 text-zinc-600" onClick={handleIsDark}>
            {isDark ? (
              <FaRegMoon size={30} className="text-slate-100" />
            ) : (
              <MdOutlineWbSunny size={30} className="text-slate-950" />
            )}
          </button>
          <Link to="/shop2">
            <IoSearchOutline size={30}  className="mr-4"/>
          </Link>

          <Link to="cart" className="mr-4 text-zinc-600 relative">
            <ButtonShop qty={qty} isdark={isDark} />
          </Link>

          {isLogin ? (
            <ActionButton onClick={handleIsLogOut}>Log Out</ActionButton>
          ) : (
            <ActionButton onClick={handleIsShowLogin}>Log In</ActionButton>
          )}
        </div>

        <div className="flex h-full justify-end items-center ml-7">
          <TitleMenu />
        </div>

        <Link to="/">
          <BsAmd size={30} className="text-blue-700" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
