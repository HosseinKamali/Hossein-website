import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { menuItem } from "./../Menu and dropdown/MenuDropDown";
import { useAppContext } from "../../context/appContex/AppContext";

const TitleMenu = () => {
  const [menuItems] = useState(menuItem);
  const { isDark } = useAppContext();

  return (
    <ul className="flex justify-center h-full items-center">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="ml-12 cursor-pointer relative group h-full flex justify-center items-center"
        >
          {item.title === "Home" ? (
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl font-semibold ${
                  isActive
                    ? "bg-slate-200 py-2 px-4 rounded-3xl"
                    : isDark
                    ? "text-slate-100"
                    : "text-slate-950"
                }`
              }
            >
              Home
            </NavLink>
          ) : (
            <span
              className={`text-xl font-semibold hover:text-slate-600 ${
                isDark ? "text-slate-100" : "text-slate-950"
              }`}
            >
              {item.title}
            </span>
          )}

          {item.subMenu && (
            <ul className="absolute left-0 top-20 hidden group-hover:block bg-white border rounded shadow-lg py-2 pr-4 pl-2 z-10">
              {item.subMenu.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className="pr-36 pl-2 py-2 hover:bg-gray-200 whitespace-nowrap rounded-lg"
                >
                  <Link to={subItem.path} className="w-full text-base">
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TitleMenu;
