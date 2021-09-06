import {React,Component} from "react";



class HornedBeasts extends Component {
  render(){
  return (
     <>
         <h2> {this.props.tilte} </h2>
         <img src={this.props.imgUrl} alt="asdfr" />
         <p>  {this.props.description}</p>
     </>
  )
 }
}

export default HornedBeasts;