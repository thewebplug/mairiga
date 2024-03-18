import { useLayoutEffect, useEffect } from "react";
import HeroVideo from "../assets/IMG_0987.MP4";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { getPoem } from "../apis";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function Poetry() {
  const pathname = useParams();
  const [poem, setPoem] = useState("");

  useLayoutEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    });
  }, []);

  const handleGetPoem = async () => {
    const response = await getPoem(pathname?.id);
    setPoem(response?.data?.poem);
  };

  useEffect(() => {
    handleGetPoem();
  }, []);
  return (
    <div data-scroll-section>
      <div className="poems">
        <Header />
        <main>
          <div className="poems-card">
            <div className="poems-card__title">{poem?.title}</div>
            <video
              className="poems-card__visual"
              id="video"
              // autoplay
              loop
              muted
              playsinline
              src={poem?.videoUrl?.url}
            ></video>
            <div className="poems-card__content">
              <p dangerouslySetInnerHTML={{ __html: poem?.poem }}></p>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry</p>
          <p>Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry</p> */}

              <div className="card__content__ying"></div>
              <div className="card__content__yang"></div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
