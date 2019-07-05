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
				<div class="ui menu" style={{ marginLeft: '10px', width: '16%' }}>
						<div className="ui action input">

							<form
								onSubmit={this.getArticles}>
								<input type="text"
									placeholder=" Let's read the news..."

									ref={input => this.search = input}
									onChange={this.handleInputChange}
								/>
							<button
							type = "submit"
							className="btn"> Search

							</button>
							</form>

						</div>
				</div>

				<div style={{ background: 'wheat' }}>

					<div className='.ui.container'>
						<div className='ui inverted vertical masthead center aligned segment'>
							<br />
							<h1>NEWS <i class="small newspaper outline icon"></i> GLEAN</h1>
							<h2>The news your way, all the time!</h2>
							<h2>Now you can filter the news by the topic you want.</h2>
							<br />
							<h2>Just enter a keyword above to retrive articles from a balanced array of sources.</h2>
							<br />
						</div>
					</div>

					<div className='container segment' style={{ width: '97%', padding: '10px' }}>

						{this.state.articles.slice(0).map((article, index) => {
							return (
								<ul key={article.publishedAt}>

									<div className='ui card' style={{ width: '100%', padding: '5px' }} >
										<div className='content' style={{ background: 'linear-gradient(to right, white, lightblue)', borderBottom: '1px solid grey' }}>
											<h2 className='header'>{article.title}</h2>
										</div>
										<div className='content'>
											<div class="ui sub header">Author ({article.author})</div>
										</div>
										<h4>{article.content}</h4>
										<br />
										<div class="ui bottom attached button">
											<a target='_blank' href={article.url}><i class=" large newspaper icon"></i>| View Article </a>
											<Moment format='MMMM D, YYYY (h:mm A)' style={{ float: 'right' }}>{article.publishedAt}</Moment>
										</div>
									</div>

								</ul>)

						})}
					</div>
					<br />

				</div>
			</>
		);
	}
}


export default Home;
