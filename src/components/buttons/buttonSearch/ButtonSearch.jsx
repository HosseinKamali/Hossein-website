import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const ButtonSearch = () => {
const [search,setSearch]=useState('')
const [results , setResults] = useState([])

console.log(search);
console.log(results);

const items = [
  'React',
  'JavaScript',
  'CSS',
  'HTML',
  'Node.js',
  'TypeScript',
  'Redux',
];


const handleSearch =(e)=> {
  const value = e.target.value.toLowerCase();
setSearch(value)

const filterItem = items.filter((item) =>
  item.toLowerCase().includes(value)
)
setResults(filterItem)
}
  
    return ( 
      //   <button className="mr-4 text-zinc-600">
      //   <IoSearchOutline
      //     size={30}
      //     className={isDark ? "text-slate-100" : "text-slate-950"}
      //   />
      // </button>

<>

    <div>
        <input className="bg-slate-100 ml-12" type="text" value={search} onChange={handleSearch}/>
      </div>

    <ul>
{
  results?.map((result,index)=>(
    <li key={index}>{result}</li>
  ))
}
    </ul>
</>
     );
}
 
export default ButtonSearch;