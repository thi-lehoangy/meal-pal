import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer>
        <p>Made in {currentYear} Kavya, Thi, Lasya and Dheya</p>
    </footer>
}

export default Footer;