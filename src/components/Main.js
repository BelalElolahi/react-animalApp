import {React,Component} from "react";

import HornedBeasts from "./HornedBeasts";
import DataPost from "./Data.json";


class Main extends Component {
  render(){
  return (
    
      <div className="row">
          {
          DataPost.map(item => {
            return  <HornedBeasts handelOpen={this.props.handelOpen}  
            title={item.title} 
            imgUrl={item.image_url} 
            description={item.description} 
            keyword={item.keyword} 
            horns={item.horns}
            />;
          }

          )
        }

      </div>
     
        
      
      
    );
  
 }
}

export default Main;
