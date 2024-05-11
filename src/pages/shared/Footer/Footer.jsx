import { FiPhone } from "react-icons/fi";
import {
  LiaEnvelopeOpenTextSolid,
  LiaMapMarkerAltSolid,
} from "react-icons/lia";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="poppins text-[#cccccc]">
      <div className="pt-[100px] pb-[70px] bg-[#12141b]">
        <div className="footer container w-[87%] mx-auto">
          <aside>
            <div className="space-y-3">
              <h3 className="text-xl text-[#fff] font-semibold">Contact Us</h3>
              <ul className="space-y-1 text-[15px]">
                <div className="flex items-center gap-3">
                  <div className="text-[#fff] text-lg ">
                    <LiaMapMarkerAltSolid />
                  </div>
                  <div className="space-y-1">
                    <li>2750 Quadra Street Victoria Road, New York, USA</li>
                  </div>
                </div>
              </ul>

              <ul className="space-y-1 text-[15px]">
                <div className="flex items-center gap-3">
                  <div className="text-[#fff] text-lg ">
                    <FiPhone />
                  </div>
                  <div className="space-y-1">
                    <li>+1 (123) 456 7890</li>
                  </div>
                </div>
              </ul>

              <ul className="space-y-1 text-[15px]">
                <div className="flex items-center gap-3">
                  <div className="text-[#fff] text-lg ">
                    <LiaEnvelopeOpenTextSolid />
                  </div>
                  <div className="space-y-1">
                    <li>hello@raque.com</li>
                  </div>
                </div>
              </ul>

              <div className="flex space-x-4 pt-3">
                <a
                  href="#"
                  title="Twitter"
                  className="flex items-center justify-center   rounded-sm p-2   bg-[#fff] hover:bg-[#FF1949] transition-all duration-300 text-[#FF1949] hover:text-[#fff]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-4 h-4"
                  >
                    <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  title="Facebook"
                  className="flex items-center justify-center    rounded-sm p-2   bg-[#fff] hover:bg-[#FF1949] transition-all duration-300 text-[#FF1949] hover:text-[#fff]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-4 h-4"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  title="Gmail"
                  className="flex items-center justify-center    rounded-sm p-2   bg-[#fff] hover:bg-[#FF1949] transition-all duration-300 text-[#FF1949] hover:text-[#fff]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-4 h-4"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </aside>

          <nav>
            <h3 className="text-xl text-[#fff] font-semibold">Useful Link</h3>
            <Link to="Login" className="link link-hover hover:text-[#FF1949]">
              Login
            </Link>
            <Link
              to="Register"
              className="link link-hover hover:text-[#FF1949]"
            >
              Register
            </Link>
            <Link
              to="Assignments"
              className="link link-hover hover:text-[#FF1949]"
            >
              Assignments
            </Link>
            <Link
              to="Create-Assignments"
              className="link link-hover hover:text-[#FF1949]"
            >
              Create Assignments
            </Link>
            <Link
              to="Pending-Assignments"
              className="link link-hover hover:text-[#FF1949]"
            >
              Pending Assignments
            </Link>
            <Link
              to="My-Attempted-Assignments"
              className="link link-hover hover:text-[#FF1949]"
            >
              My Attempted Assignments
            </Link>
          </nav>

          <nav>
            <h3 className="text-xl text-[#fff] font-semibold">Support</h3>
            <a className="link link-hover hover:text-[#FF1949]">Privacy</a>
            <a className="link link-hover hover:text-[#FF1949]">FAQ&#39;s</a>
            <a className="link link-hover hover:text-[#FF1949]">Support</a>
            <a className="link link-hover hover:text-[#FF1949]">Terms</a>
            <a className="link link-hover hover:text-[#FF1949]">Condition</a>
            <a className="link link-hover hover:text-[#FF1949]">Policy</a>
          </nav>

          {/* <nav>
            <h3 className="text-xl text-[#fff] font-semibold">Contact Us</h3>
            <a className="link link-hover hover:text-[#FF1949]">Terms of use</a>
            <a className="link link-hover hover:text-[#FF1949]">
              Privacy policy
            </a>
            <a className="link link-hover hover:text-[#FF1949]">
              Cookie policy
            </a>
          </nav> */}
        </div>
      </div>
      <div className="py-[30px] bg-[#090a0e]">
        <section className="footer footer-center container w-[87%] mx-auto">
          <aside>
            <Link to="/" className="">
              <img src={logo} alt="logo" />
            </Link>
            <small className="mt-2 text-sm poppins">
              © 2024{" "}
              <Link
                to="/"
                className="text-white link link-hover hover:text-[#FF1949]"
              >
                Raque
              </Link>{" "}
              Designed By{" "}
              <Link
                className="text-white link link-hover hover:text-[#FF1949]"
                to=""
              >
                Developer
              </Link>{" "}
              | All rights reserved.
            </small>
          </aside>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
