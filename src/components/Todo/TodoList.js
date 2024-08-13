import React from "react";
import './TodoList.css'

const TodoList = (props) => {

    const {items , DeleteItem} = props;
    // Or
    // const New_List = props.Data;

    // if lenght > 0 do map .. if lenght =< 0 view the <p><p/>
    let Length = items.length;
    
    const ListItems = Length ? 
    (
    items.map( element => {
        return (
            <div key={element.id}>
                <span className="name">Task : {element.name }</span>
                <span className="sequence"> Sequence
                    : {element.sequence}</span>
                <span className="action icon" onClick={ () => DeleteItem(element.id)}>&times;</span> 
            </div>
        )
    })
    )

    : (<p>No Tasks To Show</p>) ;


    return (
        <div className="listItems">
            <div>
                <span className="name title">Name</span>
                <span className="sequence title">Sequence</span>
                <span className="action title">Action</span>
            </div>

            {ListItems}     
        </div>
    )
}
export default TodoList;