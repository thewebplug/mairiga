import Footer from "../components/Footer";
import Header from "../components/Header";
import Image1 from "../assets/DSC08898.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPoems } from "../apis";
import { useState } from "react";

export default function PoetryStories() {
  const [poetry, setPoetry] = useState([]) 

    const navigate = useNavigate();
  useEffect(() => {
    const img = document.querySelectorAll(".poetry-stories__main-story-img");
    const links = document.querySelectorAll(".poetry-stories__main-story");
    links.forEach((link, index) => {
      link.addEventListener("mousemove", (e) => {
        img[index].style.transform = `translate(${(e.offsetX + 426)}px, ${
          (e.clientY - 280) / 2.5
        }px) rotate(${(e.offsetX - 26) / 45}deg) skewX(${
          (e.offsetX - 26) / 60
        }deg)`;
        img[index].style.opacity = 1;
        img[index].children[0].style.transform = `scale(1, 1)`;
      });

      link.addEventListener("mouseleave", () => {
        img[index].style.opacity = 0;
        img[index].children[0].style.transform = `scale(0.4, 0.4)`;
      });
    });
  }, [poetry]);

  const handleGetPoetry = async () => {
    const response = await getAllPoems();
    setPoetry(response?.data?.poetry);
  };

  useEffect(() => {
    handleGetPoetry();
  }, [])
  return (
    <div data-scroll-section>
      <div className="poetry-stories">
        <Header />
        <div className="poetry-stories__main">
            <div className="poetry-stories__main__title">Poetry</div>
          <div className="poetry-stories__divider"></div>
          {poetry?.map((poem) => <>
          <div className="poetry-stories__main-story" onClick={() => navigate(`/poetry/${poem?._id}`)}>
          <div href="#" target="_blank" rel="noopener">
            {poem?.title}
          </div>

          <div className="poetry-stories__main-story-img">
            <video src={poem?.videoUrl?.url}></video>
          </div>
        </div>
        <div className="poetry-stories__divider"></div>
          </>)}
        </div>
      </div>
      <Footer />
    </div>
  );
}
