import React from "react";

function Footer() {
    return (
        <div>
            <br></br>
            <div className="ui segment">
            <h4 class="ui right floated header">Copyright 2019 | Project Badass News</h4>
            <button className="ui github button">
                    <i class="github icon"></i>
                    Git Hub
            </button>
            <div class="ui clearing divider"></div>
                <a className="ui pink button" href='https://fizzymo.github.io/Responsive-Portfolio/' target='blank'>Carisa</a>
                <a className="ui teal button" href='https://ryangrady311.github.io/Bootstrap-Portfolio/' target='blank'>Ryan</a>
                <a className="ui blue button" href='https://maxjcoder.github.io/max-jackson-profile/' target='blank'>Max</a>
                <a className="ui yellow button" href='' target='blank'>Isamar</a>
            </div>
        </div>
    )
}

export default Footer;