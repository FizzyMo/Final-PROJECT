import React from "react";



function About() {
    return (
        <div>

            <div class="ui internally celled grid">

                <div class="row">
                    <div class="three wide column">
                        <img style={{ width: '150px', height: '150px'}} src='https://fizzymo.github.io/Responsive-Portfolio/assets/images/DSC_00384.jpg' />
                    </div>

                    <div style={{ textAlign: 'center', backgroundImage: 'src=' }} class="ten wide column">
                        <h1>NEWS GLEAN</h1>
                        <h2>Project 3 - UA Coding Bootcamp (Jan 2019 Cohort)</h2>
                        <h3><em>"Dynamic news filtering for today's world!"</em></h3>
                    </div>

                    <div class="three wide column">
                        <img style={{ float: 'right', width: '150px', height: '150px' }} src='https://salt.arizona.edu/sites/salt.arizona.edu/files/styles/profile_full/public/profiles/Max%20Color.jpg?itok=X8c1PxmS' />
                    </div>

                </div>

                <div class="row">
                    <div class="three wide column">
                        <img style={{ width: '150px', height: '150px'}} src='https://ryangrady311.github.io/Bootstrap-Portfolio/assets/images/Graduation_Union_Cropped.jpeg' />
                    </div>

                    <div class="ten wide column">
                        <p>Welcome to News Glean.  This is a dynamic application that is designed to filter the news by the keywords of your choice.  It will literally change how you consume news.  You can even setup your own profile!</p>

                        <p>News Glean is the brainchild of a dynamic team of web developers from the University of Arizona, Carisa Sanez-Videtto, Ryan Grady, and Max Jackson.  Carsia, Ryan, and Max are web developers in the making who will graduate from the university’s Coding Boot Camp in July, 2019.</p>

                        <div class="ui segment">
                            <div class="ui two column very relaxed grid">
                                <div class="column">

                                    <p>The team has harnessed the power of a dynamic technology framework, React and it skyrockets into production with a Mongo database.  .</p>
                                    <p>Finally, with help from ‘NewsApi.org’ our application will render a dynamic list of articles from a balanced journalistic source. </p>


                                </div>

                                <div class="column">
                                    <p>News Glean utilizes a user-friendly front end design that is modern, sleek and mobile friendly.</p>
                                    <p>The styling package of Semantic makes this possible due to it's </p>
                                    <p>Semantic UI treats words and classes as exchangeable concepts. Classes use syntax from natural languages like noun/modifier relationships, word order, to link concepts intuitively.</p>
                                </div>

                            </div>

                            <div class="ui vertical divider">
                                and
                            </div>

                        </div>
                    </div>

                    <div class="three wide column">
                        <img style={{ float: 'right', width: '150px', height: '150px'}} src='https://bit.ly/fcc-relaxing-cat' />
                    </div>

                </div>

            </div>

        </div>
    );
}

export default About;
