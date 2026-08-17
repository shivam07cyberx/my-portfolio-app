import { FaGraduationCap, FaSchool } from "react-icons/fa";

function Education() {

    const education = [
          {
            degree: "Senior Secondary (Class XII)",
            institute: "Govt. (+2) High School",
            location: "Munger, Bihar",
            duration: "2018 – 2020",
            result: "Percentage: 82%",
            icon: FaSchool
        },
        {
            degree: "B.Tech in Information Technology",
            institute: "RCC Institute of Information Technology",
            location: "Kolkata, West Bengal",
            duration: "2021 – 2025",
            result: "CGPA: 7.93",
            icon: FaGraduationCap
        }
      
    ];

    return (
        <section className="container py-5" id="education">

              <h2 className="text-center fw-bold mb-5   " 
            
               style={{
        color: "red",
        fontWeight: "bold",
        
    }}
            >
                Education
            </h2>

            <div className="row justify-content-center">

                <div className="col-12 col-lg-9">

                    {education.map((edu) => {

                        const Icon = edu.icon;

                        return (
                            <div
                                className="border rounded-4 p-4 mb-4"
                                key={edu.degree}
                            >

                                <div className="d-flex align-items-start gap-3">

                                    <Icon
                                        size={32}
                                        style={{ color: "#e63946" }}
                                    />

                                    <div className="flex-grow-1">

                                        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">

                                            <div>

                                                <h4 className="fw-bold mb-1">
                                                    {edu.degree}
                                                </h4>

                                                <p className="mb-1">
                                                    {edu.institute}
                                                </p>

                                                <p className="text-secondary mb-0">
                                                    {edu.location}
                                                </p>

                                            </div>

                                            <span className="fw-semibold">
                                                {edu.duration}
                                            </span>

                                        </div>

                                        <div className="mt-3">
                                            <span className="badge rounded-pill border border-success text-success">
                                                {edu.result}
                                            </span>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default Education;