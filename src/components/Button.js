let colorStyle = {
color: "#BD4C10",
"backgroundColor":"#F8E9CD"
}
function Button(props){
  return (
<button style={colorStyle} onClick={props.onClick} className="inline-block p-5 text-orange-500 text-2xl w-fit rounded-sm shadow-md m-10">{props.children}</button>
)
}
export default Button
