import { useLayoutEffect } from "react";
import HeroVideo from "../assets/IMG_0987.MP4";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Poetry() {
  useLayoutEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            // console.log('video played!');
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    });
  }, []);

  return (
    <>
      <div className="poems">
        <Header />
        <main>
          <div className="poems-card">
            <div className="poems-card__title">A boy in the whirlwind</div>
            <video
              className="poems-card__visual"
              id="video"
              // autoplay
              loop
              muted
              playsinline
              src={HeroVideo}
            ></video>
            <div className="poems-card__content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
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
    </>
  );
}
