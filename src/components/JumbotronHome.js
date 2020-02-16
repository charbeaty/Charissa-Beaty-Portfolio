import React from 'react';
import Navbar from './Navbar';

const Jumbotronhome = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid text-center" id='homejumbo'>
                <Navbar />
                    <div id="jumbotext">
                    <h1 className="display-4">Hi! I'm Charissa Beaty.</h1>
                    <p>I am a front-end web developer.</p>
                    {/* <a href="/about" type="button" className="col-md-12">Learn More</a> */}
            </div>
        </div>
        </div>
    )
}
export default Jumbotronhome;