import Button from "./Button";
function List(props){
    return(
        <li>
            <input type="checkbox" checked={props.state}/> {props.text}
      <button>Delete</button><Button type="Exit"/> </li>
    
    )

}
export default List;