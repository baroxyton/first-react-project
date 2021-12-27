import Button from "./Button.js"
import { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Canvas from './Canvas.js';
import React from 'react';
function SubmitButton(){
  let [error, setError] = React.useState(null);
  let navigate = useNavigate();
  async function submit(){
  let name = document.querySelector("input").value;     
  let url = document.querySelector("canvas").toDataURL();
  let body = {url,name};
  try{
  await fetch("/api/submit", {
  method:"POST",
  headers:{
  "Content-Type":"Application/JSON"
  },
  body:JSON.stringify(body)
  });
  }
  catch(err){
  setError(err);
  }
  finally{
  navigate("/");
  }
  
}
return (<Button onClick={submit}>Add</Button>)
}

function Edit(){
return (
<div className="h-screen w-screen text-center">
<h1 className="text-slate-200 text-3xl">Adding Drawing</h1>
<Link to="/"><Button>Go Back</Button></Link>
<div className="flex h-4/5 w-screen justify-center items-center">
<div className="w-4/5 h-4/5 bg-blue-100 inline-block rounded-md shadow-xl">
<input className="w-2-3 m-10 text-2xl" placeholder="Drawing name"/>
<Canvas/>
<SubmitButton></SubmitButton>
</div>
</div>
</div>
)
}
export default Edit;
