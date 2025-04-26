import {UserInfo} from "../UserInfo/UserInfo.tsx";
import './header-style.css'
import {Link} from "react-router-dom";
export const Header = () => {
    return (
        <div className="header-main">
            <UserInfo/>
            <div className={'menu-list'}>
                <p>MEDIA</p>
                <ul>
                    <li><Link to={'/'}>Movies</Link></li>
                    <li><Link to={'/'}>TV Shows</Link></li>
                    <li><Link to={'/'}>Music</Link></li>
                    <li><Link to={'/'}>Audiobooks</Link></li>
                    <li><Link to={'/'}>Games</Link></li>
                    <li><Link to={'/'}>Apps</Link></li>
                    <li><Link to={'/'}>Updates</Link></li>
                </ul>
            </div>
        </div>
    );
};