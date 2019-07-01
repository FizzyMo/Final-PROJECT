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

//     url = ('https://newsapi.org/v2/top-headlines?q=' + ','.join(keywords)) + '&language=en' + '&apiKey=' + api_key + '&pageSize=100'

// response = requests.get(url)

// for article in response.json()['articles']:
//     print(article['title'])

// print(url)

// print(response.json()['totalResults'])
keywords = ["trump","bitcoin"];

    getArticles(){
        return axios.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=496e966f5c324e3080abd07b9111c5c3');
     };

     render(){
        return (
            <div className="ui raised very padded text container segment">
    
            <ul>
                { this.state.articles.slice(0,1).map((article, index) => {
                    return (<li key={index}>
                    <h2>Title<br></br>{ article.title }</h2>
                    <div> Author: { article.author }</div>
                    <br></br>
                    <p>{ article.content }</p>
                    <a href={article.url}>{ article.url }</a>
                   </li> )
                })}
            </ul>
        </div>
        );
      }}


export default Home;
