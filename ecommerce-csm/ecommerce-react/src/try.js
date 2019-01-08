import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

 
  componentDidMount() {
    this.hydrateStateWithLocalStorage();
 }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });

    //update localstorage
    localStorage.setItem(key, value);
  }

  addItem() {
    // create a new item
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });

    //update localStorage
    localStorage.setItem('list', JSON.stringify(list));
    localStorage.setItem("newitem", "");
  }

//   deleteItem(id) {
//     // copy current list of items
//     const list = [...this.state.list];
//     // filter out the item being deleted
//     const updatedList = list.filter(item => item.id !== id);

//     this.setState({ list: updatedList });

//     //update localstorage
//     localStorage.setItem("list", JSON.stringify(updatedList));
//   }

  hydrateStateWithLocalStorage() {
      //for all items in state
      for (let key in this.state) {
          //if the key exists in localstorage
          if(localStorage.hasOwnProperty(key)) {
              //get the key value from localStorage
              let value = localStorage.getItem(key);
              //parse the localStorage string and setState
              try {
                  value = JSON.parse(value);
                  this.setState({ [key]: value});
              } catch (e)  {
                  //handle empty string
                  this.setState({ [key]: value})
              }
          }
      }
  }

  render() {
    return (
      <div className="App">

          Add an item to the list
          <br />
          <input
            type="text"
            placeholder="Type item here"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          >
            &#43; Add
          </button>
          <br /> <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
    );
  }
}

export default App;