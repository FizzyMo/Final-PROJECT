import React from "react";

function Footer() {
    return (
        <div>
            <div className="ui compact segment" style={{ width: '100%', backgroundColor: 'wheat'}}>
            <h4 class="ui right floated header"></h4>
            <div class="ui clearing divider"></div>
                <a className="ui pink button" href='https://fizzymo.github.io/Responsive-Portfolio/' target='blank'>Carisa</a>
                <a className="ui teal button" href='https://ryangrady311.github.io/Bootstrap-Portfolio/' target='blank'>Ryan</a>
                <a className="ui blue button" href='https://maxjcoder.github.io/max-jackson-profile/' target='blank'>Max</a>
                <a className="ui yellow button" href='' target='blank'>Isamar</a>
                <button className="ui github button" style= {{ float: 'right'}}>
                    <i class="github icon"></i>
                    Git Hub | Copyright 2019 | Project Badass
            </button>
            </div>
        </div>
    )
}

export default Footer;