import React from 'react';
import Navbar from './Navbar';

const Jumbotronhome = () => {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid text-center" id='homejumbo'>
                <Navbar />
                    <div id="jumbotext">
                    <h1 class="display-4">Hi! I'm Charissa Beaty.</h1>
                    <p>I am a front-end web developer.</p>
                    </div>
            </div>
        </div>
    )
}
export default Jumbotronhome;