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
            <br></br>
            <hr></hr>
            <h1>Welcome to your profile, !</h1>
            <h1> {this.state.person.username} </h1>
            <h2>Which Topics Would You Like to Read About?</h2>
            <div>
                <button class="ui grey button">Politics</button>
                <button class="ui grey button">Technology</button>
                <button class="ui grey button">Entertainment</button>
                <button class="ui grey button">Sports</button>
            </div>
            <br></br>
            <div>
                <button class="ui grey button">Finance</button>
                <button class="ui grey button">Business</button>
                <button class="ui grey button">Health</button>
                <button class="ui grey button">Travel</button>

            </div>
            <br></br>
            <div>
                <button class="ui grey button">Education</button>
                <button class="ui grey button">Weather</button>
                <button class="ui grey button">Science</button>
                <button class="ui grey button">Environment</button>
            </div>
            <br></br>
            <div>
                <button class="ui grey button">Celebrities</button>
                <button class="ui grey button">Fashion</button>
                <button class="ui grey button">Movies</button>
                <button class="ui grey button">Music</button>

            </div>
            <br></br>
            <div>
                <button class="ui grey button">Football</button>
                <button class="ui grey button">Basketball</button>
                <button class="ui grey button">Baseball</button>
                <button class="ui grey button">Soccer</button>
            </div>
            <h3>Save your Choices</h3>
            <button class="large ui blue button">
                SUBMIT
            </button>

        </div>

        //    )};
    }
}

export default Profile;