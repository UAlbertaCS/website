import { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";

const Story = () => {
  const [scrolled, setScrolled] = useState(false);
  const [height, setHeight] = useState(0);
  const [time, setTime] = useState(2);
  const ref = useRef(null);
  // const intersectionRef = useRef(null);
  // const intersection = useIntersection(intersectionRef, {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1,
  // });

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  const scrolling = (event) => {
    console.log(1);
  };
  useEffect(() => {
    window.onscroll = () => {
      // if scrolled passed the middle of the transition from first to second
      if (window.scrollY < window.innerHeight) {
        if (1 - window.scrollY / window.innerHeight < 0.5) {
          setTime(time + 0.2);
          console.log(time);
        } else {
        }
      }
    };

    // const handleResize = () => {
    //     if (window.innerWidth > 1050) {
    //         setBlueSide(true)
    //         setScreenScale(1)
    //         setSmall(1)
    //         setSmallSize(false)
    //     } else {
    //         setBlueSide(false)
    //         // 1-(1070-window.innerWidth)/1070
    //         setScreenScale(.5)
    //         setSmall(.5)
    //         setSmallSize(true)
    //     }
    // }

    // window.addEventListener('resize', handleResize)
    // // init on mount
    // handleResize()
  }, []);

  // if (intersection) console.log(intersection.intersectionRatio);

  return (
    <>
      <div className="story" id="story">
        <div className="story__container">
          <h2 onScroll={(e) => console.log("scrolling!", e.target.scrollTop)}>
            Our Story
          </h2>
        </div>
      </div>

      <div>
        {/* ref={intersectionRef}> */}
        <div
          className="story__container__video"
          style={{ height: `${height * 4}px` }}
        >
          <div style={{ position: "sticky", top: 0 }} onScroll={scrolling}>
            <video
              tabIndex="0"
              autobuffer="autobuffer"
              preload="preload"
              style={{ width: "100%", objectFit: "contain" }}
              playsInline
              muted
              ref={ref}
              onScroll={scrolling}
            >
              <source type="video/mp4" src={`main.mp4#t=${time}`} />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};
export default Story;
