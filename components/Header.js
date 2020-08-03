import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-diamond"></span>*/}
            <FontAwesomeIcon icon={faGem} transform="grow-18" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Christopher Little</h1>
                <p>My name is Chris, and I'm a full stack developer with an emphasis on web apps.
                    This is my portfolio, where you can find information about all of the various projects
                    I've worked on. If you like what you see, don't hesitate to get in touch with me by clicking on the 'contact' button.
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
                <li><a target="_blank" href="https://docs.google.com/document/d/1fwFZ_6nDbnRTfB98WviUyo7MeZE97jWi97OUCNHgbO4/edit?usp=sharing" >Resume</a></li>
            </ul>
        </nav>
    </header>
)
// if you're reading this, please hire me
Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
