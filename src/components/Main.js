import {React,Component} from "react";
import HornedBeasts from "./HornedBeasts";
import DataPost from "./Data.json";


class Main extends Component {
  render(){
  return (
      <>
      <h3> main </h3>
     
        {
          DataPost.map(item => {
            return  <HornedBeasts tilte={item.title} imgUrl={item.image_url} description={item.description} keyword={item.keyword} horns={item.horns}/>;
          }

          )
        }
      
      </>
    );
  
 }
}

export default Main;
