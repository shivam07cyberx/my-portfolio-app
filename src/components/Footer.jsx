import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaFacebook
} from "react-icons/fa";

function Footer() {

    return (
        <footer className="border-top py-3 mt-5">

            <div className="container">

                <div className="d-flex justify-content-between align-items-center">

                    {/* Name */}
                    <span
                        className="fw-bold"
                        style={{ color: "red" }}
                    >
                        SHIVAM
                    </span>

                    {/* Social */}
                    <div className="d-flex gap-3">

                        <a
                            href="https://github.com/shivam07cyberx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-reset"
                        >
                            <FaGithub size={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/shivampal108/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-reset"
                        >
                            <FaLinkedin size={20} />
                        </a>

                        <a
                            href="YOUR_INSTAGRAM_LINK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-reset"
                        >
                            <FaInstagram size={20} />
                        </a>

                        <a
                            href="YOUR_FACEBOOK_LINK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-reset"
                        >
                            <FaFacebook size={20} />
                        </a>

                    </div>

                    {/* Copyright */}
                    <small>
                        © {new Date().getFullYear()} Shivam Pal
                    </small>

                </div>

            </div>

        </footer>
    );
}

export default Footer;