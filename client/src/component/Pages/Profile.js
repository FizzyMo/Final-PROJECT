import React from "react";



class Profile extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {

            person: {

            }
        }
    }
    componentDidMount() {
        fetch('/api/user')
            .then(response => response.json())
            .then(resData => {
                console.log(JSON.stringify(resData))
                //do your logic here       
                //let person = resData.results
                this.setState({ person: resData }); //this is an asynchronous function
            })

    }

    render() {

        //    return( <div>
        //          { 
        //   this.state.person.map((personRecord) => {
        return <div>
            <h2>Welcome to your profile</h2>
            <h2> {this.state.person.username} </h2>
            <h2>Select Your News Sources</h2>
            <div>
                <button class="ui grey button">CNN</button>
                <button class="ui grey button">New York Times</button>
                <button class="ui grey button">Fox News</button>
                <button class="ui grey button">Huffington Post</button>
            </div>
            <br></br>
            <div>
                <button class="ui grey button">USA Today</button>
                <button class="ui grey button">Reuters » U.S. News</button>
                <button class="ui grey button">POLITICO</button>
                <button class="ui grey button">ABC News</button>
            </div>
            <br></br>
            <div>
                <button class="ui grey button">Reddit</button>
                <button class="ui grey button">MSNBC</button>
                <button class="ui grey button">CBS News</button>
                <button class="ui grey button">Newsweek</button>
            </div>
            <br></br>
            <div>
                <button class="ui grey button">National Geographic</button>
                <button class="ui grey button">Fox Sports</button>
                <button class="ui grey button">Axios</button>
                <button class="ui grey button">BBC News</button>
            </div>
            <br></br>
            <hr></hr>
            <h2>Select Your News Topics</h2>
            <div>
                <button class="ui grey button">Politics</button>
                <button class="ui grey button">Finance</button>
                <button class="ui grey button">Business</button>
                <button class="ui grey button">Entertainment</button>
            </div>
            <br></br>
            <div>
                <button class="ui grey button">Celebrities</button>
                <button class="ui grey button">Technology</button>
                <button class="ui grey button">Education</button>
                <button class="ui grey button">Weather</button>
            </div>
            <br></br>
            <div>
                <button class="ui grey button">Environment</button>
                <button class="ui grey button">Travel</button>
                <button class="ui grey button">Fashion</button>
                <button class="ui grey button">Movies</button>
            </div>
            <br></br>
            <div>
                <button class="ui grey button">Football</button>
                <button class="ui grey button">Basketball</button>
                <button class="ui grey button">Baseball</button>
                <button class="ui grey button">Soccer</button>
            </div>
            <hr></hr>
            <h3>Save your Choices</h3>
            <button class="large ui blue button">
                SUBMIT
            </button>



        </div>




        //    )};
    }
}

export default Profile;