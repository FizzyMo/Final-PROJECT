import React from "react";
import axios from "axios";
// import Suggestions from "../Suggestions"

const API_URL = 'https://newsapi.org/v2/top-headlines?sources=google-news';
const c = API_URL +'&apiKey=' + process.env.REACT_APP_API_KEY;
console.log(c);
class Home extends React.Component{

    state = {
            articles : [],
            query: '',
        }
    

    componentDidMount(){
        this.getArticles();
    }

    getArticles(){
        axios.get(API_URL +'&apiKey=' + process.env.REACT_APP_API_KEY + '&keywords=' + this.state.query)
        .then((data) => {
            this.setState({
                articles: data.data.articles
                
            })
        })
     };
     
    
     handleInputChange = e => {
         this.setState ({
            query: e.target.value
            
            
         },
         () => {
             if (this.state.query && this.state.query.length >1) 
             {
                 if (this.state.query.length % 2 === 0) {
                     this.getArticles()
                 }
             } else if (!this.state.query) {
                 
             }
         })
     }

     render(){
        return (
            
            <>
            <form>
                <input
                placeholder= "Search for some shit"
                ref={input => this.search = input}
                onChange={this.handleInputChange} 
                />

                {/* <Suggestions results={this.state.articles} /> */}
            </form>
            <div className="ui raised very padded text container segment">
    
            <ul>
                
                { this.state.articles.slice(0,1).map((article, index) => {
                    return (<li key={article}>
                    <h2>Title<br></br>{ article.title }</h2>
                    <div> Author: { article.author }</div>
                    <br></br>
                    <p>{ article.content }</p>
                    <a href={article.url}>{ article.url }</a>
                   </li> )
                })}
            </ul>
            
        </div>
       </>
        );
      }}


export default Home;
