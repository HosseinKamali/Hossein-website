import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../../../redux/counterSlice";
import { addParts } from "../../../redux/userSlice";


const Mobile = () => {
    const counter =useSelector(state => state.counter.value)
    const rita = useSelector(state =>state.rita.parts)
    const despatch = useDispatch()
    console.log(rita);
    return ( 
        <div>
            <h1>counter:{counter}</h1>
            <button className="p-4 border-[2px] " onClick={()=>despatch(increase())}>increase</button>
            <br />
            <br />
            <button className="p-4 border-[2px]  " onClick={()=>despatch(decrease())}>decrease</button>
<br />
            <button className="p-4 border-[2px]  " onClick={()=>despatch(addParts(["boobs","leg"]))}>add</button>
        </div>
     );
}
 
export default Mobile; 