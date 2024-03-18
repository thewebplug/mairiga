import logo from "./logo.svg";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Poetry from "./pages/Poetry";
import { useEffect } from "react";
import { initScroll } from "./components/ScrollManager";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import LocomotiveScroll from "locomotive-scroll";
import PoetryStories from "./pages/PoetryStories";
import Media from "./pages/admin/Media";
import UpdateMediaImage from "./pages/admin/UpdateMediaImage";
import UpdateMediaVideo from "./pages/admin/UpdateMediaVideo";
import Bio from "./pages/admin/Bio";
import PoetryList from "./pages/admin/PoetryList";
import PoemUpdate from "./pages/admin/PoemUpdate";
import PoemCreate from "./pages/admin/PoemCreate";
import Testimonials from "./pages/admin/Testimonials";
import TestimonialCreate from "./pages/admin/TestimonialCreate";
import TestimonialUpdate from "./pages/admin/TestimonialUpdate";
import SpeakingEngagements from "./pages/admin/SpeakingEngagements";
import SpeakingCreate from "./pages/admin/SpeakingCreate";
import SpeakingUpdate from "./pages/admin/SpeakingUpdate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/admin/Login";
import { useSelector } from "react-redux";



function App() {
  const pathname = useLocation();
  const auth = useSelector((state) => state.auth);
  const scrollRef = useRef(null);


  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.06,
      tablet: {
        breakpoint: 768,
      },
    });

    if (scroll) {
      scrollRef.current = scroll;
    } else {
      console.error('LocomotiveScroll instance could not be initialized.');
    }

    return () => {
      scroll.destroy(); // Clean up on unmount
    };
  }, [pathname]);

  useEffect(() => {
    let innerCursor = document.querySelector(".inner-cursor");
    // let outerCursor = document.querySelector(".outer-cursor")
    innerCursor.classList.remove("grow");

    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
      let x = e.clientX;
      let y = e.clientY;

      innerCursor.style.left = `${x}px`;
      innerCursor.style.top = `${y}px`;
      // outerCursor.style.left = `${x}px`;
      // outerCursor.style.top = `${y}px`;
    }

    let links = Array.from(document.querySelectorAll("a"));

    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
      });
      link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
      });
    });
  }, [pathname]);

  return (
    // <LocomotiveScrollProvider options={options} containerRef={ref}>
    <div data-scroll-container>
      <Routes>
        <Route path="/" element={<Home scroll={scrollRef.current} />} />
        <Route path="/home/:element" element={<Home scroll={scrollRef.current} />} />
        <Route path="/poetry/:id" element={<Poetry />} />
        <Route path="/poetry" element={<PoetryStories />} />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/media"
          element={
            auth.token && auth?.userInfo?.role === "admin" ? (
              <Media />
            ) : (
              <Navigate to="/admin/login" />
            )
          }
        />
        <Route
          path="/admin/update-media/image/:id"
          element={
            auth.token && auth?.userInfo?.role === "admin" ? (
              <UpdateMediaImage />
            ) : (
              <Navigate to="/admin/login" />
            )
          }
        />
        <Route
          path="/admin/update-media/video/:id"
          element={
            auth.token && auth?.userInfo?.role === "admin" ? (
              <UpdateMediaVideo />
            ) : (
              <Navigate to="/admin/login" />
            )
          }
        />
        <Route path="/admin/bio" 
        element={
          auth.token && auth?.userInfo?.role === "admin" ? (
            <Bio />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
         />
        <Route path="/admin/poetry"
         element={
          auth.token && auth?.userInfo?.role === "admin" ? (
            <PoetryList />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
         />
        <Route path="/admin/poem/:id" 
        element={
          auth.token && auth?.userInfo?.role === "admin" ? (
            <PoemUpdate />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
         />
        <Route path="/admin/poetry/create" 
        element={
          auth.token && auth?.userInfo?.role === "admin" ? (
            <PoemCreate />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
        />
        <Route path="/admin/testimonials" 
        element={
          auth.token && auth?.userInfo?.role === "admin" ? (
            <Testimonials />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
         />
        <Route
          path="/admin/testimonials/create"
          element={
            auth.token && auth?.userInfo?.role === "admin" ? (
              <TestimonialCreate />
            ) : (
              <Navigate to="/admin/login" />
            )
          }
        />
        <Route path="/admin/testimonials/:id"
        
        element={
          auth.token && auth?.userInfo?.role === "admin" ? (
            <TestimonialUpdate />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
        />
        <Route path="/admin/speaking"
        
        element={
          auth.token && auth?.userInfo?.role === "admin" ? (
            <SpeakingEngagements />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
        
        />
        <Route path="/admin/speaking/create" 

        element={
          auth.token && auth?.userInfo?.role === "admin" ? (
            <SpeakingCreate />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
         />
        <Route path="/admin/speaking/:id"
         element={
          auth.token && auth?.userInfo?.role === "admin" ? (
            <SpeakingUpdate />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
         />
      </Routes>
      <ToastContainer position="bottom-right" />

      <div className="inner-cursor"></div>
      {/* <div className="outer-cursor"></div> */}
    </div>
    // </LocomotiveScrollProvider>
  );
}

export default App;
