import {
    FaEnvelope,
    FaPhone,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

function Contact() {

    return (
        <section
            className="container py-5"
            id="contact"
        >

           

                       <h2 className="text-center fw-bold mb-5   " 
            
               style={{
        color: "red",
        fontWeight: "bold",
        
    }}
            >
                Contact Me
            </h2>

            <div className="row justify-content-center">

                <div className="col-12 col-lg-8">

                    <div className="border rounded-4 p-4">

                        <h4 className="fw-bold mb-4">
                            Let's Connect
                        </h4>

                        <p className="mb-4">
                            I'm open to discussing software development
                            opportunities, projects, and collaborations.
                        </p>

                        {/* Email */}
                        <a
                            href="mailto:shivajgp10109@gmal.com"
                            className="d-flex align-items-center gap-3
                            text-decoration-none text-reset mb-3"
                        >
                            <FaEnvelope
                                size={22}
                                style={{ color: "#e63946" }}
                            />

                            <span>
                                shivajgp10109@gmal.com
                            </span>
                        </a>


                        {/* Phone */}
                        <a
                            href="tel:8092331558"
                            className="d-flex align-items-center gap-3
                            text-decoration-none text-reset mb-3"
                        >
                            <FaPhone
                                size={20}
                                style={{ color: "#198754" }}
                            />

                            <span>
                                +91 8092331558
                            </span>
                        </a>


                        {/* GitHub */}
                        <a
                            href="https://github.com/shivam07cyberx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-flex align-items-center gap-3
                            text-decoration-none text-reset mb-3"
                        >
                            <FaGithub size={22} />

                            <span>
                                GitHub
                            </span>
                        </a>


                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/shivampal108/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-flex align-items-center gap-3
                            text-decoration-none text-reset"
                        >
                            <FaLinkedin
                                size={22}
                                style={{ color: "#0A66C2" }}
                            />

                            <span>
                                LinkedIn
                            </span>
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;