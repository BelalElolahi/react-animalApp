import {React,Component} from "react";



class Child extends Component {
constructor(props) {
    super(props);

    this.state = {
        money:this.props.Childmoney
    };
}

    render() {
        return( 
        <div>
            <h1>{this.state.money}</h1>
        </div>
        );
    }
}



export default Child;