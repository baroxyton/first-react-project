import {Link} from 'react-router-dom'
import Button from './Button.js'
import List from './List.js'
function Start(){
return (
<div className="grid h-screen w-screen text-center items-center">
<h1 className="text-slate-200 text-3xl">List of Drawings</h1>
<Link to="/add">
<Button>Add Drawing</Button>
</Link>
<List/>
 </div>
 )
}
export default Start;
