import CountUp from "react-countup";

export const Increaser = ({ number, snippet, scrolled }) => {
  return (
    <div>
      <h4>
        <CountUp end={scrolled ? number : 0} />+
      </h4>
    </div>
  );
};
