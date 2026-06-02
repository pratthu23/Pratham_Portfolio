import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoading } from "../../context/LoadingProvider";
import { setAllTimeline } from "../utils/GsapScroll";

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(100), 500);
    let contactObserver: IntersectionObserver | undefined;
    let contactFrame: number | undefined;
    setAllTimeline();

    if (window.innerWidth > 1024) {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".landing-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl1
        .fromTo(".character-model", { x: 0 }, { x: "-25%", duration: 1 }, 0)
        .to(".avatar-image", { scale: 0.9, duration: 1 }, 0)
        .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
        .to(".landing-container", { y: "40%", duration: 0.8 }, 0);

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-section",
          start: "center 55%",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl2
        .to(
          ".character-model",
          { pointerEvents: "none", x: "-12%", y: "-18%", scale: 0.58, delay: 2, duration: 5 },
          0
        )
        .fromTo(
          ".what-box-in",
          { display: "none" },
          { display: "flex", duration: 0.1, delay: 6 },
          0
        )
        .fromTo(
          ".character-rim",
          { opacity: 1, scaleX: 1.4 },
          { opacity: 0, scale: 0, y: "-70%", duration: 5, delay: 2 },
          0.3
        );

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".whatIDO",
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl3
        .fromTo(".character-model", { y: "-18%" }, { y: "-100%", duration: 4, ease: "none", delay: 1 }, 0)
        .fromTo(".whatIDO", { y: 0 }, { y: "15%", duration: 2 }, 0);

      gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 85%",
          end: "top 45%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }).to(".character-model", { opacity: 0, duration: 1, pointerEvents: "none" }, 0);

      const contactSection = document.querySelector(".contact-section");
      if (contactSection) {
        contactObserver = new IntersectionObserver(
          ([entry]) => {
            gsap.to(".character-model", {
              autoAlpha: entry.isIntersecting ? 0 : 1,
              duration: 0.25,
              overwrite: true,
              pointerEvents: "none",
            });
          },
          { threshold: 0.15 }
        );
        contactObserver.observe(contactSection);

        const updateContactAvatar = () => {
          const rect = contactSection.getBoundingClientRect();
          const isVisible =
            rect.top < window.innerHeight * 0.82 &&
            rect.bottom > window.innerHeight * 0.18;

          gsap.set(".character-model", {
            autoAlpha: isVisible ? 0 : 1,
            pointerEvents: "none",
          });
          contactFrame = window.requestAnimationFrame(updateContactAvatar);
        };
        contactFrame = window.requestAnimationFrame(updateContactAvatar);
      }
    } else {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".what-box-in",
          start: "top 70%",
          end: "bottom top",
        },
      }).to(".what-box-in", { display: "flex", duration: 0.1, delay: 0 }, 0);
    }

    return () => {
      window.clearTimeout(timer);
      contactObserver?.disconnect();
      if (contactFrame) {
        window.cancelAnimationFrame(contactFrame);
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setLoading]);

  return (
    <div className="character-container">
      <div className="character-model">
        <div className="character-rim"></div>
        <img
          className="avatar-image"
          src="/images/pratham-avatar-cutout.png"
          alt="Pratham Shah avatar"
        />
      </div>
    </div>
  );
};

export default Scene;
