import React from "react";
import "./style.css";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log('CLICKED');
    }
    render(){
        return <button className="ui blue button" onClick={this.handleClick}>CLICK</button>;
    }
}


export default Footer;
