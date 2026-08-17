import {
    FaJava,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGitAlt,
    FaGithub,
    FaDatabase,
    FaServer,
    FaRoute,
    FaCogs,
    FaExchangeAlt,
    FaBalanceScale,
    FaShieldAlt
} from "react-icons/fa";

import {
    SiSpringboot,
    SiApachekafka,
    SiRedis,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiApachemaven,
    SiJenkins
} from "react-icons/si";


function Skills() {

    const categories = [

        /* =========================
           BACKEND
        ========================= */

        {
            title: "Backend",

            skills: [

                {
                    name: "Java",
                    icon: FaJava,
                    color: "#f89820"
                },

                {
                    name: "Spring Boot",
                    icon: SiSpringboot,
                    color: "#6DB33F"
                },

                {
                    name: "Hibernate",
                    icon: FaDatabase,
                    color: "#59666C"
                },

                {
                    name: "JPA",
                    icon: FaDatabase,
                    color: "#59666C"
                },

                {
                    name: "Kafka",
                    icon: SiApachekafka,
                    color: "#000000"
                },

                {
                    name: "Redis",
                    icon: SiRedis,
                    color: "#DC382D"
                }

            ]
        },


        /* =========================
           FRONTEND
        ========================= */

        {
            title: "Frontend",

            skills: [

                {
                    name: "JavaScript",
                    icon: FaJs,
                    color: "#F7DF1E"
                },

                {
                    name: "React",
                    icon: FaReact,
                    color: "#61DAFB"
                },

                {
                    name: "HTML",
                    icon: FaHtml5,
                    color: "#E34F26"
                },

                {
                    name: "CSS",
                    icon: FaCss3Alt,
                    color: "#1572B6"
                }

            ]
        },


        /* =========================
           DATABASE
        ========================= */

        {
            title: "Database",

            skills: [

                {
                    name: "MySQL",
                    icon: SiMysql,
                    color: "#4479A1"
                },

                {
                    name: "PostgreSQL",
                    icon: SiPostgresql,
                    color: "#4169E1"
                },

                {
                    name: "MongoDB",
                    icon: SiMongodb,
                    color: "#47A248"
                },

                {
                    name: "SQL",
                    icon: FaDatabase,
                    color: "#4479A1"
                }

            ]
        },


        /* =========================
           TOOLS & DEVOPS
        ========================= */

        {
            title: "Tools & DevOps",

            skills: [

                {
                    name: "Git",
                    icon: FaGitAlt,
                    color: "#F05032"
                },

                {
                    name: "GitHub",
                    icon: FaGithub,
                    color: "#181717"
                },

                {
                    name: "Maven",
                    icon: SiApachemaven,
                    color: "#C71A36"
                },

                {
                    name: "Jenkins",
                    icon: SiJenkins,
                    color: "#D24939"
                }

            ]
        },


        /* =========================
           MICROSERVICES
        ========================= */

        {
            title: "Microservices",

            skills: [

                {
                    name: "Spring Cloud",
                    icon: FaServer,
                    color: "#6DB33F"
                },

                {
                    name: "Eureka Server",
                    icon: FaServer,
                    color: "#6DB33F"
                },

                {
                    name: "API Gateway",
                    icon: FaRoute,
                    color: "#6C63FF"
                },

                {
                    name: "Config Server",
                    icon: FaCogs,
                    color: "#6C63FF"
                },

                {
                    name: "Feign Client",
                    icon: FaExchangeAlt,
                    color: "#f89820"
                },

                {
                    name: "Load Balancing",
                    icon: FaBalanceScale,
                    color: "#1572B6"
                },

                {
                    name: "Resilience4j",
                    icon: FaShieldAlt,
                    color: "#E63946"
                }

            ]
        }

    ];


    return (

        <section
            className="container py-5"
            id="skills"
        >

            {/* =========================
                HEADING
            ========================= */}

            <h2
                className="text-center mb-5"
                style={{
                    color: "red",
                    fontWeight: "bold"
                }}
            >
                Skills
            </h2>


            {/* =========================
                CATEGORIES
            ========================= */}

            {categories.map((category) => (

                <div
                    className="mb-4"
                    key={category.title}
                >

                    {/* Category title */}

                    <h4 className="fw-bold mb-3">
                        {category.title}
                    </h4>


                    {/* Skills */}

                    <div className="row g-2">

                        {category.skills.map((skill) => {

                            const Icon = skill.icon;

                            return (

                                <div
                                    className="col-6 col-md-4 col-lg-3"
                                    key={skill.name}
                                >

                                    <div
                                        className="border rounded-3 p-2 d-flex align-items-center gap-2"
                                    >

                                        {/* Icon */}

                                        <Icon
                                            style={{
                                                color: skill.color,
                                                fontSize: "28px"
                                            }}
                                        />


                                        {/* Skill name */}

                                        <span className="fw-semibold">
                                            {skill.name}
                                        </span>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            ))}

        </section>
    );
}

export default Skills;