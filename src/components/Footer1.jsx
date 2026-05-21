import React from 'react'
import NavbarMega from './NavbarMega' 
export default function Footer() {
    return (
        <>  
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        2021 &copy; Upvex theme by <a href="https://themeforest.net/user/codervent" target="_blank" rel="noreferrer">CoderVent</a>
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-end footer-links d-none d-md-block">
                            <a href="javascript: void(0);">About Us</a>
                            <a href="javascript: void(0);">Help</a>
                            <a href="javascript: void(0);">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

<NavbarMega />
 </>
    )
}
