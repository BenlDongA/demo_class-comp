import React from "react";
class Item extends React.Component{
constructor(props){
    super(props)
}
render(){
    return(
        <tr>
            <td>{this.props.name}</td>
            <td>{this.props.price}</td>
            <td></td>
        </tr>
    )
}
}
export default Item