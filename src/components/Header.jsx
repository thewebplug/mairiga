import { useState } from "react";
import Image2 from "../assets/IMG_0975.PNG";
import Image1 from "../assets/IMG_0976.JPG";

import { useNavigate, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Header({ scroll }) {
  const navigate = useNavigate();
  const [sideBarActive, setSideBarActive] = useState(false);
  const pathname = useLocation();

  const handleClick = (path) => {
    setSideBarActive(false)
    navigate(path);
  };

  useEffect(() => {
    if (pathname?.pathname?.split("/")[1] === "home") {
      const targetElement = document.querySelector(`#${pathname?.pathname?.split("/")[2]}`);
      if (targetElement && scroll) {
        const targetPosition = targetElement.offsetTop;

        scroll.scrollTo(targetPosition, {
          offset: -20,
          callback: () => {
            // Optional callback function after scrolling
          },
        });
      } else {
        console.log("wahala");
      }
    }
  }, [pathname]);
  useEffect(() => {
    const img = document.querySelectorAll(".nav-desktop__link__img");
    const links = document.querySelectorAll(".nav-desktop__link");
    links.forEach((link, index) => {
      link.addEventListener("mousemove", (e) => {
        img[index].style.transform = `translate(${e.offsetX - 26}px, ${
          (e.clientY + 30) / 2.5
        }px) rotate(${(e.offsetX - 26) / 5}deg)`;
        img[index].style.opacity = 1;
        img[index].children[0].style.transform = `scale(1, 1)`;
      });

      link.addEventListener("mouseleave", () => {
        img[index].style.opacity = 0;
        img[index].children[0].style.transform = `scale(0.4, 0.4)`;
      });
    });
  }, []);

  return (
    <header>
      <img src={Image2} alt="" className="logo" onClick={() => navigate("/")} />
      <div
        className={sideBarActive ? "hamburger hamburger-active" : "hamburger"}
        onClick={() => setSideBarActive(!sideBarActive)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className="nav-desktop">
        <div className="nav-desktop__link" onClick={() => handleClick("/home/about")}>
          <a className="kala">About</a>
          <div className="line"></div>
          <div className="nav-desktop__link__img">
            <img className="nav-img" src={Image1} alt="" />
          </div>
        </div>
        <div
          className="nav-desktop__link"
          onClick={() => handleClick("/home/poetry")}
        >
          <a className="kala">Poetry</a>
          <div className="line"></div>
          <div className="nav-desktop__link__img">
            <img className="nav-img" src={Image1} alt="" />
          </div>
        </div>
          <div className="nav-desktop__link"
          onClick={() => handleClick("/home/podcast")}
          >
            <a className="kala">Podcast</a>
            <div className="line"></div>
            <div className="nav-desktop__link__img">
              <img className="nav-img" src={Image1} alt="" />
            </div>
          </div>
        <div className="nav-desktop__link"
        onClick={() => handleClick("/home/charity")}
        >
          <a className="kala">Charity</a>
          <div className="line"></div>
          <div className="nav-desktop__link__img">
            <img className="nav-img" src={Image1} alt="" />
          </div>
        </div>
      </nav>
      <nav
        className={
          sideBarActive ? "nav-mobile nav-mobile-active" : "nav-mobile"
        }
      >
        <div
        onClick={() => handleClick("/home/about")}
        >
          <h2>About</h2>
          <div className="line"></div>
        </div>
        <div
        onClick={() => handleClick("/home/poetry")}
        >
          <h2>Poetry</h2>
          <div className="line"></div>
        </div>
        <div
        onClick={() => handleClick("/home/podcast")}
        >
          <h2>Podcast</h2>
          <div className="line"></div>
        </div>
        <div
        onClick={() => handleClick("/home/charity")}
        >
          <h2>Charity</h2>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
}
