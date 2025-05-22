import Image from "next/image"

const Footer = () => {
    return(
        <footer className="footer_container">
            <ul>
                <li><a href="#"><Image src="/assets/share.svg" width={20} height={20} alt="Share"/></a></li>
                <li><a href="#"><Image src="/assets/mail.svg" width={20} height={20} alt="Mail"/></a></li>
                <li><a href="#"><Image src="/assets/chat.svg" width={20} height={20} alt="Chat"/></a></li>
            </ul>
            <p>Copyright 2025 - Victoria Mobilia</p>
        </footer>
    )
}

export default Footer;