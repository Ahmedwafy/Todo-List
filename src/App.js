import React, {Component} from "react";
import TodoList from "./components/Todo/TodoList"
import AddList from "./components/Add/AddList"


class App extends Component {

  state = {
    items : [
      {id:1, name:"Study", sequence:"1"},
      {id:2, name:"Work", sequence:"2"},
      {id:3, name:"Travel", sequence:"3"},
    ]
  }

  // the id of element clicked = id of element up there in state ? 
  // if true >> filter it >> Remove it
  DeleteItem = (id) => {
    let Selected = this.state.items.filter(element => {
      return element.id !== id 
    });
    // upadte state value
    this.setState({items:Selected});
  }

  //  - 1 ---
  // I Want >> When Press Add or Enter >> Add Data To State and Viewed In Web P
  









  
  // this function will take the updated values of state from AddList component 
  // and add it to state of App component
  // ... update = (this.state) from handleSubmit function in AddList
  addItem = (update) => {
    update.id = Math.random();
  // - 4 ---
    let New_Items = this.state.items;
  // - 5 --- Add update inside New_Items
    New_Items.push(update);
    this.setState({ update : New_Items})
  }



  render () {
    return (
      <div className="App_Container">
        <h1 className="text-center">Todo List</h1>
        <TodoList items = {this.state.items} DeleteItem = {this.DeleteItem}/>
          {/* - 2 --- put function inside props >> step 3 in AddList */}
        <AddList addItem = {this.addItem}/>
      </div>
    );
  }

}

export default App;
