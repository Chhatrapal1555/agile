import './style.css';
import logo from '../assets/logo/logo.svg';
import home from '../assets/images/home.png';
import tools from '../assets/images/tools.png';
import bell from '../assets/images/bell.png';
import profile from '../assets/images/profile.png';

function Header() {
    return (
        <div className="header">

            <div>
            <img src={logo} alt="Deep Thought logo" />
            </div>
            <div className='header-right' >
                <img src={home} alt="home" height='18px' width='18px' style={{padding:'10px', backgroundColor:'blue', borderRadius:'25px'}}/>
                <img src={tools} alt="tools" style={{padding:'10px', backgroundColor:'blue',borderRadius:'25px'}} />
                <img src={bell} alt="notification" height='38px' width='38px' />
                <img src={profile} alt="profile" /> 
                <div class="test"></div>

            </div>
        </div>
    );
}
export default Header;