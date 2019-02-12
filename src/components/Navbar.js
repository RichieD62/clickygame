import React from "react";


const Navbar = (props) => 

        (
            <div>

                <nav className="navbar navbar-light bg-danger">
                    <span className="navbar-brand mb-0 h1 text-left">Clicky Game</span>

                    <span className="navbar-brand mb-0 h1 text-center">Click and Image to Begin!</span>

                    <span className="navbar-brand mb-0 h1 text-right">Score: {props.score} | Top Score: {props.bestScore}</span>
                </nav>

            </div>
        )
    


export default Navbar