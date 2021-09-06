import {React,Component} from "react";



class HornedBeasts extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            
            favorites : 0 ,
            };
        }
    
        Countfavorites=()=>{
            //setState to update state (Favorites) 
            this.setState(
                {
                    favorites:this.state.favorites+1,
                });
        }
    
 
 
 
 
    render(){
  return (
     <>
         <h2> {this.props.tilte} </h2>
         <img src={this.props.imgUrl} alt="asdfr" onClick={this.Countfavorites} />
         <p>  {this.props.description}</p>
         <p>{this.props.keyword}</p>
         <p>{this.props.horns}</p>
         <h3>favorites Image :{this.state.favorites}</h3>
           
     </>
  );}
}

export default HornedBeasts;
