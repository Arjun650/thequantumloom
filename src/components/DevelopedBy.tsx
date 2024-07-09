import  { useEffect, useState } from "react";
import { useTrail, animated } from "@react-spring/web";
import '../styles/globals.css';

const text = "Quan7umL00m".split("");
const titles = ["CTF Player", "Crypto Enthusiast", "Frontend Developer"];

const CoolTextAnimation = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [state, setState] = useState(true);

  const [trail] = useTrail(
    text.length,
    () => ({
      opacity: 1,
      y: 0,
      padding: 1,
      color: `rgb(var(--${state ? "primary" : "neutral"}-9))`,
      from: {
        opacity: 0,
        y: state ? -5 : 5,
        padding: state ? 0 : 1,
        color: `rgb(var(--${state ? "neutral" : "primary"}-9))`,
      },
    }),
    [state]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => !prev);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center p-1 w-full h-full">
      <div className="flex items-center gap-2 font-Syncrone font-medium text-3xl lg:text-3xl select-none special">
        {trail.map((props, i) => (
          <animated.span key={i} style={props}>
            {text[i]}
          </animated.span>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-1 mb-8 font-mono text-neutral-10 text-xs text-center">
      <span style={{ color: `rgb(var(--${titleIndex % 2 === 0 ? "neutral" : "primary"}-9))` }}>
          <a
            href="https://github.com/shashank-amireddy"
            className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Developer"
          >
            {titles[titleIndex]}
          </a>
        </span>
      </div>
    </div>
  );
};

export default CoolTextAnimation;






// import React, { useEffect, useState } from "react";
// import { useTrail, animated } from "@react-spring/web";

// const titles = ["CTF Player", "Crypto Enthusiast", "Frontend Developer", "Hello"];
// const text = "Quan7umL00m".split("");

// const CoolTextAnimation = () => {
//   const [titleIndex, setTitleIndex] = useState(0);
//   const [state, setState] = useState(true);

//   const [opacity] = useTrail(
//     text.length,
//     () => ({
//       from: {
//         opacity: 0,
//         transform: state ? "scale(0.8) rotate(0deg)" : "scale(1.2) rotate(360deg)",
//         color: `rgb(var(--${state ? "neutral" : "primary"}-9))`,
//       },
//       to: {
//         opacity: 1,
//         transform: state ? "scale(1) rotate(360deg)" : "scale(1.2) rotate(0deg)",
//         color: `rgb(var(--${state ? "neutral" : "primary"}-9))`,
//       },
//       config: { tension: 300, friction: 20 },
//     }),
//     [state]
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setState((prev) => !prev);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative flex items-center justify-center p-1 w-full h-full">
//       <div className="flex items-center gap-2 font-mono font-medium text-2xl lg:text-3xl select-none special">
//         {opacity.map((props, i) => (
//           <animated.span key={i} style={props}>
//             {text[i]}
//           </animated.span>
//         ))}
//       </div>

//       <div className="absolute inset-x-0 bottom-1 mb-8 font-mono text-neutral-10 text-xs text-center">
//         <span style={{ color: `rgb(var(--${titleIndex % 2 === 0 ? "neutral" : "primary"}-9))` }}>
//           <a
//             href="https://github.com/flamrdevs"
//             className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Developer"
//           >
//             {titles[titleIndex]}
//           </a>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default CoolTextAnimation;
