import React from 'react';
  
const Footer = () => (
  <footer className="footer">

<div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row"> 
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="/Job">Web design</a></li>
                            <li><a href="/Job">Development</a></li>
                            <li><a href="/Job">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="/Job">Company</a></li>
                            <li><a href="/Job">Team</a></li>
                            <li><a href="/Job">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    
                </div>
                
            </div>
        </footer>
    </div>
    

    {/* <div className='footersec'>
        <img src="/img/linkedin.png" alt="" />
        <img src="/img/instagram.png" alt="" />
        <img src="/img/facebook.png" alt="" />
        <img src="/img/youtube.png" alt="" />
        <img src="/img/twitter.png" alt="" />
    </div> */}


  </footer>
);
  
export default Footer;