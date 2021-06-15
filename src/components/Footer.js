import logo from '../img/logo.png'
import gartner from '../img/rating/gartner.png'
import topPlace from '../img/rating/top-place.png'
import leader from '../img/rating/leader.png'
import topStartup from '../img/rating/top-startup.png'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-container">
        {/* Footer Logo Info */}

        <div className="footer-logo-info">
          <div className="footer-items">
            <img src={logo} alt="logo" className="logo" />

            <p className="nu-rg-16">
              &copy; 2021 Biotonic Technology Private Limited.
            </p>
          </div>

          <hr />

          <div className="footer-items">
            <h1 className="nu-b-18">Get in on the latest in AI</h1>

            <button className="nu-sb-14">Subscribe</button>
          </div>

          <hr />

          <div className="footer-items">
            <img
              src={gartner}
              className="gartner-logo"
              alt="Gartner Peer Insights"
            />
          </div>

          <hr />

          <div className="footer-items">
            <img src={topPlace} alt="Great place to work" />
            <img
              src={leader}
              className="rating-logo-img"
              alt="Leader Spring 2021"
            />
            <img src={topStartup} alt="LinkedIn Top Startups" />
          </div>
        </div>

        {/* Footer Links - col 1 */}

        <div className="footer-links-container">
          <div className="footer-links">
            <h1 className="nu-b-18">Why Yellow.ai?</h1>
            <ul className="nu-rg-16">
              <li>
                <a href="https://localhost/">Conversation CX platform</a>
              </li>
              <li>
                <a href="https://localhost/">Customer Stories</a>
              </li>
              <li>
                <a href="https://localhost/">Pricing</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h1 className="nu-b-18">Channels</h1>
            <ul className="nu-rg-16">
              <li>
                <a href="https://localhost/">Text</a>
              </li>
              <li>
                <a href="https://localhost/">Voice</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h1 className="nu-b-18">Solution</h1>
            <ul className="nu-rg-16">
              <li>
                <a href="https://localhost/">Customer Support</a>
              </li>
              <li>
                <a href="https://localhost/">Marketing Automation</a>
              </li>
              <li>
                <a href="https://localhost/">Conversational Commerce</a>
              </li>
              <li>
                <a href="https://localhost/">Internal Automation</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Links - col 2 */}

        <div className="footer-links-container">
          <div className="footer-links">
            <h1 className="nu-b-18">Company</h1>
            <ul className="nu-rg-16">
              <li>
                <a href="https://localhost/">About us</a>
              </li>
              <li>
                <a href="https://localhost/">Contact us</a>
              </li>
              <li>
                <a href="https://localhost/">Customer stories</a>
              </li>
              <li>
                <a href="https://localhost/">Join us</a>
              </li>
              <li>
                <a href="https://localhost/">Partner with us</a>
              </li>
              <li>
                <a href="https://localhost/">News</a>
              </li>
              <li>
                <a href="https://localhost/">Academy</a>
              </li>
              <li>
                <a href="https://localhost/">Billy - yellow.ai's</a>
              </li>
              <li>
                <a href="https://localhost/">Virtual assistant</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h1 className="nu-b-18">Resources</h1>
            <ul className="nu-rg-16">
              <li>
                <a href="https://localhost/">Blog</a>
              </li>
              <li>
                <a href="https://localhost/">E-books</a>
              </li>
              <li>
                <a href="https://localhost/">Community</a>
              </li>
              <li>
                <a href="https://localhost/">Academy</a>
              </li>
              <li>
                <a href="https://localhost/">Documentation</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Links - col 3 */}

        <div className="footer-links-container">
          <div className="footer-links">
            <h1 className="nu-b-18">Platform</h1>
            <ul className="nu-rg-16">
              <li>
                <a href="https://localhost/">NLP</a>
              </li>
              <li>
                <a href="https://localhost/">Studio</a>
              </li>
              <li>
                <a href="https://localhost/">Omni channel</a>
              </li>
              <li>
                <a href="https://localhost/">Inbox</a>
              </li>
              <li>
                <a href="https://localhost/">Campaign management</a>
              </li>
              <li>
                <a href="https://localhost/">Marketplace</a>
              </li>
              <li>
                <a href="https://localhost/">Enterprise-grade</a>
              </li>
              <li>
                <a href="https://localhost/">Security</a>
              </li>
              <li>
                <a href="https://localhost/">Intergrations</a>
              </li>
              <li>
                <a href="https://localhost/">Analytics</a>
              </li>
              <li>
                <a href="https://localhost/">Insights engine</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Links - col 4 */}

        <div className="footer-links-container">
          <div className="footer-links">
            <h1 className="nu-b-18">Industries</h1>
            <ul className="nu-rg-16">
              <li>
                <a href="https://localhost/">Automotive</a>
              </li>
              <li>
                <a href="https://localhost/">Advertising</a>
              </li>
              <li>
                <a href="https://localhost/">Energy</a>
              </li>
              <li>
                <a href="https://localhost/">Education</a>
              </li>
              <li>
                <a href="https://localhost/">Banking</a>
              </li>
              <li>
                <a href="https://localhost/">Insurance</a>
              </li>
              <li>
                <a href="https://localhost/">Food & Beverages</a>
              </li>
              <li>
                <a href="https://localhost/">Consumer Goods</a>
              </li>
              <li>
                <a href="https://localhost/">E-commerce</a>
              </li>
              <li>
                <a href="https://localhost/">Retail</a>
              </li>
              <li>
                <a href="https://localhost/">Gaming</a>
              </li>
              <li>
                <a href="https://localhost/">Healthcare</a>
              </li>
              <li>
                <a href="https://localhost/">Hospitality</a>
              </li>
              <li>
                <a href="https://localhost/">Real Estate</a>
              </li>
              <li>
                <a href="https://localhost/">Telecom</a>
              </li>
              <li>
                <a href="https://localhost/">QSRs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        {/* Footer Terms */}

        <div className="footer-terms">
          <ul className="nu-rg-16">
            <li>
              <a href="https://localhost/">
                Terms <span>&bull;</span>
              </a>
            </li>
            <li>
              <a href="https://localhost/">
                Privacy <span>&bull;</span>
              </a>
            </li>
            <li>
              <a href="https://localhost/">Sitemap</a>
            </li>
          </ul>
        </div>

        {/* Footer Text */}

        <div className="footer-text nu-rg-16">
          <p>Formerly known as Yellow Messenger</p>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <FacebookIcon className="mr-24" />
          <TwitterIcon className="mr-24" />
          <InstagramIcon className="mr-24" />
          <YouTubeIcon className="mr-24" />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  )
}

export default Footer
