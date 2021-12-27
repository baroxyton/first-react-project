import Button from './Button.js';
import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
function ViewCanvas(){
let {id} = useParams();
let [image,setImage] = useState(null);
let [name,setName] = useState(null);
useEffect(()=>{
(async ()=>{
let data = await (await fetch(`/api/image/${id}`)).json();
setImage(data.url);
setName(data.name);
})();
});

return (
<div>
<h1 className="text-3xl mb-3">{name}</h1>
<img width="500px" src={image} height="375px" className="bg-white shadow-sm m-auto" alt="Error"></img>
</div>
)
}
function View(){
  return (
<div className="grid h-screen w-screen text-center items-center">
<Link to="/">
<Button>Back</Button>
</Link>
<div className="list bg-blue-100 pt-20 rounded-md w-3/4 h-2/3 block shadow-xl justify-self-center self-start">
<ViewCanvas/>
</div>
</div>
)
}
export default View;
