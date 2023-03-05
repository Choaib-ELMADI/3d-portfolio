import {
    mobile,
    backend,
    creator,
    web,

    javascript,
    html,
    css,
    reactjs,
    redux,
    git,
    figma,

    fiverr,
    selfemployed,

    threejs,

    arduno,
    get3d,
    aitmgoun,
    moroccanfood,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "3D Developer",
      icon: backend,
    },
    {
      title: "Robotics Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Self-employed",
      icon: selfemployed,
      iconBg: "#383E56",
      date: "Sept 2021 - Present",
      points: [
        "Developing and maintaining web applications using JavaScript, Html, and Css.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "React Developer",
      company_name: "Self-employed",
      icon: selfemployed,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "3D Developer",
      company_name: "Self-employed",
      icon: selfemployed,
      iconBg: "#383E56",
      date: "Sept 2021 - Present",
      points: [
        "Developing and maintaining 3d projects, models using Solidworks, Blender and other related technologies.",
      ],
    },
    {
      title: "Freelancer",
      company_name: "Fiverr",
      icon: fiverr,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Present",
      points: [
        "Providing freelancing services in the web development field.",
        "Providing freelancing services in 3d modeling.",
        "Providing freelancing services in robotics and electronics.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Choaib proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Choaib does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Choaib optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Arduino",
      description:
        "Web-based platform that allows users to search for arduino projects, and try making them.",
      tags: [
        {
          name: "react",
          color: "blue",
        },
        {
          name: "arduino",
          color: "orangered",
        },
        {
          name: "css",
          color: "greenyellow",
        },
      ],
      image: arduno,
      source_code_link: "https://github.com/",
    },

    {
      name: "3D Models",
      description:
        "Web application that enables users to search for 3d models, 2d drawings and assemblies.",
      tags: [
        {
          name: "react",
          color: "blue",
        },
        {
          name: "solidworks",
          color: "pink",
        },
        {
          name: "blender",
          color: "#ccc",
        },
      ],
      image: get3d,
      source_code_link: "https://github.com/",
    },

    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book and rental houses.",
      tags: [
        {
          name: "javascript",
          color: "yellow",
        },
        {
          name: "html",
          color: "orangered",
        },
        {
          name: "css",
          color: "greenyellow",
        },
      ],
      image: aitmgoun,
      source_code_link: "https://github.com/",
    },

    {
      name: "Moroccan Resto",
      description:
        "A comprehensive restaurant website platform that allows users to find moroccan food.",
      tags: [
        {
          name: "react",
          color: "blue",
        },
        {
          name: "css",
          color: "greenyellow",
        },
        {
          name: "sass",
          color: "pink",
        },
      ],
      image: moroccanfood,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };