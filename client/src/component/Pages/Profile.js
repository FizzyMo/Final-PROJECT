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
        </div>

        //    )};
    }
}

export default Profile;