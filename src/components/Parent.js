import {React,Component} from "react";
import Child from './Child';


class Parent extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
        
            Parintmoney : 0 ,
        }
    }

    raisedMony=()=>{
        alert("Money raised");
        //setState to update state 
        this.setState(
            {
                Parintmoney:this.state.Parintmoney+1,
            });
    }


    render() {
        return <div>
            <button onClick={this.raisedMony}>Give money</button>
            <Child Childmoney={this.state.Parintmoney} />
        </div>;
    }
}



export default Parent;