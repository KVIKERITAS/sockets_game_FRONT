import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {IdentificationIcon, UserIcon} from "@heroicons/react/24/outline";

const HomePage = () => {
    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/019/040/578/original/an-8-bit-retro-styled-pixel-art-illustration-of-a-wooden-sword-free-png.png"
                    className="w-25"
                    alt=""/>
                <h1 className="fw-light">BUDGET<span className="fw-bold">FIGHTING</span>ARENA</h1>
            </div>

            <div className="d-flex flex-column gap-3 mt-5 align-items-center">
                <Link to="/register">
                    <Button className="px-4 py-3 fw-bolder">
                        <IdentificationIcon style={{width: "20px"}}/>
                        Register
                    </Button>
                </Link>

                <Link to="/login">
                    <Button variant="warning" className="px-5 py-3 fw-bolder">
                        <UserIcon style={{width: "20px"}}/>
                        Login
                    </Button>
                </Link>
            </div>
        </div>

    );
};

export default HomePage;