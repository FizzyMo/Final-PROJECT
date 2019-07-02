import React from "react";
import axios from "axios";
import Moment from 'react-moment';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        this.getArticles().then(res => {
            console.log(res);
            this.setState({ articles: res.data.articles });
        });
    }

    //     url = ('https://newsapi.org/v2/top-headlines?q=' + ','.join(keywords)) + '&language=en' + '&apiKey=' + api_key + '&pageSize=100'

    // response = requests.get(url)

    // for article in response.json()['articles']:
    //     print(article['title'])

    // print(url)

    // print(response.json()['totalResults'])
    keywords = ["trump", "bitcoin"];

    getArticles() {
        return axios.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=496e966f5c324e3080abd07b9111c5c3');
    };

    render() {
        return (
            <div style={{ background: 'wheat' }}>
                <br></br>
                <div className="ui raised very padded text container segment">
                    {this.state.articles.slice(0, 1).map((article, index) => {
                        return (<ul key={index}>
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
        );
    }
}


export default Home;
