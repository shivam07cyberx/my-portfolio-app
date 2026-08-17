import { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";
import resume from "../assets/SHIVAM_RESUME.pdf";
function About() {

    const roles = [
        "Java Developer",
        "Software Engineer",
        "Backend Developer",
        "Full Stack Developer",
        "Frontend Developer",
        "Problem Solver",
        "Spring Boot Developer"
    
    ];

    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {

        const currentRole = roles[roleIndex];

        // Faster typing and deleting
        const typingSpeed = deleting ? 35 : 60;

        const timer = setTimeout(() => {

            if (!deleting) {

                // Typing
                setText(
                    currentRole.substring(
                        0,
                        text.length + 1
                    )
                );

                // When complete, wait before deleting
                if (text === currentRole) {
                    setDeleting(true);
                }

            } else {

                // Deleting
                setText(
                    currentRole.substring(
                        0,
                        text.length - 1
                    )
                );

                // When completely deleted, move to next role
                if (text === "") {

                    setDeleting(false);

                    setRoleIndex(
                        (prev) =>
                            (prev + 1) % roles.length
                    );
                }
            }

        }, text === currentRole ? 1200 : typingSpeed);

        return () => clearTimeout(timer);

    }, [text, deleting, roleIndex]);


    return (
        <section
            className="container py-5"
            id="about"
        >

            <div className="row align-items-center min-vh-75">

                {/* =========================
                    LEFT SIDE
                ========================= */}

                <div className="col-12 col-md-7">

                    <p className="text-uppercase fw-semibold mb-2">
                        About Me
                    </p>


                    {/* Typing Role */}

                    <h1
                        className="fw-bold"
                        style={{
                            fontSize: "42px"
                        }}
                    >

                        {text}

                        <span
                            style={{
                                fontWeight: "300",
                                fontSize: "32px",
                                marginLeft: "2px"
                            }}
                        >
                            |
                        </span>

                    </h1>


                    {/* Introduction */}

                    <p className="lead mt-4">

                        Hi, I'm{" "}

                        <span
                            style={{
                                color: "green",
                                fontWeight: "bolder"
                            }}
                        >
                            Shivam Pal
                        </span>

                        , a Java Developer passionate about
                        building scalable, reliable, and
                        high-performance applications.

                    </p>


                    {/* Description */}

                    <p className="mt-3">

                        I specialize in Java, Spring Boot,
                        Spring Data JPA, Hibernate, REST APIs,
                        SQL, and React. I enjoy designing backend
                        systems, developing clean APIs, working
                        with databases, and building full-stack
                        applications using modern technologies.

                    </p>


                    <p>

                        I am particularly interested in backend
                        development, microservices, distributed
                        systems, and event-driven architectures.
                        I continuously explore new technologies
                        and apply them by building practical
                        projects.

                    </p>


                    {/* Skills */}

                    <div className="d-flex flex-wrap gap-2 mt-4">

                        <span className="badge rounded-pill text-bg-dark p-2">
                            Java
                        </span>

                        <span className="badge rounded-pill text-bg-dark p-2">
                            Spring Boot
                        </span>

                        <span className="badge rounded-pill text-bg-dark p-2">
                            REST API
                        </span>

                        <span className="badge rounded-pill text-bg-dark p-2">
                            SQL
                        </span>

                        <span className="badge rounded-pill text-bg-dark p-2">
                            React
                        </span>

                    </div>


                    {/* Resume */}

                <a
    href={resume}
    download="SHIVAM_RESUME.pdf"
    className="btn btn-dark mt-4 px-4"
>
    Download Resume
</a>

                </div>


                {/* =========================
                    RIGHT SIDE
                ========================= */}

                <div className="col-12 col-md-5 mt-5 mt-md-0">

                    <div className="d-flex justify-content-center">

                       <img

    src={profile}
    alt="Shivam"
    className="rounded-circle border border-3 shadow"
    style={{
        width: "320px",
        height: "320px",
        maxWidth: "100%",
        objectFit: "cover",
        objectPosition: "center top",
        display: "block"
    }}
/>
                     

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;