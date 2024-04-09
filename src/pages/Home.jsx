import Image1 from "../assets/IMG_0976.JPG";
import Image3 from "../assets/IMG_0977.JPG";
import Image4 from "../assets/IMG_1647.JPG";
import Image5 from "../assets/IMG_1648.JPG";
import Image6 from "../assets/IMG_1650.JPG";
import Image7 from "../assets/DSC08886.jpg";
import Image8 from "../assets/DSC08857.jpg";
import Image9 from "../assets/DSC08898.jpg";
import Image10 from "../assets/DSC08861.jpg";
import PoetryPhotoOne from "../assets/PoetryPhotoOne.png";
import PoetryPhotoTwo from "../assets/PoetryPhotoTwo.png";
import PoetryPhotoThree from "../assets/PoetryPhotoThree.png";
import Charity from "../assets/IMG_0982.PNG";
import HeroVideo from "../assets/IMG_0987.MP4";
import PoetryVideo1 from "../assets/IMG_1612.MOV";
import PoetryVideo2 from "../assets/IMG_1610.MP4";
import PoetryVideo3 from "../assets/IMG_1609.MP4";
import { useEffect, useLayoutEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { getAllMedia, getAllPoems, getAllSpeakingEngagements, getBio, getTestimonials } from "../apis";

export default function Home({scroll}) {
  const [contactActive, setContactActive] = useState(false);
  const [poetryVideo, setPoetryVideo] = useState(PoetryVideo1);
  const [poetryVideos, setPoetryVideos] = useState([]);
  const [charityMedia, setCharityMedia] = useState([]);
  const [testimonials, setTestimonials] = useState([])
  const [speaking, setSpeaking] = useState([]);
  const [bioImage, setBioImage] = useState([]);
  const [bio, setBio] = useState(null);
  const navigate = useNavigate();
  const pathname = useLocation();

  const handleClick = (path) => {
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
    const container = document.querySelector(".speaking__inner");
    const slider = document.querySelector(".speaking__inner__grid");
    let pressed;
    let mouseStartPosition;
    let sliderStartPosition;
    let mouseCurrentPosition;

    container.addEventListener("mousedown", (e) => {
      pressed = true;
      mouseStartPosition = e.offsetX;
      sliderStartPosition = slider.offsetLeft;
    });
    container.addEventListener("mouseup", (e) => {
      pressed = false;
    });
    container.addEventListener("mousemove", (e) => {
      const containerDimensions = container.getBoundingClientRect();
      const sliderDimensions = slider.getBoundingClientRect();

      if (!pressed) return;
      if (parseInt(slider.style.left) > 0) {
        slider.style.left = `0px`;
        return;
      }
      if (sliderDimensions.right < containerDimensions.right) {
        slider.style.left = `-${
          sliderDimensions.width - containerDimensions.width
        }px`;
        return;
      }
      mouseCurrentPosition = e.offsetX;
      e.preventDefault(); //prevemt mousedown and mousemove from highlighting texts on the slider
      slider.style.left = `${
        mouseCurrentPosition - mouseStartPosition + sliderStartPosition
      }px`;
    });
  }, []);

  useEffect(() => {
    const video = document.querySelector(".poetry-video");

    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [poetryVideo]);

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

  const handleGetCharityMedia = async () => {
    const response = await getAllMedia("charity");
    console.log('responselil', response);
    setCharityMedia(response?.data?.media);
  };

  const handleGetBioMedia = async () => {
    const response = await getAllMedia("bio");
    setBioImage(response?.data?.media[0]);
  };

  const handlePoetryVideosMedia = async () => {
    const response = await getAllPoems();
    setPoetryVideos(response?.data?.poetry);
  };

  const handleGetBio = async () => {
    const response = await getBio();
    setBio(response?.data?.bio[0]);
  };
  const handleGetTestimonials = async () => {
    const response = await getTestimonials();
    setTestimonials(response?.data?.testimonial);
  };
  const handleSpeakingEngagements = async () => {
    const response = await getAllSpeakingEngagements();
    setSpeaking(response?.data?.speaking);
  };

  useEffect(() => {
    handleGetCharityMedia();
    handleGetBioMedia();
    handlePoetryVideosMedia();
    handleGetBio();
    handleGetTestimonials();
    handleSpeakingEngagements();
  }, []);

  return (
    <div className="alpha-container" data-scroll-section>
      <div className="home">
        <svg
          className="home__svg"
          xmlnsDc="http://purl.org/dc/elements/1.1/"
          xmlnsCc="http://creativecommons.org/ns#"
          xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlnsSvg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1333.3333 1066.6667"
          height="1066.6667"
          width="1333.3333"
          xmlSpace="preserve"
          id="svg2"
          version="1.1"
        >
          <metadata id="metadata8"></metadata>
          <defs id="defs6" />
          <g transform="matrix(1.3333333,0,0,-1.3333333,0,1066.6667)" id="g10">
            <g transform="scale(0.1)" id="g12">
              <path
                id="path14"
                d="m 5162.04,4445.27 c -58.35,31.29 -113.75,71.14 -163.27,115.23 -78.71,70.09 -155.74,144.39 -198.15,243.68 -32.74,76.64 -66.28,157.11 -66.66,241.8 -0.46,106.88 30.34,212.96 83.37,305.31 53.34,92.85 100.85,188.14 161.64,277.08 57.81,84.59 125.69,158.97 189.29,238.53 96.97,121.31 219.59,196.99 375.82,215.2 113.88,13.27 206.6,-63.21 248.24,-161.82 62.29,-147.52 93.22,-299.05 110.04,-457.67 17.23,-162.32 16.11,-328.48 -33.55,-485.43 -27.59,-87.16 -67.64,-171.04 -123.18,-243.94 -45.89,-60.22 -106.03,-101.32 -159.35,-153.38 -26.19,-25.57 -50.1,-53.96 -76.01,-80.05 -20.88,-21.03 -43.04,-40.57 -68.77,-55.93 -84.65,-50.59 -194.21,-44.31 -279.46,1.39 z M 3740.21,1956.78 c 169.96,-35 357.16,-66.98 522.82,-137.57 -77.44,131.11 -170.15,253.69 -262.37,375.29 47.08,-41.51 94.17,-83.02 141.26,-124.54 115.92,-102.2 234.33,-207.51 306.87,-343.95 3.68,-6.91 7.24,-13.92 10.7,-20.98 16.12,-12.74 31.77,-26.12 46.8,-40.41 96.06,-91.24 167.82,-214.53 288.44,-269.34 147.04,-66.82 318.64,-11.07 466.94,52.85 507.86,218.85 989.97,534.94 1539.56,596.14 35.24,3.92 71.46,6.99 103.41,22.35 52.83,25.4 80.45,74.81 93.66,132.38 -9.31,37.54 -20.45,74.77 -32.17,111.91 -40.57,128.64 -90.72,254.49 -126.52,384.36 -47.56,172.6 -81.55,348.92 -128.88,521.59 -22.25,81.18 -54.64,161.66 -95.41,235.26 -79.64,143.82 -170.95,281.13 -252.76,423.81 -108.43,189.12 -208.73,383.56 -281.88,588.6 -37.62,105.48 -75.64,210.67 -115.47,315.22 3.64,-9.57 -49.79,-59.6 -56.3,-70.24 -31.09,-50.68 -57.03,-103.57 -91.81,-152.52 -36.94,-51.98 -77.32,-101.44 -119.17,-149.53 -39.52,-45.41 -92.17,-88.41 -125.58,-138.18 51.75,77.12 103.5,154.24 155.27,231.37 47.44,70.71 95.05,141.7 132.45,218.21 33.89,69.35 58.96,142.46 86.81,214.32 26.97,69.56 59.84,135.17 79.78,207.29 40.42,146.19 46.26,298.64 58.07,449.01 16.5,210.18 -3.77,418.97 -108,608.5 -137.92,250.81 -351.68,396.37 -636.07,430.98 -253.81,30.9 -470.03,-59.19 -650.18,-231.9 -77.77,-74.57 -149.49,-161.04 -202.87,-254.19 -89.05,-155.43 -139.19,-327.59 -152.51,-507.45 -6.46,-86.99 -30.57,-168.91 -50.62,-252.67 -35.28,-147.49 -65.89,-296.21 -94.05,-445.24 -27.44,-145.15 29.18,-294.36 54.57,-436 22.83,-127.48 66.6,-250.62 127.36,-364.91 60.23,-113.31 136.67,-217.52 223.27,-312.03 42.91,-46.82 88.36,-91.28 135.75,-133.55 30.11,-26.86 97.25,-104.53 134.86,-110.68 -165.19,27 -314.63,199.86 -410.83,326.25 -104.43,137.19 -183.24,295.45 -252.54,450.16 -46.37,103.49 -93.05,208.21 -118.07,318.51 -4.05,-4.36 -8.15,-8.69 -12.16,-13.09 -10.08,-148.66 -17.19,-298.08 2.66,-445.55 10.84,-80.5 29.68,-159.86 55.02,-237.02 119.42,-363.35 389.72,-674.51 732.79,-843.57 76.8,-37.84 157.11,-68.93 230.37,-113.22 73.25,-44.29 140.53,-104.06 174.88,-182.47 -92.79,137.86 -268.9,185.39 -422.79,248.1 -106.08,43.22 -207.45,98 -301.74,163.04 -52.99,36.57 -104.04,76.62 -147.24,124.36 -205.59,227.23 -339.94,530.25 -401.05,828.51 -19.66,95.9 -10.28,190.12 -19.73,287.12 -1.6,16.4 -3.87,32.7 -6.65,48.92 -55.44,-69.45 -107.99,-141.31 -160.61,-213.18 -111.09,-149.29 -222.18,-298.95 -318.04,-458.88 -92.38,-154.12 -164.6,-321.17 -227.74,-488.76 -33.86,-89.89 -56.98,-185.33 -84.9,-277.28 -23.83,-78.48 -82.22,-189.37 -82.22,-270.79 -27.99,-92.23 -56.29,-184.37 -84,-276.68 -0.53,-1.73 -1.04,-3.46 -1.56,-5.19 -21.74,-72.43 0.82,-134.95 44.11,-194.34 170.91,-234.48 410.8,-341.82 686.01,-398.51"
              />
            </g>
          </g>
        </svg>
        <Header scroll={scroll} />
        <section className="hero">
          <div className="hero__title">
            <h1>
              <span>
                {" "}
                <span className="span">
                  <div className="pills pill__1" 
                  onClick={() => handleClick("/home/poetry")}
                  >Poet</div>
                  <div className="pills pill__2"
                  onClick={() => handleClick("/home/podcast")}
                  >Podcaster</div>
                  Ai
                </span>
                sha
                <span className="span">
                  <div className="pills pill__3"
                  onClick={() => handleClick("/home/speaking")}
                  >Speaker</div>
                  tu
                </span>{" "}
                <span className="span">
                  <div className="pills pill__4"
                  onClick={() => handleClick("/home/podcast")}
                  >Podcaster</div>
                  Ma
                </span>
                ir
                <span className="span">
                  <div className="pills pill__5"
                  onClick={() => handleClick("/home/charity")}
                  >Philantropist</div>
                  iga
                </span>
              </span>
              <br />
              <span>
                <img src={Image1} alt="" />
              </span>
              <span className="hero__title__around">Around</span>
              <span>
                <img src={Image1} alt="" />
              </span>
              <br />
              <span>My Many Works</span>
            </h1>
            <button className="hero__title__button"
            onClick={() => handleClick("/home/about")}
            >Explore</button>
          </div>
        </section>
        <section id="podcast" className="podcast">
          <div className="podcast__preview">
            <video
              id="video"
              // autoplay
              loop
              muted
              playsinline
              src={HeroVideo}
            ></video>
          </div>
          <div className="podcast__main">
            <h2 className="podcast__main-title">
              Changing <br /> <span>The Mindset</span> <br />
              with Aishatu Mairiga
            </h2>
            <div className="podcast__main-socials">
              <div>
                <h3>Instagram</h3>
                <div className="line"></div>
              </div>
              <div>
                <h3>Twitter</h3>
                <div className="line"></div>
              </div>
              <div>
                <h3>Facebook</h3>
                <div className="line"></div>
              </div>
              <div>
                <h3>Somthing else</h3>
                <div className="line"></div>
              </div>
            </div>
            <p className="podcast__main-subtitle">
              Changing the mindset with Aishatu Mairiga is a program where we
              talk about topics that are disturbing teenagers and youth as well.
              The main aim of this is to create a safe space for Youth
              especially Teenagers. To reassure them how capable, important and
              perfect in their own way they are. This program is set to
              encourage and motivate teenagers to have a feeling of comfort,
              acceptance and a place where they can feel at ease to share
              whatever they’re going through without feeling scared of being
              judged. It is A safe place for those dealing with depression
              because mental health is definitely a priority. And mental health
              is health
            </p>
          </div>
        </section>
        <section id="charity" className="charity">
          <div className="charity__flex">
            <h2 className="charity__flex__title">
              Mairiga Aid Foundation <br /> <span>each voice counts</span>
            </h2>
            <div className="charity__flex__subtitle">
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </h3>
              <button className="button0">See more</button>
            </div>
          </div>
          <div className="charity__grid">
            <div>
              {/* each image here will scale up and then down to it's original size. Giving it a bounce effect */}
              <img src={Image1} className="charity__grid-small mini" />
              <img
                src={charityMedia?.length > 0 && charityMedia[2]?.mediaUrl?.url}
                className="charity__grid-small maxXL"
              />
              <img src={Image1} className="charity__grid-small max" />
            </div>
            <div>
              <img
                src={charityMedia?.length > 0 && charityMedia[1]?.mediaUrl?.url}
                className="charity__grid-big maxXL"
              />
              <img src={Image1} className="charity__grid-big mini" />
              <img src={Image1} className="charity__grid-big max" />
            </div>
            <div>
              <img src={Image1} className="charity__grid-small max" />
              <img src={Image1} className="charity__grid-small mini" />
              <img
                src={charityMedia?.length > 0 && charityMedia[0]?.mediaUrl?.url}
                className="charity__grid-small maxXL"
              />
            </div>
          </div>

          {/* <img className="charity__img" src={Charity} alt="" /> */}
        </section>

        {/* Animation: Should be larger than usual(maybe scale(1.2)) and shrink to it's normal size as it come's into view. */}
        <section id="about" className="about">
          <div className="about__flex">
            <h2 className="about__flex__title">About Me</h2>
            <h3 className="about__flex__subtitle">
              Aishatu <br /> Mairiga
            </h3>
          </div>
          <div className="about__bio">
            <p className="about__bio-text">{bio?.bio}</p>
          </div>
        </section>
        <section className="poetry" id="poetry">
          <div className="poetry__flex">
            <div className="poetry__flex__tint"></div>
            <div className="poetry__flex__title">Poetry</div>
            <a
              className="poetry__flex__subtitle"
              onClick={() => {
                navigate("/poetry");
                window.scroll(0, 0);
              }}
            >
              See more
            </a>
          </div>
          <video
            id="video"
            className="poetry-video"
            // autoplay
            loop
            muted
            playsinline
            src={poetryVideo}
          ></video>
          <div className="poetry__previews">
            {poetryVideos?.map((video) => (
              <div onMouseOver={() => setPoetryVideo(video?.videoUrl?.url)}>
                <video src={video?.videoUrl?.url}></video>
                <svg
                  viewBox="-0.5 0 7 7"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>play [#ddcccc]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-347.000000, -3766.000000)"
                        fill="#ddcccc"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"
                            id="play-[#ddcccc]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            ))}

            {/* <img src={Image1} alt="" />
              <img src={Image1} alt="" /> */}
          </div>
          <div className="tint"></div>
        </section>
      </div>
      <section id="speaking" className="speaking">
        <div className="speaking__inner">
          <div className="speaking__inner__grid">
            {speaking?.map((item) => 
            <div className="speaking__inner__grid-box">
            <img src={item?.media?.url} alt="" />
            <h3>{`${item?.event}, ${item?.location}, ${item?.date}`}</h3>
          </div>
            )}
            {speaking?.map((item) => 
            <div className="speaking__inner__grid-box">
            <img src={item?.media?.url} alt="" />
            <h3>{`${item?.event}, ${item?.location}, ${item?.date}`}</h3>
          </div>
            )}
            {speaking?.map((item) => 
            <div className="speaking__inner__grid-box">
            <img src={item?.media?.url} alt="" />
            <h3>{`${item?.event}, ${item?.location}, ${item?.date}`}</h3>
          </div>
            )}
            {speaking?.map((item) => 
            <div className="speaking__inner__grid-box">
            <img src={item?.media?.url} alt="" />
            <h3>{`${item?.event}, ${item?.location}, ${item?.date}`}</h3>
          </div>
            )}
            {speaking?.map((item) => 
            <div className="speaking__inner__grid-box">
            <img src={item?.media?.url} alt="" />
            <h3>{`${item?.event}, ${item?.location}, ${item?.date}`}</h3>
          </div>
            )}
            {speaking?.map((item) => 
            <div className="speaking__inner__grid-box">
            <img src={item?.media?.url} alt="" />
            <h3>{`${item?.event}, ${item?.location}, ${item?.date}`}</h3>
          </div>
            )}
            {speaking?.map((item) => 
            <div className="speaking__inner__grid-box">
            <img src={item?.media?.url} alt="" />
            <h3>{`${item?.event}, ${item?.location}, ${item?.date}`}</h3>
          </div>
            )}
            {speaking?.map((item) => 
            <div className="speaking__inner__grid-box">
            <img src={item?.media?.url} alt="" />
            <h3>{`${item?.event}, ${item?.location}, ${item?.date}`}</h3>
          </div>
            )}
           
          </div>
        </div>

        <h2 className="speaking__title">Speaking Engagements</h2>
      </section>

      <section className="testimonials">
        <h2 className="testimonials__title">Testimonials</h2>
        <div className="testimonials__body">
          <div className="testimonials__body__title">What people say</div>
          <a className="testimonials__body__button">
            <div>Send link to the</div>
            <div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="#000000"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </a>
          <div className="testimonials__body__inner">
            <div className="testimonials__body__inner-slider">
              {testimonials?.map((testimonial) => <div className="testimonial-card">
                <div className="testimonial-card__img">
                  <img src={testimonial?.media?.url} alt="" />
                  <div className="testimonial-card__img-text">
                    {testimonial?.testimonial}
                  </div>
                </div>
                <div className="testimonial-card__flex">
                  <div>{testimonial?.name}</div>
                  <div>{testimonial?.position}</div>
                </div>
              </div>)}
              {testimonials?.map((testimonial) => <div className="testimonial-card">
                <div className="testimonial-card__img">
                  <img src={testimonial?.media?.url} alt="" />
                  <div className="testimonial-card__img-text">
                    {testimonial?.testimonial}
                  </div>
                </div>
                <div className="testimonial-card__flex">
                  <div>{testimonial?.name}</div>
                  <div>{testimonial?.position}</div>
                </div>
              </div>)}
              {testimonials?.map((testimonial) => <div className="testimonial-card">
                <div className="testimonial-card__img">
                  <img src={testimonial?.media?.url} alt="" />
                  <div className="testimonial-card__img-text">
                    {testimonial?.testimonial}
                  </div>
                </div>
                <div className="testimonial-card__flex">
                  <div>{testimonial?.name}</div>
                  <div>{testimonial?.position}</div>
                </div>
              </div>)}
              {testimonials?.map((testimonial) => <div className="testimonial-card">
                <div className="testimonial-card__img">
                  <img src={testimonial?.media?.url} alt="" />
                  <div className="testimonial-card__img-text">
                    {testimonial?.testimonial}
                  </div>
                </div>
                <div className="testimonial-card__flex">
                  <div>{testimonial?.name}</div>
                  <div>{testimonial?.position}</div>
                </div>
              </div>)}
              {testimonials?.map((testimonial) => <div className="testimonial-card">
                <div className="testimonial-card__img">
                  <img src={testimonial?.media?.url} alt="" />
                  <div className="testimonial-card__img-text">
                    {testimonial?.testimonial}
                  </div>
                </div>
                <div className="testimonial-card__flex">
                  <div>{testimonial?.name}</div>
                  <div>{testimonial?.position}</div>
                </div>
              </div>)}
              {testimonials?.map((testimonial) => <div className="testimonial-card">
                <div className="testimonial-card__img">
                  <img src={testimonial?.media?.url} alt="" />
                  <div className="testimonial-card__img-text">
                    {testimonial?.testimonial}
                  </div>
                </div>
                <div className="testimonial-card__flex">
                  <div>{testimonial?.name}</div>
                  <div>{testimonial?.position}</div>
                </div>
              </div>)}
              {testimonials?.map((testimonial) => <div className="testimonial-card">
                <div className="testimonial-card__img">
                  <img src={testimonial?.media?.url} alt="" />
                  <div className="testimonial-card__img-text">
                    {testimonial?.testimonial}
                  </div>
                </div>
                <div className="testimonial-card__flex">
                  <div>{testimonial?.name}</div>
                  <div>{testimonial?.position}</div>
                </div>
              </div>)}
              {testimonials?.map((testimonial) => <div className="testimonial-card">
                <div className="testimonial-card__img">
                  <img src={testimonial?.media?.url} alt="" />
                  <div className="testimonial-card__img-text">
                    {testimonial?.testimonial}
                  </div>
                </div>
                <div className="testimonial-card__flex">
                  <div>{testimonial?.name}</div>
                  <div>{testimonial?.position}</div>
                </div>
              </div>)}
              {testimonials?.map((testimonial) => <div className="testimonial-card">
                <div className="testimonial-card__img">
                  <img src={testimonial?.media?.url} alt="" />
                  <div className="testimonial-card__img-text">
                    {testimonial?.testimonial}
                  </div>
                </div>
                <div className="testimonial-card__flex">
                  <div>{testimonial?.name}</div>
                  <div>{testimonial?.position}</div>
                </div>
              </div>)}
              {testimonials?.map((testimonial) => <div className="testimonial-card">
                <div className="testimonial-card__img">
                  <img src={testimonial?.media?.url} alt="" />
                  <div className="testimonial-card__img-text">
                    {testimonial?.testimonial}
                  </div>
                </div>
                <div className="testimonial-card__flex">
                  <div>{testimonial?.name}</div>
                  <div>{testimonial?.position}</div>
                </div>
              </div>)}
              {testimonials?.map((testimonial) => <div className="testimonial-card">
                <div className="testimonial-card__img">
                  <img src={testimonial?.media?.url} alt="" />
                  <div className="testimonial-card__img-text">
                    {testimonial?.testimonial}
                  </div>
                </div>
                <div className="testimonial-card__flex">
                  <div>{testimonial?.name}</div>
                  <div>{testimonial?.position}</div>
                </div>
              </div>)}
              
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="form" action="">
          <div
            className={
              contactActive === "name"
                ? "slide-in form__inner"
                : contactActive
                ? "slide-out"
                : "form__inner"
            }
          >
            {contactActive && (
              <div className="form__inner__title">
                Hello there, What's your name?
              </div>
            )}
            <input
              placeholder="Name"
              className="form__inner__input"
              type="text"
            />
            <button
              className="form__inner__button"
              type="none"
              onClick={() => setContactActive("email")}
            >
              Next
            </button>
          </div>
          <div
            className={
              contactActive === "email"
                ? "slide-in form__inner"
                : contactActive
                ? "slide-out"
                : "form__inner"
            }
          >
            {contactActive && (
              <div className="form__inner__title">Can i get your email 🙃?</div>
            )}
            <input
              placeholder="Email"
              className="form__inner__input"
              type="text"
            />
            <button
              className="form__inner__button"
              type="none"
              onClick={() => setContactActive("type")}
            >
              Next
            </button>
          </div>
          <div
            className={
              contactActive === "type"
                ? "slide-in form__inner"
                : contactActive
                ? "slide-out"
                : "form__inner"
            }
          >
            {contactActive && (
              <div className="form__inner__title">How may I be of help 😊?</div>
            )}
            <select name="" id="" className="form__inner__input">
              <option value="d">Service type</option>
            </select>
            <button
              className="form__inner__button"
              type="none"
              onClick={() => setContactActive("message")}
            >
              Next
            </button>
          </div>
          <div
            className={
              contactActive === "message"
                ? "form__inner slide-in"
                : "form__inner"
            }
          >
            {contactActive && (
              <div className="form__inner__title">
                Any other thing I should know 😊?
              </div>
            )}
            <textarea
              name=""
              className="form__inner__textarea"
              id=""
              cols="30"
              rows="4"
              placeholder="Message(optional)"
            ></textarea>
            <button
              className="form__inner__button"
              type="none"
              onClick={() => setContactActive(false)}
            >
              Send
            </button>
          </div>

          {/* <button className="form__button">Send</button> */}
        </div>
        <div
          className={
            contactActive ? "bar-top-curve slide-out" : "bar-top-curve"
          }
        >
          <a className="contact__bar-button">
            <div>Send link to the</div>
            <div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="#000000"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </a>
        </div>
        <div
          className={contactActive ? "contact__bar slide-out" : "contact__bar"}
        ></div>
        <div
          className={contactActive ? "contact__box slide-out" : "contact__box"}
        >
          <div className="contact__box__title">
            <h2>Reach Aishatu Miariga.</h2>
            <div className="contact__box__tittle-arrow">
              <div className="arrow-head"></div>
            </div>
          </div>
          <div className="contact__box__grid">
            <div className="contact-grid__inner-box">
              <div>
                <svg
                  viewBox="-2.4 -2.4 28.80 28.80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#000000"
                  stroke-width="0.00024000000000000003"
                  transform="rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      fill="#000"
                    ></path>{" "}
                    <path
                      d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                      fill="#000"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                      fill="#000"
                    ></path>{" "}
                  </g>
                </svg>
                <button>
                  <div>Send link</div>
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M7 17L17 7M17 7H8M17 7V16"
                          stroke="#000000"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
              <h3 className="">Instagram</h3>
            </div>

            <div className="contact-grid__inner-box">
              <div>
                <svg
                  viewBox="0 -3 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>youtube [#168]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-300.000000, -7442.000000)"
                        fill="#000000"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                            id="youtube-[#168]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>

                <button>
                  <div>Send link</div>
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M7 17L17 7M17 7H8M17 7V16"
                          stroke="#000000"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
              <h3 className="">Youtube</h3>
            </div>

            <div className="contact-grid__inner-box">
              <div>
                <svg
                  className="twitter-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                >
                  <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
                </svg>
                <button>
                  <div>Send link</div>
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M7 17L17 7M17 7H8M17 7V16"
                          stroke="#000000"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
              <h3 className="">Twitter(X)</h3>
            </div>
          </div>
          <div className="bar-bottom-curve"></div>
          <div
            className="contact__box__sphere"
            onClick={() => setContactActive("name")}
          >
            <svg
              viewBox="0 0 300 300"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                id="SunCatcherStudio"
                fill="none"
                stroke="#ddcccc"
                d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z"
              />
              <text
                font-size="30"
                fill="#000000"
                letter-spacing="3"
                font-family="sans-serif"
                font-weight="bold"
              >
                <textPath
                  xlinkHref="#SunCatcherStudio"
                  side="left"
                  startOffset="20"
                >
                  contact me - contact me - contact me - 
                </textPath>
              </text>
            </svg>
            <div className="pin"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
