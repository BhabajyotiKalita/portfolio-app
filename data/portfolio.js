const portfolio = {
    name: "Bhabajyoti Kalita",

    title: "DevOps Engineer",

    tagline:
        "Building scalable cloud infrastructure, automating deployments, and delivering reliable systems.",

    about:
        "DevOps Engineer with experience in Linux administration, cloud infrastructure, automation, CI/CD, containerization, and production support. Passionate about building scalable systems, streamlining deployments, and improving infrastructure reliability through modern DevOps practices.",

    skills: [
        "Linux",
        "AWS",
        "Azure",
        "GCP",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "Git",
        "GitHub",
        "Python",
        "Bash",
        "Node.js",
        "Grafana",
        "Datadog",
        "Zenoss",
        "Signiant"
    ],

    projects: [

        {
            title: "Portfolio Website",
            description: "A responsive portfolio application built using Node.js, Express, EJS and deployed on AWS EC2.",
            technologies: ["Node.js", "Express", "EJS", "AWS EC2"],
            github: "https://github.com/BhabajyotiKalita/portfolio-app",
        },
        {
            title: "Flask Weather Forecast App",
            description: "A modern weather forecasting web application built with Python Flask that provides real-time weather information for any city using the OpenWeather API.",
            technologies: ["Python", "Flask", "OpenWeather API", "AWS EC2"],
            github: "https://github.com/BhabajyotiKalita/weather-api",
        },
        {
            title: "System Health Dashboard",
            description: "A Java Spring Boot monitoring dashboard for tracking real-time CPU, memory, disk utilization, system information, and application uptime, deployed on AWS EC2.",
            technologies: ["Java", "Spring Boot", "Thymeleaf", "Maven", "AWS EC2", "Nginx"],
            github: "https://github.com/BhabajyotiKalita/system-health-dashboard"
        }
    
    ]
};

module.exports = portfolio;
