import React from 'react';
import './main.css'; // Import CSS files
import './lobby.css';
import './index.css';
import previewImage from '../../assets/preview.png'; // Import image
import { useNavigate } from 'react-router-dom';


const Homepage = () =>{
    const navigate = useNavigate();
    const handleLogin = ()=>{
        navigate("/loginteacher")
    }
    const handleRegister = ()=>{
        navigate("/register")
    }
    return (
        <div>
            <header id="nav">
                <div className="nav--list">
                    <a href="index.html">
                        <h3 id="logo">EDU-FY</h3>
                    </a>
                </div>
                <div id="nav__links">
                    <button className="nav__link" id="create__room__btn" onClick={handleLogin}>
                        Login as Teacher
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ede0e0" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
                        </svg>
                    </button>
                    <button className="nav__link" id="create__room__btn" onClick={handleRegister}>
                        Register
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ede0e0" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
                        </svg>
                    </button>
                </div>
            </header>

            <section className="hero__section">
                <h2>Educate. Engage. Attend: Empowering Learning Every Day</h2>
                <div className="hero__section__img">
                    <img style={{maxHeight: '550px', objectFit: 'contain'}} src={previewImage} alt="hero__img" />
                </div>
            </section>

            <footer>
                <section id="room__list">
                    <h3 id="room__listTitle">Engage, Connect, and Grow with Every Click. Attend Online Lectures</h3>
                    <h3 id="room__listTitle1">Where Knowledge Knows No Boundaries!</h3>
                </section>
            </footer>
        </div>
    );
}

export default Homepage;
