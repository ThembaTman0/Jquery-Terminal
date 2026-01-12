const portfolio = {
    profile: {
        name: "Themba Ngobeni",
        title: "Full Stack Developer",
        experienceYears: 3,
        summary: "Full-stack developer specializing in Java backend, microservices architecture, and modern web technologies. Experience in banking systems, AI/ML projects, and enterprise applications."
    },

    skills: {
        languages: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
        frameworks: ["Spring Boot", "Spring Cloud", "React", "Next.js", "Hibernate", "JUnit"],
        tools: ["Docker", "Git", "Maven", "Postman", "Sanity CMS"],
        databases: ["PostgreSQL", "MySQL"],
        cloud: ["Spring Cloud Config", "Feign", "Eureka", "AWS Basics"],
        other: ["Machine Learning", "Data Science", "WebRTC", "Microservices"]
    },

    experience: [
        {
            company: "First National Bank (FNB)",
            role: "Java Software Developer",
            period: "2023 — Present",
            highlights: [
                "Developed REST APIs using Spring Boot and Maven for banking systems",
                "Architected microservices with Spring Cloud Config",
                "Applied SOLID principles and clean code practices",
                "Built configuration management system for distributed services"
            ]
        },{
            company: "Avior Labs",
            role: "Full Stack Developer Intern",
            period: "2022 — 2023",
            highlights: [
                "Developed web applications for UAV management systems",
                "Built full-stack solutions for drone operations and monitoring",
                "Worked with aerospace and unmanned aerial vehicle technologies",
                "Contributed to commercial UAV platform development",
                "Collaborated on software for drone flight management systems"
            ]
        }
    ],

    projects: [
        {
            name: "Bankwave V2.0",
            stack: ["Java", "Spring Boot", "Spring Cloud", "Docker", "Microservices"],
            description: "Advanced microservices banking platform with centralized configuration management using Spring Cloud Config Server.",
            responsibilities: [
                "Microservices architecture design",
                "Spring Cloud Config integration",
                "Service discovery with Eureka",
                "Distributed configuration management",
                "Docker containerization"
            ],
            github: "https://github.com/ThembaTman0/Bankwave-V-2.0"
        },
        {
            name: "Satellite Image Classification",
            stack: ["Python", "Computer Vision", "Machine Learning", "Jupyter", "OpenCV"],
            description: "Computer vision research project using Bag of Features method for autonomous classification of satellite imagery on UC Merced dataset. Achieved 81.42% accuracy with hybrid classifier.",
            responsibilities: [
                "Implemented Bag of Features algorithm",
                "Trained multiple classifiers (KNN, Linear, HOG, DAISY)",
                "Developed hybrid classifier combining HOG and DAISY",
                "Research paper on remote sensing automation",
                "Confusion matrix analysis and model evaluation"
            ],
            github: "https://github.com/ThembaTman0/SATELLITE-IMAGE-CLASSIFICATION",
            achievements: [
                "81.42% accuracy with Hybrid Classifier",
                "76.19% with Linear Classifier",
                "Published research summary"
            ]
        },
        {
            name: "Flight Price Prediction",
            stack: ["Python", "Machine Learning", "Jupyter", "Data Science"],
            description: "ML model to predict flight prices using regression algorithms and data analysis techniques.",
            responsibilities: [
                "Data preprocessing and cleaning",
                "Feature engineering",
                "Model training and evaluation",
                "Hyperparameter tuning"
            ],
            github: "https://github.com/ThembaTman0/Flight-Price-Prediction"
        },
        {
            name: "Self-Driving Car Simulation",
            stack: ["JavaScript", "Neural Networks", "Canvas API"],
            description: "Neural network-powered car simulation that learns to navigate roads autonomously.",
            responsibilities: [
                "Neural network implementation from scratch",
                "Sensor simulation and collision detection",
                "Genetic algorithm for learning",
                "Real-time visualization"
            ],
            github: "https://github.com/ThembaTman0/Self-driving-car"
        },
        {
            name: "Lunio",
            stack: ["TypeScript", "React", "Modern Web"],
            description: "Modern web application built with TypeScript and React ecosystem.",
            github: "https://github.com/ThembaTman0/lunio"
        },
        {
            name: "jQuery Terminal Portfolio",
            stack: ["JavaScript", "jQuery Terminal"],
            description: "Interactive CLI-style portfolio with Warp-inspired terminal interface.",
            github: "https://github.com/ThembaTman0/Jquery-Terminal"
        }
    ],

    contact: {
        github: "https://github.com/ThembaTman0",
        email: "ThembaTman0@gmail.com",
        phone: "0606296363"
    }
};