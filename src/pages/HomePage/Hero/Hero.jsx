import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../../assets/images/hero.png";
import { ThemeContext } from "../../../context/ThemeProvider";

const Hero = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  return (
    <div
      className={`hero min-h-screen pt-5 ${
        (toggleTheme && "bg-[url('https://i.ibb.co/x3B8S1t/hero-bg.jpg')]") ||
        `bg-[#0D0C0C] poppins`
      }`}
    >
      <div className="hero-content flex-col lg:flex-row-reverse container w-[87%] mx-auto poppins">
        <div className="lg:w-1/2 order-2 lg:order-none mt-8 lg:mt-0">
          <img src={hero} className="hero" />
        </div>
        <div className="text-center lg:text-start lg:w-1/2 order-1 lg:order-none pt-16 md:pt-20 lg:pt-0">
          <div className="max-w-md">
            <h1 className="text-4xl lg:text-5xl xl:text-[55px] font-bold">
              Study With Group is Easier!
            </h1>
            <p className="py-6 opensans font-semibold">
              Study prepares you for this by teaching you how to work
              effectively with others, compromise, and leverage collective
              strengths to achieve common goals.
            </p>
          </div>
          <button
            onClick={() => navigate("Register")}
            type="button"
            className="btn btn-primary inline-flex items-center gap-x-2 font-bold"
          >
            Join For Free
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
