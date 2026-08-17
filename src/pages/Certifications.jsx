import {
    SiUdemy,
    SiHackerrank,
    SiLeetcode
} from "react-icons/si";

import {
    FaTrophy,
    FaCertificate
} from "react-icons/fa";

import gfgLogo from "../assets/gfg.png";
import nareshitLogo from "../assets/nareshit.png";
import aiLogo from "../assets/ai-certification.png";


function Certifications() {

    const certifications = [

        {
            title: "Java Certification",
            platform: "Udemy",
            icon: SiUdemy,
            color: "#A435F0"
        },

        {
            title: "SQL Certification",
            platform: "HackerRank",
            icon: SiHackerrank,
            color: "#00EA64"
        },

        {
            title: "100+ Problems Solved",
            platform: "LeetCode",
            icon: SiLeetcode,
            color: "#FFA116"
        },

        {
            title: "150 DSA Questions Solved",
            platform: "GeeksforGeeks",
            image: gfgLogo
        },

        {
            title: "AI Hackfest 2026",
            platform: "Naresh IT",
            image: nareshitLogo
        },

        {
            title: "4-Week AI Certification",
            platform: "AI / Generative AI",
            image: aiLogo
        }

    ];

    return (
        <section
            className="container py-5"
            id="certifications"
        >


               <h2 className="text-center fw-bold mb-5   " 
            
               style={{
        color: "red",
        fontWeight: "bold",
        
    }}
            >
                Certifications & Achievements
            </h2>

            <div className="row g-4 justify-content-center">

                {certifications.map((cert) => {

                    const Icon = cert.icon;

                    return (
                        <div
                            className="col-12 col-md-6 col-lg-4"
                            key={cert.title}
                        >

                            <div className="border rounded-4 p-4 h-100">

                                <div className="d-flex align-items-center gap-3">

                                    {cert.image ? (

                                        <img
                                            src={cert.image}
                                            alt={cert.platform}
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                objectFit: "contain"
                                            }}
                                        />

                                    ) : (

                                        <Icon
                                            size={40}
                                            style={{
                                                color: cert.color
                                            }}
                                        />

                                    )}

                                    <div>

                                        <h5 className="fw-bold mb-1">
                                            {cert.title}
                                        </h5>

                                        <p className="mb-0">
                                            {cert.platform}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>
                    );
                })}

            </div>

        </section>
    );
}

export default Certifications;