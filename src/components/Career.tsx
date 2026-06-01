import "./styles/Career.css";

const resumeSections = [
  {
    eyebrow: "Experience",
    title: "Software Development Engineer Intern",
    meta: "PinnacleLabs India | May 2026 - Jun 2026",
    points: [
      "Engineered AI-driven applications including Resume Parser, Real-Time Translator, and Autocorrect Tool using Machine Learning and NLP.",
      "Designed intelligent automation systems with real-time processing to improve workflow efficiency and application accuracy.",
      "Collaborated with development teams to optimize system performance and enhance user experience.",
    ],
  },
  {
    eyebrow: "Education",
    title: "Integrated M.Tech Artificial Intelligence",
    meta: "VIT Bhopal University, Sehore | Jul 2024 - May 2029",
    points: [
      "Focused on Artificial Intelligence, machine learning foundations, software development, and applied engineering.",
      "Building a project portfolio across NLP, computer vision, full-stack systems, and API-backed products.",
    ],
  },
  {
    eyebrow: "Education",
    title: "HSC - Class XII",
    meta: "Shri Swami Samarth English Medium School, Jalgaon | Jun 2022 - May 2024",
    points: ["Completed Class XII with 80%."],
  },
  {
    eyebrow: "Certifications",
    title: "AI & Machine Learning Credentials",
    meta: "AWS and TensorFlow",
    points: [
      "AWS Certified Machine Learning - Specialty.",
      "TensorFlow Developer Certificate.",
    ],
  },
  {
    eyebrow: "Leadership",
    title: "Media and Visual Storytelling Roles",
    meta: "NEC Club, Meta Verse Club, National Service Scheme",
    points: [
      "Media Team Lead at NEC Club, leading photography, videography, and promotional content creation.",
      "Photography Co-Lead at Meta Verse Club, coordinating visual storytelling for club events.",
      "Media Team Member at NSS, capturing and editing media for outreach campaigns and social initiatives.",
    ],
  },
  {
    eyebrow: "Interests",
    title: "Creative Practice",
    meta: "Photography, Cinematography, Video Editing",
    points: [
      "Uses photography and editing as a creative layer alongside software and AI work.",
      "Interested in visual systems, polished interfaces, and content that communicates clearly.",
    ],
  },
];

const Career = () => {
  return (
    <section className="resume-section section-container" id="resume">
      <div className="resume-header">
        <p>Resume Snapshot</p>
        <h2>
          Separated, scannable <span>details</span>
        </h2>
      </div>
      <div className="resume-grid">
        {resumeSections.map((section) => (
          <article className="resume-card" key={`${section.eyebrow}-${section.title}`}>
            <div className="resume-card-top">
              <span>{section.eyebrow}</span>
              <p>{section.meta}</p>
            </div>
            <h3>{section.title}</h3>
            <ul>
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Career;
