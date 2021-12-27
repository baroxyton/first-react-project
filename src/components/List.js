import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
function List(){
let [list,setList] = useState(null, []);
 useEffect(()=>{
( async ()=>{
let listRq = await fetch("/api/list");
let raw = await listRq.json();
let items = raw.map(item=>{
return (
<Link to={"/view/"+item.id}>
<div key={item.id} className="w-4/5 shadow-md text-xl pt-5 pb-5 bg-slate-100 mt-3 ml-auto mr-auto rounded-md hover:shadow-xl hover:cursor-pointer">{item.name}</div>
</Link>
  );
  });
setList(items);
   })()
   });
return (

<div className="list bg-blue-100 rounded-md w-3/4 h-2/3 block shadow-xl justify-self-center self-start overflow-y-auto">
{list}
</div>
)
}
export default List;
