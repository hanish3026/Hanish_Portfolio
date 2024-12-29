import React from 'react'
import '../Css/Footer.css'
const Footer = () => {
    return (
        <div>
            <footer class="py-3 bg-white text-center back">
                <p id='fonts'>&copy; 2024 Hanish. All Rights Reserved.</p>
                <div className='my-2 d-flex justify-content-center'>
                    <a href="https://www.linkedin.com/in/hanish-emrose-1778712ab/" class="text-decoration-none me-2"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/hanish3026" class="text-decoration-none me-2"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/chan_hanish/profilecard/?igsh=a3dwYnk5YXFiZXB2 " class="text-decoration-none me-2"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://wa.me/6379966434" class="text-decoration-none me-2"><i class="fa-brands fa-whatsapp" ></i></a>
                </div>
            </footer>

        </div>
    )
}

export default Footer
