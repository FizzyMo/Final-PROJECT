import React from "react";
import Carisa from "../Pages/images/carisa.jpg"
import Ryan from "../Pages/images/ryan.jpeg"
import Max from "../Pages/images/max.jpg"
import Isamar from "../Pages/images/isamar.jpg"


function About() {
    return (
        <div>

            <div style={{ textAlign: 'center', backgroundImage: 'src=' }} class="ten wide column">
                <br />
                <hr />
                <h1>NEWS GLEAN</h1>
                <h2>Project 3 - UA Coding Bootcamp (Jan 2019 Cohort)</h2>
                <h3><em>"Dynamic news filtering for today's world!"</em></h3>
            </div>
            <br></br>

            <div className='card'>
                <br></br>
                <p>Welcome to News Glean.  This is a dynamic application that is designed to filter the news by the keywords of your choice.  It will literally change how you consume news.  You can even setup your own profile!</p>

                <p>News Glean is the brainchild of a dynamic team of web developers from the University of Arizona, Carisa Sanez-Videtto, Ryan Grady, and Max Jackson.  Carsia, Ryan, and Max are web developers in the making who will graduate from the university’s Coding Boot Camp in July, 2019.</p>

                <p>The team has harnessed the power of a dynamic technology framework, React and it skyrockets into production with a Mongo database.  .</p>
                <p>Finally, with help from ‘NewsApi.org’ our application will render a dynamic list of articles from a balanced journalistic source. </p>

                <p>News Glean utilizes a user-friendly front end design that is modern, sleek and mobile friendly.</p>
                <p>The styling package of Semantic makes this possible due to it's </p>
                <p>Semantic UI treats words and classes as exchangeable concepts. Classes use syntax from natural languages like noun/modifier relationships, word order, to link concepts intuitively.</p>
                <br />
            </div>

            <h2 style={{ textAlign: 'center' }}>Meet Our Team</h2>
            <hr />
            <br />

            <div class="ui centered cards">
                <div class="ui cards">
                    <div class="card">
                        <div class="image">
                            <img src={Carisa} alt={'Carisa'} />
                        </div>
                        <div class="content">
                            <div class="header">Carisa</div>
                            <div class="meta">
                                <p>Front End Development Team</p>
                            </div>
                            <div class="description">
                                PLACEHOLDER
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="right floated">
                                PLACEHOLDER
                        </span>
                            <span>
                                <i class="user icon"></i>
                                PLACEHOLDER
                        </span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src={Ryan} alt={'Ryan'} />
                        </div>
                        <div class="content">
                            <div class="header">Ryan</div>
                            <div class="meta">
                                <span class="date">Back End Development Team</span>
                            </div>
                            <div class="description">
                                PLACEHOLDER
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="right floated">
                                PLACEHOLDER
                            </span>
                            <span>
                                <i class="user icon"></i>
                                PLACEHOLDER
                        </span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src={Max} alt={'Max'} />
                        </div>
                        <div class="content">
                            <div class="header">Max</div>
                            <div class="meta">
                                <a>Front End Development Team</a>
                            </div>
                            <div class="description">
                                PLACEHOLDER
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="right floated">
                                PLACEHOLDER
                        </span>
                            <span>
                                <i class="user icon"></i>
                                PLACEHOLDER
                        </span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src={Isamar} alt={"Isamar"} />
                        </div>
                        <div class="content">
                            <div class="header">Isamar</div>
                            <div class="meta">
                                <a>Front End Development Team</a>
                            </div>
                            <div class="description">
                                PLACEHOLDER
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="right floated">
                                PLACEHOLDER
                        </span>
                            <span>
                                <i class="user icon"></i>
                                PLACEHOLDER
                        </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default About;
