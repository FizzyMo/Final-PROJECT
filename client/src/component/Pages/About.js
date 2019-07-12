import React from "react";
import Carisa from "../Pages/images/carisa.jpg"
import Ryan from "../Pages/images/ryan.jpeg"
import Max from "../Pages/images/max.jpg"
import Isamar from "../Pages/images/isamar3.jpg"
import background from "../Pages/images/aboutBackground.jpg"



function About() {
    return (
        <div>
            <br />
            <div style={{ textAlign: 'center', backgroundImage: `url(${background})` }} class="ten wide column">
                <br />
                <br />
                <br />
                <br />
                <div style={{ backgroundColor: 'black', opacity: '0.8', paddingTop: '8px', paddingBottom: '8px', fontWeight: 'bolder', borderBottom: '2px solid white' }}>
                    <h1>NEWS GLEAN</h1>
                    <h2>Project 3 - UA Coding Bootcamp (Jan 2019 Cohort)</h2>
                    <h3><em>"Dynamic news filtering for today's world!"</em></h3>
                </div>
            </div>

            <div className='ui container' style={{ border: '1px, solid grey' }}>
                <br></br>
                <h4>Welcome to News Glean!  This is an interactive application that is designed to filter the news by the keywords of your choice. You can even setup your very own account! It will literally change how you consume news.</h4>

                <h4>News Glean is the brainchild of an energetic team of web developers from the University of Arizona, Carisa Sanez-Videtto, Ryan Grady, Isamar Valdivia, and Max Jackson.  Carsia, Ryan, Isamar, and Max are web developers in the making who will graduate from the university’s Coding Boot Camp in July, 2019.</h4>

                <h4>The team has harnessed the power of a dynamic technology framework, React, and the application skyrockets into production with a Mongo database and an Express server.</h4>

                <h4>Finally, with help from ‘NewsApi.org’ our application will render a dynamic list of articles from a list of balanced journalistic sources. </h4>

                <h4>News Glean utilizes a user-friendly front end design that is modern, sleek and mobile friendly.</h4>

                <h4>The styling package of Semantic makes this possible due to its mobile-friendly ease of use.  Semantic treats words and classes as exchangeable concepts. Classes use syntax from natural languages like noun/modifier relationships, word order, to link concepts intuitively.</h4>

                <h4>News Glean, dynamic news filtering for today's world!</h4>
                <br />
            </div>

            <h2 style={{ textAlign: 'center' }}>Meet Our Team</h2>
            <hr />
            <br />

            {/* Card Deck for Team */}
            <div class="ui centered cards">
                <div class="ui cards">
                    <div class="card">
                        <div class="image">
                            <img src={Carisa} alt={'Carisa'} />
                        </div>
                        <div class="content">
                            <div class="header">Carisa Saenz-Videtto</div>
                            <div class="meta">
                                <h4>Back End Development Team</h4>
                            </div>
                            <div class="description">
                                During this project I handled Semantic, React.js and the News API for our site.
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="right floated">
                                (520)278-4581
                        </span>
                            <span>

                                carisasaenz@gmail.com
                        </span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src={Ryan} alt={'Ryan'} />
                        </div>
                        <div class="content">
                            <div class="header">Ryan Grady</div>
                            <div class="meta">
                                <h4>Back End Development Team</h4>
                            </div>
                            <div class="description">
                                I focused on the backend of the website by using Express, Mongo, Node, and Passport JS.
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="right floated">
                                (480) 278-3086
                            </span>
                            <span>

                                ryangrady250@gmail.com
                        </span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src={Max} alt={'Max'} />
                        </div>
                        <div class="content">
                            <div class="header">Max Jackson</div>
                            <div class="meta">
                                <h4>Front End Development Team</h4>
                            </div>
                            <div class="description">
                                I worked as the front end design lead to develop a responsive and intuitive user experience via Semantic UI and consulted on use the overall logic and functionality of the application.
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="right floated">
                                (520) 260-1294
                        </span>
                            <span>
                                maxj@email.arizona.edu
                        </span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src={Isamar} alt={"Isamar"} />
                        </div>
                        <div class="content">
                            <div class="header">Isamar Valdivia</div>
                            <div class="meta">
                                <h4>Front End Development Team</h4>
                            </div>
                            <div class="description">
                                I served as an independent contributer to the project by offering insight into various project matters.
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="right floated">

                            </span>
                            <span>
                                isamarvaldivia21@gmail.com
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <hr></hr>

            {/* Video Content */}
            <h2 style={{ textAlign: 'center' }}>News Glean Demonstration</h2>
            <div className='card' style={{ textAlign: 'center', padding: '10px', backgroundColor: 'wheat' }}>
            <iframe width="360" height="215" src="https://www.youtube.com/embed/GXJtbQW0JeI" frameborder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='yes'></iframe>
            </div>

        </div>

    );
}

export default About;