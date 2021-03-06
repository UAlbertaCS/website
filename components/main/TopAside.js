import { isMobile } from "react-device-detect";

export const TopAside = () => {
  if (isMobile) {
    alert(
      "This website works best on desktop and may be unusable for your mobile device"
    );
    return;
  }

  return (
    <div className="heroAside">
      <iframe
        src="https://my.spline.design/main-bdf9f914a372467f06ea141d2dbc0677/"
        frameBorder="0"
        width={600}
        height={600}
      />
    </div>
  );
};

export default TopAside;
