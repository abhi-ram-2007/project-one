import { Link } from "react-router-dom";
import "./nav.css"

export default function Navbar(){
    return (<nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-brand">Shop</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" >Home</Link>
            <Link to="/checkout">cart</Link>
        </div>
        <div className="navbar-auth">
            <div className="navbar-auth-links">
                <Link to="/login" className="btn btn-secondary">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
            </div>

        </div>
        
    </nav>);
}