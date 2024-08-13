import React, { Component } from "react";
import './AddList.css'

class AddList extends Component {

    state = {
        name : '',
        sequence : '',
    }

    handleChange = (e) => {
        this.setState ({
            // Next Line To Define Which Input Field User Write Inside
            // And Update State Value   
            [e.target.id] : e.target.value
            // or
            // name : e.target.value
            // sequence : e.target.value
        });
    }

    handleSubmit = (ele) => {
        ele.preventDefault();

        if (ele.target.name.value !== '') {
            //  - 3 ---
            // put the new updated values of state inside the function
            this.props.addItem(this.state) 

            // - 6 --- Clear The Fields inputs after submit
            this.setState ({
                name : '',
                sequence : '',
            })
        } else {
            return null;
        }
       

    }

    render () {
        return (
            <div className="inputcontainer">
                <form onSubmit={this.handleSubmit}>
                    {/* - 7 --- add value of 6th step to name & sequence */}
                    <input type="text" placeholder="Enter Task..." id="name" onChange={this.handleChange} value={this.state.name}/>
                    <input type="number" placeholder="Sequence..." id="sequence" onChange={this.handleChange} value={this.state.sequence}/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }

}
export default AddList;