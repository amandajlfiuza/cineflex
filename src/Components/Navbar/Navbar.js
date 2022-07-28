import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <Link to="/" >
            <div className='navbar'>
                CINEFLEX
            </div>
        </Link>
    )
}