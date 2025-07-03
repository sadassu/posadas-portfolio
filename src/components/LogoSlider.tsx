import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
  "/posadas-portfolio/assets/tech-logo/javascript.svg",
  "/posadas-portfolio/assets/tech-logo/react.svg",
  "/posadas-portfolio/assets/tech-logo/php.svg",
  "/posadas-portfolio/assets/tech-logo/firebase.svg",
  "/posadas-portfolio/assets/tech-logo/laravel.svg",
];

const LogoSlider: React.FC = () => {
  return (
    <Marquee className="py-10 z-0" speed={100} pauseOnHover>
      {logos.concat(logos).map((logo, index) => (
        <div key={index} className="inline-block w-40 mx-4 ">
          <img
            src={logo}
            alt={`Logo ${index}`}
            className="h-[75px] object-contain mx-[150px]"
          />
        </div>
      ))}
    </Marquee>
  );
};

export default LogoSlider;
