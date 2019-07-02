import React from "react";



function About() {
    return (
        <div>

            <div class="ui internally celled grid">

                <div class="row">
                    <div class="three wide column">
                        <img src='https://via.placeholder.com/150.png/09f/fff' />
                    </div>

                    <div style={{ textAlign: 'center', backgroundImage: 'src=' }} class="ten wide column">
                        <h1>Title</h1>
                        <h2>Subheading</h2>
                        <h3><em>"Slogan..."</em></h3>
                    </div>

                    <div class="three wide column">
                        <img style={{ float: 'right' }} src='https://via.placeholder.com/150.png/09f/fff' />
                    </div>

                </div>

                <div class="row">
                    <div class="three wide column">
                        <img src='https://via.placeholder.com/150.png/09f/fff' />
                    </div>

                    <div class="ten wide column">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Nunc sed velit dignissim sodales ut eu. aliquet porttitor lacus luctus.</p>

                        <p>Tempus iaculis urna id volutpat. Massa ultricies mi quis hendrerit. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Neque aliquam vestibulum morbi blandit cursus risus at. Elementum nibh tellus molestie nunc non. In nibh mauris cursus mattis molestie a iaculis at erat. Mattis vulputate enim nulla aliquet porttitor lacus luctus.</p>

                        <div class="ui segment">
                            <div class="ui two column very relaxed grid">
                                <div class="column">

                                    <p>Tempus iaculis urna id volutpat. Massa ultricies mi quis hendrerit.</p>
                                    <p>Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Neque aliquam vestibulum morbi blandit cursus risus at.</p>
                                    <p>Elementum nibh tellus molestie nunc non. In nibh mauris cursus mattis molestie a iaculis at erat. Mattis vulputate enim nulla aliquet porttitor lacus luctus.</p>

                                </div>

                                <div class="column">
                                    <p> In nibh mauris cursus mattis molestie a iaculis at erat. Mattis vulputate enim nulla aliquet porttitor lacus luctus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.</p>
                                    <p>Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Nunc sed velit dignissim sodales ut eu. aliquet porttitor lacus luctus.</p>
                                </div>

                            </div>

                            <div class="ui vertical divider">
                                and
                            </div>

                        </div>
                    </div>

                    <div class="three wide column">
                        <img style={{ float: 'right', }} src='https://via.placeholder.com/150.png/09f/fff' />
                    </div>
                    
                </div>

            </div>

        </div>
    );
}

export default About;
