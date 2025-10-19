import {Link} from "react-router";
import Logo from "~/components/Logo";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="hover:opacity-80 transition-opacity">
                <Logo size="md" />
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload Your Resume
            </Link>
        </nav>
    )
}
export default Navbar
