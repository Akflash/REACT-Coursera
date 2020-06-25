import React from 'react'
import ReactDOM from 'react-dom';
import DISHES from "./dishes";

class MyArray extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
                image: this.props.item.image,
                name: this.props.item.name,
                category: this.props.item.category,
                desc : this.props.item.description,
                count :0
        }
        //console.log(this.state.desc)
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick()
    {
        this.setState((prevState) =>{
            return {
                count : prevState.count+1
            }
        })
     console.log("I was clicked "+this.state.count + " times");
    }
    
    render() {
        
        return (
            <div>
                <img onMouseOver={() => console.log("Hovered")}  src={this.state.image} alt={this.state.name}></img> <br />
                <button onClick={this.handleClick}> Click me</button>
                <h1>Name :{this.state.name}</h1>
                <h2>Category:{this.state.category}</h2>
                <h3>Description: {this.state.desc}</h3>
                <hr />
            </div>

        )
    }
}
export default MyArray;