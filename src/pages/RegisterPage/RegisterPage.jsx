import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoBlack from "../../assets/images/black-logo.png";
import logo from "../../assets/images/logo.png";
import { ThemeContext } from "../../context/ThemeProvider";
import useAuth from "../../hooks/useAuth";
import Tost from "../shared/Tost/Tost";

const RegisterPage = () => {
  const [toggle, setToggle] = useState(true);

  // theme
  const { toggleTheme } = useContext(ThemeContext);

  // auth
  const { createNewUser, updateUserProfile, loginWithGithub, loginWithGoogle } =
    useAuth();

  // react hook from
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  // register from handle
  const onSubmit = (data) => {
    const fullName = data.fullName;
    const email = data.email;
    const photourl = data.photourl;
    const password = data.password;

    // password validation condition
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      return toast.error(
        "Lower and upper case include and length 6 greater than or equal"
      );
    }

    createNewUser(email, password)
      .then(() => {
        // user profile
        updateUserProfile(fullName, photourl);
        toast.success("Account created successfully");
        navigate(`${location?.state ?? "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });

    resetField("fullName");
    resetField("email");
    resetField("photourl");
    resetField("password");
  };

  // handle social login
  const handleSocialLogin = (socialLogin) => {
    socialLogin()
      .then(() => {
        toast.success("Login successful.");
        navigate(`${location?.state ?? "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // password view toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Tost />
      <section className="container w-[87%] mx-auto poppins py-[70px]">
        <div className="min-w-screen min-h-screen bg-base-100 flex items-center justify-center px-5 py-5">
          <div className="text-base-content font-medium  w-full overflow-hidden ">
            <div className="md:flex">
              <div className="md:w-1/2 bg-base-100 py-10 rounded-md md:sticky md:top-5">
                {/* img */}
                <img
                  src="https://i.ibb.co/G92LGLV/registration.jpg"
                  alt="img"
                  className="rounded-sm"
                />
              </div>
              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                  {/* section content */}
                  <div className="">
                    <div className="flex flex-col items-center mb-8">
                      <Link to="/">
                        {(toggleTheme && (
                          <img src={logoBlack} alt="logo" />
                        )) || <img src={logo} alt="logo" />}
                      </Link>
                    </div>
                    <h1 className="mb-2 text-[26px] md:text-[35px] font-bold leading-[42px]">
                      Open up your Raque Account now
                    </h1>
                    <div className="mb-5">
                      <Link to="/Login">
                        <p className="text-center text-sm font-light">
                          Already registered?{" "}
                          <span className="underline ">Login</span>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-1 text-base">
                      <label className="text-sm px-1 text-base-content font-medium">
                        Name
                      </label>
                      <input
                        {...register("fullName", { required: true })}
                        type="text"
                        name="fullName"
                        placeholder="Your full name"
                        className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100"
                      />
                      {errors.fullName && (
                        <span className="text-base-content text-xs">
                          Name can&apos;t be empty
                        </span>
                      )}
                    </div>
                    <div className="space-y-1  text-base">
                      <label className="text-sm px-1 text-base-content font-medium">
                        Email
                      </label>
                      <input
                        {...register("email", { required: true })}
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100"
                      />
                      {errors.email && (
                        <span className="text-base-content text-xs">
                          Email can&apos;t be empty
                        </span>
                      )}
                    </div>
                    <div className="space-y-1  text-base">
                      <label className="text-sm px-1 text-base-content font-medium">
                        Photo URL
                      </label>
                      <input
                        {...register("photourl")}
                        type="url"
                        name="photourl"
                        placeholder="Your photo url"
                        className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100"
                      />
                    </div>
                    <div className="space-y-1  text-base">
                      <label className="text-sm px-1 text-base-content font-medium">
                        Password
                      </label>
                      <div className="relative flex items-center">
                        <input
                          {...register("password", { required: true })}
                          type={toggle ? "password" : "text"}
                          name="password"
                          placeholder="******"
                          className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100"
                        />
                        <span
                          className="absolute right-2 cursor-pointer"
                          onClick={handleToggle}
                        >
                          {(!toggle && (
                            <svg
                              className="w-6 h-6 text-[#9CA3AF]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                              />
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>
                          )) || (
                            <svg
                              className="w-6 h-6 text-[#9CA3AF] "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>
                          )}
                        </span>
                      </div>
                      {errors.password && (
                        <span className="text-base-content text-xs">
                          Password can&apos;t be empty
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-3 pt-3">
                      <div className="w-full px-3 mb-3">
                        <button className="btn btn-primary btn-block">
                          Register Now
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="my-12 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-base-content tracking-wide font-medium bg-base-100 transform translate-y-1/2">
                      Or
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => handleSocialLogin(loginWithGoogle)}
                      className="w-full font-medium border shadow-sm rounded-lg py-3 bg-base-100 text-base-content flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                    >
                      <div className="bg-base-100 p-2 rounded-full">
                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                          <path
                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                            fill="#4285f4"
                          />
                          <path
                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                            fill="#34a853"
                          />
                          <path
                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                            fill="#fbbc04"
                          />
                          <path
                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                            fill="#ea4335"
                          />
                        </svg>
                      </div>
                      <span className="ml-4">Connect with Google</span>
                    </button>

                    <button
                      onClick={() => handleSocialLogin(loginWithGithub)}
                      className="w-full font-medium border shadow-sm rounded-lg py-3 bg-base-100 text-base-content flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                    >
                      <div className="bg-base-100 p-2 rounded-full">
                        <svg
                          className="w-6 bg-white rounded-full"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                          />
                        </svg>
                      </div>
                      <span className="ml-4"> Connect with GitHub</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
