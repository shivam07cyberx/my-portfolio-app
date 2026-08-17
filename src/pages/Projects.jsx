function Projects() {

    const projects = [
        {
            title: "Library Management System",
            description:
                "A full-stack library management application with book management, user roles and CRUD operations.",
            technologies: [
                "Java",
                "Spring Boot",
                "Spring Data JPA",
                "React",
                "MySQL"
            ],
            live: "https://github.com/shivam07cyberx/SpringBoot-Thymeleaf-Book-Management-System"
        },


        
        {
            title: "Banking Application",
            description:
                "A banking application with user authentication, account management and transaction processing.",
            technologies: [
                "Java",
                "Spring Boot",
                "Spring Security",
                "JPA",
                "MySQL",
                "REST API's"
            ],
            live: "https://github.com/shivam07cyberx/Banking-app-backend"
        }
    ];

    return (
        <section className="container py-5" id="projects">

               <h2 className="text-center fw-bold mb-5   " 
            
               style={{
        color: "red",
        fontWeight: "bold",
        
    }}
            >
                Projects
            </h2>

            <div className="row g-4">

                {projects.map((project) => (

                    <div
                        className="col-12 col-md-6"
                        key={project.title}
                    >

                        <div className="border rounded-4 p-4 h-100">

                            <div className="d-flex justify-content-between align-items-start">

                                <h4 className="fw-bold">
                                    {project.title}
                                </h4>

                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline-success btn-sm"
                                >
                                    Live ↗
                                </a>

                            </div>

                            <p className="mt-3">
                                {project.description}
                            </p>

                            <div className="d-flex flex-wrap gap-2 mt-3">

                                {project.technologies.map((tech) => (

                                    <span
                                        className="badge text-bg-secondary"
                                        key={tech}
                                    >
                                        {tech}
                                    </span>

                                ))}

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Projects;