import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { useIntersection } from "react-use";
import animationData from "../../public/data.json";

const Story = () => {
  const [height, setHeight] = useState(0);
  const lottiee = useRef(null);
  const animDuration = 3100;

  // interaction
  const [scrolled, setScrolled] = useState(false);
  const [distFromTop, setDistFromTop] = useState(1000);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  if (intersection && intersection.intersectionRatio > 0.75 && !scrolled) {
    // console.error(window.scrollY);
    setScrolled(true);
    setDistFromTop(window.scrollY);
  }

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottiee.current,
      renderer: "svg",
      loop: false,
      autoplay: false,

      animationData,
    });

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY - distFromTop;
      const maxFrames = anim.totalFrames - 5;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

      // debug
      // console.log(frame);

      if (frame <= 2) {
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
          <h2 ref={intersectionRef}>Our Story</h2>
        </div>
      </div>
      <div>
        <div
          className="story__container__video"
          style={{ height: `${height * 5 - 50}px` }}
        >
          <div className="story__container__video__stick">
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
