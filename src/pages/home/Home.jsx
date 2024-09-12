import { useAppContext } from "../../context/appContex/AppContext";
import Header from "../../components/header/Header";
import LatestPots from "../../components/latestPots/LatestPots";
import LiveMusic from "../../components/liveMusic/LiveMusic";
import SignIn from "../../components/SignIn/SignIn";
import Topics from "../../components/topics/Topics";

const Home = () => {
  

  const { isLogin,isDark, handleIsDark,showLogin } = useAppContext();

  const styleSignIN = {
    opacity: showLogin ? 1 : 0,
    visibility: showLogin ? "visible" : "hidden",
    transition: "opacity .3s ease-in-out, visibility .3s ease-in-out",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 40,
  };

  const bgSignIn = {
    opacity: showLogin ? 1 : 0,
    visibility: showLogin ? "visible" : "hidden",
    transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(31, 41, 55, 0.6)", 
    zIndex: 20,
  };

  return (
    <div className={`relative ${isDark ? "bg-slate-700" : "bg-white"}`}>
      <div className=" absolute" style={bgSignIn}></div>
      <div style={styleSignIN} className="absolute z-40 ">
        <SignIn />
      </div>
      <Header />
      <Topics />
      <LiveMusic />
      <LatestPots />
    </div>
  );
};

export default Home;
