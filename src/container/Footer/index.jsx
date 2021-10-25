import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-v1 footer-v3">
      <div className="pb-0 bg-white">
        <div className="container">
          <div className="content-block">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-logo">
                  <img src="img/logo-dark.svg" alt="image-description"/>
                </div>
                <div className="my-4">
                  <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                </div>
                <div className="waituk_newsletter-form newsletter-v1 mt-5">
                  <form action="#" method="post">
                    <fieldset className="clearfix">
                      <div className="form-group input-holder">
                        <input type="email" className="form-control" placeholder="Email Address"/>
                        <button type ="submit" className ="btn"><i className ="fa fa-send"></i></button>
                      </div>
                    </fieldset>
                  </form>
                </div>
                <div className="mt-5">
                  <ul className="social-network">
                    <li><a href="#"><span className="icon-facebook"></span></a></li>
                    <li><a href="#"><span className="icon-twitter"></span></a></li>
                    <li><a href="#"><span className="icon-google-plus"></span></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget-block">
                  <div className="post-block mb-4 mb-lg-0">
                    <h4>RECENT POSTS</h4>
                    <div className="post-holder">
                      <a href="#" className="post-link"></a>
                      <div className="post-avatar">
                        <a href="#"><img src="img/thumb.jpg" alt="image description"/></a>
                      </div>
                      <div className="post-desc">
                        <h6><a href="#">Left Sidebar</a></h6>
                        <p>Jason - 3rd Feb 17 </p>
                      </div>
                    </div>
                    <div className="post-holder">
                      <a href="#" className="post-link"></a>
                      <div className="post-avatar">
                        <a href="#"><img src="img/thumb1.jpg" alt="image description"/></a>
                      </div>
                      <div className="post-desc">
                        <h6><a href="#">Right Sidebar</a></h6>
                        <p>Cleona - 7th May 17 </p>
                      </div>
                    </div>
                    <div className="post-holder">
                      <a href="#" className="post-link"></a>
                      <div className="post-avatar">
                        <a href="#"><img src="img/thumb2.jpg" alt="image description"/></a>
                      </div>
                      <div className="post-desc">
                        <h6><a href="#">Metro Style Portfolio</a></h6>
                        <p>Cleona - 7th May 17 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget-block">
                  <h4>Discover</h4>
                  <div className="footer-nav">
                    <ul>
                      <li><a href="#">London Web Studio</a></li>
                      <li><a href="#">UI / UX Design</a></li>
                      <li><a href="#">Concept Drawings</a></li>
                      <li><a href="#">CMS Integrations</a></li>
                      <li><a href="#">Portfolio Web Design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget-block">
                  <div className="instagram-widget">
                    <h4>INSTAGRAM</h4>
                    <ul>
                      <li>
                        <div className="img-block shine-effect image-zoom">
                          <a href="#"><img src="img/thumb4.jpg" alt="image description"/></a>
                        </div>
                      </li>
                      <li>
                        <div className="img-block shine-effect image-zoom">
                          <a href="#"><img src="img/thumb5.jpg" alt="image description"/></a>
                        </div>
                      </li>
                      <li>
                        <div className="img-block shine-effect image-zoom">
                          <a href="#"><img src="img/thumb6.jpg" alt="image description"/></a>
                        </div>
                      </li>
                      <li>
                        <div className="img-block shine-effect image-zoom">
                          <a href="#"><img src="img/thumb7.jpg" alt="image description"/></a>
                        </div>
                      </li>
                      <li>
                        <div className="img-block shine-effect image-zoom">
                          <a href="#"><img src="img/thumb8.jpg" alt="image description"/></a>
                        </div>
                      </li>
                      <li>
                        <div className="img-block shine-effect image-zoom">
                          <a href="#"><img src="img/thumb9.jpg" alt="image description"/></a>
                        </div>
                      </li>
                      <li>
                        <div className="img-block shine-effect image-zoom">
                          <a href="#"><img src="img/thumb10.jpg" alt="image description"/></a>
                        </div>
                      </li>
                      <li>
                        <div className="img-block shine-effect image-zoom">
                          <a href="#"><img src="img/thumb11.jpg" alt="image description"/></a>
                        </div>
                      </li>
                      <li>
                        <div className="img-block shine-effect image-zoom">
                          <a href="#"><img src="img/thumb12.jpg" alt="image description"/></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom text-center pt-0">
            <div className="divider-border mt-0 mb-4"></div>
            <p>Copyright 2016 - Roxine - Multi Purpose Theme by Waituk </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
