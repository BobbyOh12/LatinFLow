import React from 'react'
import "../../assets/css/paper-kit.css"

export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    render() {
        return(
            <React.Fragment>

            <div>
                 <nav className="navbar navbar-expand-lg bg-white fixed-top nav-down navbar-transparent" color-on-scroll="500">
    <div className="container">
      <div className="navbar-translate">
        <a className="navbar-brand" href="https://demos.creative-tim.com/paper-kit-2-pro/index.html" rel="tooltip" title="Paper Kit 2 PRO" data-placement="bottom" target="_blank">
          Paper Kit 2 Pro
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-bar bar1"></span>
          <span className="navbar-toggler-bar bar2"></span>
          <span className="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" data-nav-image="../assets/img/blurred-image-1.jpg" data-color="orange">
        <ul className="navbar-nav ml-auto">
          <li className="dropdown nav-item">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false">
              Components </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-danger">
              <a href="../index.html" className="dropdown-item">
                All Components
              </a>
              <a href="http://demos.creative-tim.com/paper-kit-2-pro/docs/1.0/getting-started/introduction.html" className="dropdown-item">
                Documentation
              </a>
            </div>
          </li>
          <li className="dropdown nav-item">
            <a href="#" className="dropdown-toggle nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown">
              Sections
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-danger" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" data-scroll="true" data-id="#headers" href="../sections.html#headers">
                <i className="nc-icon nc-tile-56"></i> Headers
              </a>
              <a className="dropdown-item" data-scroll="true" data-id="#features" href="../sections.html#features">
                <i className="nc-icon nc-settings"></i> Features
              </a>
              <a className="dropdown-item" data-scroll="true" data-id="#blogs" href="../sections.html#blogs">
                <i className="nc-icon nc-bullet-list-67"></i> Blogs
              </a>
              <a className="dropdown-item" data-scroll="true" data-id="#teams" href="../sections.html#teams">
                <i className="nc-icon nc-single-02"></i> Teams
              </a>
              <a className="dropdown-item" data-scroll="true" data-id="#projects" href="../sections.html#projects">
                <i className="nc-icon nc-calendar-60"></i> Projects
              </a>
              <a className="dropdown-item" data-scroll="true" data-id="#pricing" href="../sections.html#pricing">
                <i className="nc-icon nc-money-coins"></i> Pricing
              </a>
              <a className="dropdown-item" data-scroll="true" data-id="#testimonials" href="../sections.html#testimonials">
                <i className="nc-icon nc-badge"></i> Testimonials
              </a>
              <a className="dropdown-item" data-scroll="true" data-id="#contact-us" href="../sections.html#contactus">
                <i className="nc-icon nc-mobile"></i> Contact Us
              </a>
            </div>
          </li>
          <li className="dropdown nav-item">
            <a href="#" className="dropdown-toggle nav-link" id="navbarDropdownMenuLink1" data-toggle="dropdown">
              Examples
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-danger" aria-labelledby="navbarDropdownMenuLink1">
              <a className="dropdown-item" href="../examples/about-us.html">
                <i className="nc-icon nc-bank"></i> About-us
              </a>
              <a className="dropdown-item" href="../examples/add-product.html">
                <i className="nc-icon nc-basket"></i> Add Product
              </a>
              <a className="dropdown-item" href="../examples/blog-post.html">
                <i className="nc-icon nc-badge"></i> Blog Post
              </a>
              <a className="dropdown-item" href="../examples/blog-posts.html">
                <i className="nc-icon nc-bullet-list-67"></i> Blog Posts
              </a>
              <a className="dropdown-item" href="../examples/contact-us.html">
                <i className="nc-icon nc-mobile"></i> Contact Us
              </a>
              <a className="dropdown-item" href="../examples/discover.html">
                <i className="nc-icon nc-world-2"></i> Discover
              </a>
              <a className="dropdown-item" href="../examples/ecommerce.html">
                <i className="nc-icon nc-send"></i> Ecommerce
              </a>
              <a className="dropdown-item" href="../examples/landing-page.html">
                <i className="nc-icon nc-spaceship"></i> Landing Page
              </a>
              <a className="dropdown-item" href="../examples/login-page.html">
                <i className="nc-icon nc-lock-circle-open"></i> Login Page
              </a>
              <a className="dropdown-item" href="../examples/product-page.html">
                <i className="nc-icon nc-album-2"></i> Product Page
              </a>
              <a className="dropdown-item" href="../examples/profile-page.html">
                <i className="nc-icon nc-single-02"></i> Profile Page
              </a>
              <a className="dropdown-item" href="../examples/register-page.html">
                <i className="nc-icon nc-bookmark-2"></i> Register Page
              </a>
              <a className="dropdown-item" href="../examples/search-with-sidebar.html">
                <i className="nc-icon nc-zoom-split"></i> Search Page
              </a>
              <a className="dropdown-item" href="../examples/settings.html">
                <i className="nc-icon nc-settings-gear-65"></i> Settings Page
              </a>
              <a className="dropdown-item" href="../examples/twitter-redesign.html">
                <i className="nc-icon nc-tie-bow"></i> Twitter
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="btn btn-round btn-danger" href="https://www.creative-tim.com/product/paper-kit-2-pro" target="_blank">
              <i className="nc-icon nc-cart-simple"></i> Buy Now
            </a>
          </li>
          {/* <!-- <li className="nav-item">
					<a className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank">
						<i className="fab fa-twitter"></i>
						<p className="hidden-lg-up">Twitter</p>
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank">
						<i className="fab fa-facebook-square"></i>
						<p className="hidden-lg-up">Facebook</p>
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank">
						<i className="fab fa-instagram"></i>
						<p className="hidden-lg-up">Instagram</p>
					</a>
				</li> --> */}
        </ul>
      </div>
    </div>
  </nav>
        {/* <div className="wrapper">
            <div className="page-header" style="background-image: url('../assets/img/sections/bruno-abatti.jpg');">
            <div className="filter"></div>
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto">
                    <div className="card card-register">
                    <h3 className="card-title">Welcome</h3>
                    <form className="register-form">
                        <label>Email</label>
                        <input type="email" className="form-control no-border" placeholder="Email"/>>
                        <label>Password</label>
                        <input type="password" className="form-control no-border" placeholder="Password"/>
                        <button className="btn btn-danger btn-block btn-round">Register</button>
                    />
                    <div className="forgot">
                        <a href="#paper-kit" className="btn btn-link btn-danger">Forgot password?</a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="demo-footer text-center">
                <h6>&copy;
                    <script>
                    document.write(new Date().getFullYear())
                    </script>, made with <i className="fa fa-heart heart"></i> by Creative Tim</h6>
                </div>
            </div>
            </div>
        </div> */}
    </div>
    </React.Fragment>
        )
    }
}