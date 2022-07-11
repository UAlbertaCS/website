import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import animationData from "../../public/data.json";

const Story = () => {
  const [height, setHeight] = useState(0);
  const lottiee = useRef(null);
  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

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
      const scrollPosition = window.scrollY - 1000;
      const maxFrames = anim.totalFrames - 5;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

      // debug
      // console.log(frame);

      if (frame <= 1) {
        anim.goToAndStop(5, true);
      } else if (frame > maxFrames) {
        anim.goToAndStop(maxFrames, true);
      } else {
        anim.goToAndStop(frame, true);
      }
    }
    const onScroll = () => {
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="story" id="story">
        <div className="story__container">
          <h2>Our Story</h2>
        </div>
      </div>
      <div>
        <div
          className="story__container__video"
          style={{ height: `${height * 5 - 50}px` }}
        >
          <div style={{ position: "sticky", top: 0 }}>
            <div
              ref={lottiee}
              className="lottie"
              id="firstLottie"
              controls
              mode="scroll"
              src={"data.json"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Story;
