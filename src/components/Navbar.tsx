import { Link } from "react-Router-dom"
import Logo from "/src/assets/Logo.png"

export default function Navbar(){

    return(
        <nav className="justify-center items-center p-2 ml-6 mr-6 flex">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">
                    <img src={Logo} alt="Logo" className="h-20"></img>
                </Link>

                <div className="md:flex space-x-10">
                    <Link to="/" className="text-3xl">
                        Home
                    </Link>
                    <Link to="/About" className="text-3xl">
                        About
                    </Link>
                    <Link to="/Services" className="text-3xl">
                        Services
                    </Link>
                    <Link to="/Teams" className="text-3xl">
                        Teams
                    </Link>
                </div>

            </div>
        </nav>
    )
}