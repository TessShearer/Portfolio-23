import React from 'react';
import downarrow from '../../assets/arrowdown.png';

function Intro() {

    return (
        <section>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <h1 id="introduction">Welcome! <br></br>I'm Tess <br></br>Shearer</h1>
                    <div id="scroll">
                    <p>Continue Scrolling</p>
                    <img src={downarrow} alt="arrow pointing down"/>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </section>
    );
}

export default Intro;