import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Connect = () => {
    return (
        <div>
            <Navbar />
                    <div className="card teamcard pt-4">
                        <div className="card-body">
                            <div className='container'>
                                <div className='row'>
                                    
                                    <div className="col-md-7 d-inline mb-3">
                                        <div className="biocontainer">
                                            <h3 className="connectwithme">Connect With Me!
                                            </h3>
                                            <h4 className="stranger">Don't be a stranger. Say Hello!</h4>
                                            <hr className="lightgreyline"></hr>
                                            {/* <p>Created user authentication and tested website to assure quality of application. Mother of 2 and 
                                                graduate of the University of Utah Coding Bootcamp program.
                                            </p> */}
                                        </div>
                                    </div>
                                    <div className="col-md-5 mb-3 leftofcard">
                                        {/* <img className="teamimage charissa float-right" src="./images/charissac.png" alt="charissa"/> */}
                                        <a className="teamatag" href='https://www.linkedin.com/in/charissa-beaty-61b99997/'>
                                            <p className='d-inline teamlink mr-3'>LINKEDIN</p><i className="fa fa-linkedin fa-2x"></i>
                                        </a>
                                        <br></br>
                                        <br></br>
                                        <a className="teamatag" href='https://github.com/charbeaty'>
                                            <p className='d-inline teamlink mr-3'>GITHUB</p><i className="fa fa-github fa-2x"></i>
                                        </a>
                                        <br></br>
                                        <br></br>
                                        <a className="bioemail" href='mailto:char.beaty11@gmai.com'>
                                            <p className='d-inline teamlink mr-3'>EMAIL</p><i className="fa fa-suitcase fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            <Footer />
        
        </div>

    );
}

export default Connect; 