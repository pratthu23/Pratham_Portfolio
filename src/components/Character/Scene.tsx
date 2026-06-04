import { useEffect } from "react";
import gsap from "gsap";
import { useLoading } from "../../context/LoadingProvider";
import { setAllTimeline } from "../utils/GsapScroll";

const Scene = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(100), 500);
    setAllTimeline();

    if (window.innerWidth > 1024) {
      const updateAvatarVisibility = () => {
        const landing = document.querySelector(".landing-section");
        const rect = landing?.getBoundingClientRect();
        const shouldShow =
          !!rect &&
          rect.top <= window.innerHeight * 0.1 &&
          rect.bottom > window.innerHeight * 0.35;

        gsap.set(".character-model", {
          autoAlpha: shouldShow ? 1 : 0,
          pointerEvents: "none",
        });
      };

      updateAvatarVisibility();
      window.addEventListener("scroll", updateAvatarVisibility, { passive: true });
      window.addEventListener("resize", updateAvatarVisibility);

      return () => {
        window.clearTimeout(timer);
        window.removeEventListener("scroll", updateAvatarVisibility);
        window.removeEventListener("resize", updateAvatarVisibility);
      };
    }

    return () => {
      window.clearTimeout(timer);
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
