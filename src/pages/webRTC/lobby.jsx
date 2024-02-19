import React from 'react';
import './main.css'; // Import CSS files
import './lobby.css';
import { useNavigate } from 'react-router-dom';

function Lobby() {
    const navigate = useNavigate();
    const handleHome = () =>{
        navigate("/home")
    }
    const handleRoomCreate = () =>{
        navigate("/room")
    }
    return (
        <div>
            <header id="nav">
                <div className="nav--list">
                    <a>
                        <h3 id="logo">
                            <span>EDU-FY</span>
                        </h3>
                    </a>
                </div>
                <div id="nav__links">
                    <button className="nav__link" onClick={handleHome}>
                        Lobby
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ede0e0" viewBox="0 0 24 24">
                            <path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" />
                        </svg>
                    </button>
                </div>
            </header>

            <main id="room__lobby__container">
                <div id="form__container">
                    <div id="form__container__header">
                        <p>👋 Create or Join Room</p>
                    </div>

                    <form id="lobby__form">
                        <div className="form__field__wrapper">
                            <label>Your Name</label>
                            <input type="text" name="name" required placeholder="Enter your display name..." />
                        </div>

                        <div className="form__field__wrapper">
                            <label>Room Name</label>
                            <input type="text" name="room" placeholder="Enter room name..." />
                        </div>

                        <div className="form__field__wrapper">
                            <button onClick={handleRoomCreate} type='submit'>Go to Room
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Lobby;