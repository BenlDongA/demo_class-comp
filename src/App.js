// import logo from './logo.svg';
import './App.css';
import React from "react";
import Item from './ittem';

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       count: 0,
//     };
  
//     this.setUpcount = this.setUpcount.bind(this)
//     this.setDowcount = this.setDowcount.bind(this);
//     this.setReset = this.setReset.bind(this);
//   }
//   setUpcount(){
//     this.setState({
//       count: this.state.count +1
//     })

//   }
//   setDowcount(){
//     this.setState({
//       count: this.state.count -1
//     })
//   }
//   setReset(){
//     this.setState({
//       count: 0
//     })
//   }
//   render(){
//     return(
//       <div className='App'>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.setUpcount}>+</button>
//         <button onClick={this.setReset}>reset</button>
//         <button onClick={this.setDowcount}>-</button>
//       </div>
//     )
//   }
// }


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dish: [
        {
          name: "banh mi",
          price: "1000"
        },
        {
          name: "Xooi",
          price: "5000"
        },
        {
          name: "com tam",
          price: "2000"
        },
        {
          name: "pho heo",
          price: "5000"
        },
        {
          name: "xuc xich",
          price: "10000"
        }
      ], name: "", 
      price: "" 
    
    };
  }

  handleChangeInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  setDish() {
    let item = {
      name: this.state.name,
      price: this.state.price
    };
    this.setState({
      dish: [item, ...this.state.dish],
     
    });
  }

  render() {
    let { dish, name, price } = this.state;
    let datas = dish.map(function (item, index) {
      return <Item{...item}/>
    });

    return (
      <div>
        <form>
          <label>First name:</label><br />
          <input
            name="name"
            onChange={this.handleChangeInput.bind(this)}
            value={name}
          /><br />
          <label>Last name:</label><br />
          <input
            name="price"
            onChange={this.handleChangeInput.bind(this)}
            type="text"
            value={price}
          /><br /><br />
          <button onClick={this.setDish.bind(this)} type="button">Submit</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>  
          <tbody>
            {datas}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
