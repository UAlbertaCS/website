import { useState, useRef } from "react";
import { useIntersection } from "react-use";
import { Increaser } from "../Microblocks/Increaser";

const Story = () => {
  const [scrolled, setScrolled] = useState(false);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  if (intersection && intersection.intersectionRatio > 0.75 && !scrolled)
    setScrolled(true);

  return (
    <div className="supports" id="supports" ref={intersectionRef}>
      <h2>Current supporters ✊</h2>
      <Increaser number={1001} scrolled={scrolled} />
    </div>
  );
};

export default Story;
