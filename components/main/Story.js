import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../public/data.json";

const Story = () => {
  const lottiee = useRef(null);

  useEffect(() => {
    var animDuration = 3100;
    const anim = lottie.loadAnimation({
      container: lottiee.current,
      renderer: "svg",
      loop: false,
      autoplay: false,

      animationData,
    });

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

      anim.goToAndStop(frame, true);
    }
    const onScroll = () => {
      // console.log("Scrolling");
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="story" id="story">
      <div className="story__container">
        <h2>Our Story</h2>
        <div
          ref={lottiee}
          id="firstLottie"
          controls
          mode="scroll"
          src={"data.json"}
          style={{ width: "320px" }}
        />
      </div>
    </div>
  );
};
export default Story;
