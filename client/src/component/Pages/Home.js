import React from "react";
import axios from "axios";
import Moment from 'react-moment';
const API_URL = 'https://newsapi.org/v2/everything?language=en&sortBy=publishedAt&';
const c = API_URL + '&apiKey=' + process.env.REACT_APP_API_KEY;

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
				<div style={{ background: 'black' }}>
					<div className='.ui.container'>
						<div className='ui inverted vertical masthead center aligned segment'>
							<hr />
							<h1>NEWS <i class="small newspaper outline icon"></i> GLEAN</h1>
							<h2>The news your way, all the time!</h2>
							<h2>Now you can filter the news by the topic you want.</h2>
							<h2>Just enter a keyword below to retrive articles from a balanced array of news sources.</h2>
							<br></br>
							<div className="ui large action input">

								<form className="ui input"
									onSubmit={this.getArticles}>
									<input type="text"
										placeholder=" Let's read the news..."

										ref={input => this.search = input}
										onChange={this.handleInputChange}
									/>
									<button style={{ marginLeft: '2%' }}
										type="submit"
										className="ui inverted grey button"> Search

									</button>

								</form>

							</div>
						</div>
					</div>

					<div className='container segment' style={{ width: '97%' }}>

						{this.state.articles.slice(0).map((article, index) => {
							return (

								<ul key={article.publishedAt}>

									<div className='ui card' style={{ width: '100%', padding: '1px' }} >
										<div className='content' style={{ background: 'linear-gradient(to left, white, wheat)', borderBottom: '1px solid grey' }}>
											<div className='header'><h2>{article.title}</h2></div>
										</div>
										<div className='content'>
											<div class="ui sub header"><h5>Author ({article.author})</h5></div>
										</div>
										<div style={{ padding: '15px' }}><h4>{article.content}</h4></div>
										<br />
										<div class="ui light gray bottom attached button" style={{ borderTop: '1px solid grey' }}>
											<a style={{ float: 'left' }} target='_blank' href={article.url}><h3><i class=" large newspaper icon"></i>| View Article</h3></a>
											<Moment format='MMMM D, YYYY (h:mm A)' style={{ float: 'right' }}>{article.publishedAt}</Moment>
										</div>
									</div>

								</ul>)
						})}
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
					</div>
				</div>
			</>
		);
	}
}

export default Home;