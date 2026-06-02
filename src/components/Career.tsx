import "./styles/Career.css";

const resumeSections = [
  {
    id: "experience",
    eyebrow: "Experience",
    heading: "Experience",
    intro: "Hands-on engineering work with AI-driven applications and real-world automation.",
    title: "Software Development Engineer Intern",
    meta: "PinnacleLabs India | May 2026 - Jun 2026",
    points: [
      "Engineered AI-driven applications including Resume Parser, Real-Time Translator, and Autocorrect Tool using Machine Learning and NLP.",
      "Designed intelligent automation systems with real-time processing to improve workflow efficiency and application accuracy.",
      "Collaborated with development teams to optimize system performance and enhance user experience.",
    ],
  },
  {
    id: "education",
    eyebrow: "Education",
    heading: "Education",
    intro: "Academic foundation across artificial intelligence, software engineering, and applied development.",
    title: "Integrated M.Tech Artificial Intelligence",
    meta: "VIT Bhopal University, Sehore | Jul 2024 - May 2029",
    points: [
      "Focused on Artificial Intelligence, machine learning foundations, software development, and applied engineering.",
      "Building a project portfolio across NLP, computer vision, full-stack systems, and API-backed products.",
    ],
  },
  {
    id: "education",
    eyebrow: "Education",
    heading: "Education",
    intro: "Academic foundation across artificial intelligence, software engineering, and applied development.",
    title: "HSC - Class XII",
    meta: "Shri Swami Samarth English Medium School, Jalgaon | Jun 2022 - May 2024",
    points: ["Completed Class XII with 80%."],
  },
  {
    id: "certifications",
    eyebrow: "Certifications",
    heading: "Certifications",
    intro: "Credentials that support AI, machine learning, and production-ready development skills.",
    title: "Certifications",
    meta: "AWS, TensorFlow, IBM SkillsBuild",
    points: [
      "AWS Certified Machine Learning - Specialty.",
      "TensorFlow Developer Certificate.",
      "Artificial Intelligence Fundamentals - IBM SkillsBuild.",
    ],
  },
  {
    id: "leadership",
    eyebrow: "Leadership",
    heading: "Leadership",
    intro: "Creative and media leadership across club teams, events, and visual storytelling work.",
    title: "Media and Visual Storytelling Roles",
    meta: "NEC Club, Meta Verse Club, National Service Scheme",
    points: [
      "Media Team Lead at NEC Club, leading photography, videography, and promotional content creation.",
      "Photography Co-Lead at Meta Verse Club, coordinating visual storytelling for club events.",
      "Media Team Member at NSS, capturing and editing media for outreach campaigns and social initiatives.",
    ],
  },
  {
    id: "interests",
    eyebrow: "Interests",
    heading: "Interests",
    intro: "Creative practice that shapes how I think about product polish, clarity, and user experience.",
    title: "Creative Practice",
    meta: "Photography, Cinematography, Video Editing",
    points: [
      "Uses photography and editing as a creative layer alongside software and AI work.",
      "Interested in visual systems, polished interfaces, and content that communicates clearly.",
    ],
  },
];

const resumePages = resumeSections.reduce<
  Array<{
    id: string;
    eyebrow: string;
    heading: string;
    intro: string;
    items: typeof resumeSections;
  }>
>((pages, section) => {
  const existingPage = pages.find((page) => page.id === section.id);
  if (existingPage) {
    existingPage.items.push(section);
  } else {
    pages.push({
      id: section.id,
      eyebrow: section.eyebrow,
      heading: section.heading,
      intro: section.intro,
      items: [section],
    });
  }
  return pages;
}, []);

const Career = () => {
  return (
    <section className="resume-pages" id="resume">
      {resumePages.map((page, index) => (
        <section
          className="resume-page section-container"
          id={`resume-${page.id}`}
          key={page.id}
        >
          <div className="resume-page-header">
            <p>{index === 0 ? "Resume Snapshot" : page.eyebrow}</p>
            <h2>
              {page.heading}
              <span>{page.eyebrow === "Experience" ? " work" : " details"}</span>
            </h2>
            <small>{page.intro}</small>
          </div>
          <div className={`resume-page-grid ${page.items.length === 1 ? "single" : ""}`}>
            {page.items.map((section) => (
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
      ))}
    </section>
  );
};

export default Career;
