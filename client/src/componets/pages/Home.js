import React from "react";
import axios from "axios";

class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            articles : []
        }
    }

    componentDidMount(){
        this.getArticles().then(res =>
            {
                 console.log(res);
                this.setState({articles : res.data.articles});
            });
    }

    getArticles(){
        return axios.get('https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=496e966f5c324e3080abd07b9111c5c3');
     };

      render(){
        return (
            <div className="ui raised very padded text container segment">
        <p>
        Yo!
        
         {this.state.articles[0] ? this.state.articles[0].author : ''}
        
        </p>
        
        </div>
        );

      }

}


export default Home;
