import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "RegIntel AI Compliance Platform",
    category: "Agentic Regulatory Intelligence System",
    tools: ["JavaScript", "Python Backend", "Firebase", "Local ML", "Ollama"],
    points: [
      "Built an AI-powered banking compliance platform for regulatory document ingestion, clause extraction, and change detection.",
      "Generated MAPs with task ownership, deadline, priority, risk score, and department routing across Compliance, Legal, Risk, Operations, Audit, and IT.",
      "Added evidence validation, role-based dashboards, audit trails, PDF report exports, Firebase sync, and optional local LLM support through Ollama.",
    ],
  },
  {
    title: "Hand Gesture Mouse Control",
    category: "Touchless Virtual Mouse System",
    tools: ["Python", "OpenCV", "MediaPipe", "Gesture Recognition"],
    points: [
      "Developed a touchless virtual mouse system with real-time webcam hand tracking.",
      "Implemented gestures for click, drag, and scroll operations.",
      "Improved accessibility with low-latency hands-free computer control.",
    ],
  },
  {
    title: "Live Weather Application",
    category: "Real-Time Weather Dashboard",
    tools: ["JavaScript", "REST APIs", "HTML", "CSS"],
    points: [
      "Built a responsive weather application that fetches and displays real-time weather data for any city using the OpenWeatherMap API.",
      "Implemented dynamic UI updates including temperature, humidity, wind speed, and weather condition icons based on live API responses.",
    ],
  },
  {
    title: "Cafe Ordering System",
    category: "Full-Stack Ordering Platform",
    tools: ["MERN Stack", "Authentication", "Menu Management", "Order Tracking"],
    points: [
      "Developed a full-stack cafe ordering platform with responsive UI.",
      "Added authentication, menu management, and order tracking workflows.",
      "Integrated real-time database services for reliable order processing.",
    ],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Selected <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={project.title}>
                  <div className="carousel-content project-text-card">
                    <div className="carousel-number">
                      <h3>0{index + 1}</h3>
                    </div>
                    <div className="carousel-details">
                      <p className="carousel-category">{project.category}</p>
                      <h4>{project.title}</h4>
                      <div className="project-tags">
                        {project.tools.map((tool) => (
                          <span key={tool}>{tool}</span>
                        ))}
                      </div>
                      <ul className="project-points">
                        {project.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((project, index) => (
              <button
                key={project.title}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
