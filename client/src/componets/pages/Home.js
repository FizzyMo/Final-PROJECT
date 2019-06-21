import React from "react";
//import API from "../../utils/API";
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
                 //set the state
                 console.log(res);
                this.setState({articles : res.data.articles});
            });
    }

    getArticles(){
        return axios.get('https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=496e966f5c324e3080abd07b9111c5c3');
     };


    //  var test = "test";
//   var newsArticle =  getArticles().then(res => {
//         //console.log(res);
//         //console.log(res.data.articles[0]);
//         console.log(res.data.articles[0].title);
//         console.log(res.data.articles[0].author);
//         console.log(res.data.articles[0].content)
//   }
    //    ); 
      //    console.log(newsArticle);


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
