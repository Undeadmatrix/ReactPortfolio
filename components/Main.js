import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About Me</h2>
          <span className="image main"><img src="/static/images/pic01.jpg" alt="Pic Of Me" /></span>
          <p>Hello Everyone! My name is Chris, and I'm 21 years old. Ever since I was a kid, I've always been interested in how computers and websites worked. I'd spend a large majority of my time browsing different websites and gaming sites and forums and I loved every second of it. In high school, I took 2 years of java programming and 1 year of html/css/javascript and thats when I fell in love with programming. I loved the freedom of expression it gave me and the instant gratification of watching things that I made work. That love of programming translated over when I took a coding bootcamp at Rutgers, where I learned a vast array of different skills/technologies that helped me progress throughout my coding studies.</p>
          <p>I'm constantly working on new things and learning new technologies, trying to improve with each program I build. In this website, you'll find the culmination of some of my favorite previous work, as well as links to my github, linkedin, and all my social media accounts. If you like what you see, and want to hire me to do any sort of coding work, please feel free to contact me via email, or message me on any of the linked websites under the contact tab.</p>
          <p>Thank you for taking time out of your day to check my portfolio out. I hope you like what you see, and have a wonderful day :)</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <h3>MusiCoda</h3>
          <span className="image main"><img src="/static/images/MusiCoda.png" alt="MusiCoda Page" /></span>
          <p>This project was designed to bring together music/artist information. It pulls pieces of information from different API's such as Last.FM, Youtube, and BandsInTown, and combines the data into an easily readable/interactable format.</p>
          <p>View the source code by <a target="_blank" href="https://github.com/Undeadmatrix/MusiCoda">clicking here</a></p>
          <p>View the deployed website by <a target="_blank" href="https://undeadmatrix.github.io/MusiCoda/">clicking here</a></p>

          <h3>BestPress</h3>
          <span className="image main"><img src="/static/images/BestPress.png" alt="BestPress Page" /></span>
          <p>This project allows the user to post to a chat that anyone else can post to. It also grabs random jokes for the user’s entertainment. It runs on an express server, uses MySQL for database management, uses sequelize for database synchronization, passport for authentication, bcryptjs for password hashing, and uses semantic/fomantic ui for the front end framework.</p>
          <p>View the source code by <a target="_blank" href="https://github.com/Undeadmatrix/BestPress">clicking here</a></p>
          <p>View the deployed website by <a target="_blank" href="https://project2ru.herokuapp.com/">clicking here</a></p>

          <h3>Burger Logger</h3>
          <span className="image main"><img src="/static/images/BurgerLogger.png" alt="Burger Logger Page" /></span>
          <p>This project allows the user to input various burgers they like, and then "devour" them. It uses MySQL, Node.JS, Express, Handlebars, and a custom ORM.</p>
          <p>View the source code by <a target="_blank" href="https://github.com/Undeadmatrix/BurgerLogger">clicking here</a></p>
          <p>View the deployed website by <a target="_blank" href="https://morning-savannah-19861.herokuapp.com/">clicking here</a></p>

          <h3>Work Day Scheduler</h3>
          <span className="image main"><img src="/static/images/WorkDayScheduler.png" alt="Work Day Scheduler Page" /></span>
          <p>This project creates an hourly calendar that you can use to plan out your day. It can detect the time and display different colored blocks that you can use to keep track of your work. It also uses LocalStorage to save your data, so you can exit the page and come back later to check your schedule.</p>
          <p>View the source code by <a target="_blank" href="https://github.com/Undeadmatrix/WorkDayScheduler">clicking here</a></p>
          <p>View the deployed website by <a target="_blank" href="https://undeadmatrix.github.io/WorkDayScheduler/">clicking here</a></p>

          <h3>Weather Dashboard</h3>
          <span className="image main"><img src="/static/images/WeatherDashboard.png" alt="Weather Dashboard Page" /></span>
          <p>This project uses the OpenWeatherMap API to display current and future weather predictions. It also uses LocalStorage to save your last searched location for ease of access.</p>
          <p>View the source code by <a target="_blank" href="https://github.com/Undeadmatrix/WeatherDashboard">clicking here</a></p>
          <p>View the deployed website by <a target="_blank" href="https://undeadmatrix.github.io/WeatherDashboard/">clicking here</a></p>

          <h3>Employee Directory</h3>
          <span className="image main"><img src="/static/images/EmployeeDirectory.png" alt="Employee Directory Page" /></span>
          <p>This project uses React to display different employee's for a company. Users can sort through employees alphabetically, or by searching for their name via the search bar at the top.</p>
          <p>View the source code by <a target="_blank" href="https://github.com/Undeadmatrix/Employee-Directory">clicking here</a></p>
          <p>View the deployed website by <a target="_blank" href="https://serene-hamlet-73584.herokuapp.com/">clicking here</a></p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="mailto:chrislittlebusinessinquiries@gmail.com">
            <ul className="actions">
              <li><input type="submit" value="Send me an email" className="special" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://twitter.com/undeadmatrix4">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="https://www.facebook.com/chris.little.14019338/">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="https://www.instagram.com/undeadmatrix/">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="https://github.com/Undeadmatrix">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
            <li><a href="https://www.linkedin.com/in/chris-little-757074156/">
              <FontAwesomeIcon icon={faLinkedIn} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main