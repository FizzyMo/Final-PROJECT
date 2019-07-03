import React from "react";
import axios from "axios";
import Moment from 'react-moment';
const API_URL = 'https://newsapi.org/v2/top-headlines?sources&';
const c = API_URL + '&apiKey=' + process.env.REACT_APP_API_KEY;
var timeout = null;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.getArticles = this.getArticles.bind(this);


        this.state = {
            articles: [],
            query: '',
        }
    }

    componentDidMount() {

    }

    getArticles = e => {
        if (e) {
            e.preventDefault();
        }
        if (this.state.query !== "") {
            axios.get(API_URL + "q=" + this.state.query + '&apiKey=' + process.env.REACT_APP_API_KEY)
                .then((data) => {
                    console.log("HAEY!");
                    console.log(data);
                    this.setState({
                        articles: data.data.articles


                    })
                })
                .catch((err) => {
                    console.log("BORKED");
                    console.log(err);

                })
        }

    };


    handleInputChange = e => {
        this.setState({
            query: e.target.value,


        }

        )
    }

    render() {
        return (
            <>
            <div className="menu item">
                <div class= "ui action input">
        <form
	    onSubmit={this.getArticles}>
            
          <input type="text"
            placeholder="Search for some shit"
            
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
        </form>
        </div>
        </div>
    
            <div style={{ background: 'wheat' }}>
                <br></br>
                <div className="ui raised very padded text container segment">
                    {this.state.articles.slice(0).map((article, index) => {
                        return (<ul key={article.publishedAt}>
                            <div className='content'>
                                <div className='header'>
                                    <h2>{article.title}</h2>
                                    <hr></hr>
                                </div>
                            </div>
                            <div>Author ({article.author})</div>
                            <br></br>
                            <p>{article.content}</p>
                            <hr></hr>
                            <a href={article.url}><i class=" large newspaper icon"></i>| View Article </a>
                            <Moment format='MMMM D, YYYY (h:mm A)' style={{ float: 'right' }}>{article.publishedAt}</Moment>
                        </ul>)
                    })}
                </div>
                <br></br>
            </div>
            </>
        );
    }
}


export default Home;
