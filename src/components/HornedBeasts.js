import { React, Component } from "react";
import {
    Button,
    Card,
    Col

} from 'react-bootstrap';



class HornedBeasts extends Component {
    constructor(props) {
        super(props);

        this.state = {

            favorites: 0,
        };
    }

    Countfavorites = () => {
        //setState to update state (Favorites) 
        this.setState(
            {
                favorites: this.state.favorites + 1,
            });
    }





    render() {
        return (
            <>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.imgUrl} onClick={this.Countfavorites} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.description}
                                {this.props.keyword}
                                {this.props.horns}
                                <h3>favorites Image :{this.state.favorites}</h3>
                            </Card.Text>
                            <Button onClick={
                                () => {
                                    this.props.handelOpen(this.props.title ,this.props.imgUrl, this.props.description);
                                }
                            } variant="primary" >

                                Go somewhere

                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                {/*<h2> {this.props.tilte} </h2>
                <img src={this.props.imgUrl} alt="asdfr" onClick={this.Countfavorites} />
                <p>  {this.props.description}</p>
                <p>{this.props.keyword}</p>
                <p>{this.props.horns}</p>
                <h3>favorites Image :{this.state.favorites}</h3>*/}

            </>
        );
    }
}

export default HornedBeasts;
