import { Select, MenuItem, Badge } from "@mui/material";
import React, { useEffect, useState } from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRef } from "react";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import {useNavigate, useParams} from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { createPoem, getTestimonial, updateTestimonal, uploadTestimonal } from "../../apis";

const schools = {
  primary: ["Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5"],
  juniorSecondary: ["Jss1", "Jss2", "Jss3"],
  seniorSecondary: ["SS1", "SS2", "SS3"],
};

const TestimonialUpdate = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const pathname = useParams();

 
  const [title, setTitle] = useState("");
  const [position, setPosition] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [testimonialMedia, setTestimonialMedia] = useState(null);
  const [uplaodLoading, setUploadLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const mediaRef = useRef(null);

  useEffect(() => {
    // let dropArea = document.getElementById("drop-area");
    let uploadArea = document.querySelector(".reg_student-area");
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      uploadArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    ["dragenter", "dragover"].forEach((eventName) => {
      uploadArea.addEventListener(eventName, highlight, false);
    });
    ["dragleave", "drop"].forEach((eventName) => {
      uploadArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight(e) {
      uploadArea.classList.add("highlight");
    }

    function unhighlight(e) {
      uploadArea.classList.remove("highlight");
    }

    uploadArea.addEventListener("drop", handleDrop, false);

    function handleDrop(e) {
      fileUploadAndResizeImage(e.dataTransfer.files[0]);
    }
  }, []);
  const fileUploadAndResizeImage = (e) => {
    let file = e;
    if (file) {
      setUploadLoading(true);
      Resizer.imageFileResizer(
        file,
        720,
        720,
        "JPEG",
        100,
        0,
        (uri) => {
          axios
            .post(
              // `${process.env.REACT_APP_DEV_URL}/files/upload`,
              `${process.env.REACT_APP_PROD_URL}/files/upload`,
              {
                image: uri,
              },
              {
                headers: {
                  Authorization: `Bearer ${auth ? auth.token : ""}`,
                },
              }
            )
            .then((response) => {
              setTestimonialMedia(response?.data);
              setUploadLoading(false);
            })
            .catch((error) => {
              setUploadLoading(false);
              console.log("ERROR", error);
              if (error?.response?.data?.message) {
                toast.error(error?.response?.data?.message);
              } else {
                toast.error(error?.response?.statusText);
              }
            });
        },
        "base64"
      );
    }
  };

  const handleImageRemove = () => {
    setUploadLoading(true);
    setTestimonialMedia(null);
    setUploadLoading(false);
  };

  const handleGetTestimonial = async () => {
    const response = await getTestimonial(auth?.token, pathname?.id);
    setTitle(response?.data?.testimonial?.name)
    setPosition(response?.data?.testimonial?.position)
    setTestimonial(response?.data?.testimonial?.testimonial)
    setTestimonialMedia(response?.data?.testimonial?.media)
  }

  useEffect(() => {
    handleGetTestimonial();
  }, [])

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = await updateTestimonal(auth?.token, pathname?.id, title, position, testimonial, testimonialMedia);
    if(response?.status === 200) {
      toast.success(response?.data?.message)
    }else{
      toast.error('Something went wrong please try again')
    }
    setLoading(false);
  };



  return (
    <div className="adminContainer reg">
      <Sidebar />

      <div className="adminContainer__main">
        <svg
          className="adminContainer__main-svg"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          onClick={() => navigate('/admin/media')}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#000000"
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            ></path>
            <path
              fill="#000000"
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            ></path>
          </g>
        </svg>
        <h1>Update Testimonial</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="studentForm__flex">
          <div>
             
            </div>
           
          </div>
          <div className="studentForm__flex">
            <div>
              <label htmlFor="title">Name</label>
              <input
                required
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="position">Position</label>
              <input
                required
                type="text"
                id="position"
                name="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            
          </div>
          <div className="studentForm__flex">
          <div>
              <label htmlFor="poem">Testimonial</label>
              <textarea
                required
                type="text"
                id="testimonial"
                name="testimonial"
                value={testimonial}
                onChange={(e) => setTestimonial(e.target.value)}
              />
            </div>
          </div>
        

          <div className="reg-student-upload-label">Testimonial Image</div>

          <div className="uploadedImages">
            {!!testimonialMedia && (
              <Badge
                overlap="circular"
                onClick={() => handleImageRemove()}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                badgeContent={
                  <CancelSharpIcon
                    color="error"
                    sx={{ cursor: "pointer", fontSize: 35 }}
                  />
                }
              >
                <img className="uploadedImages__image" src={testimonialMedia?.url} />

              </Badge>
            )}
          </div>
          <label className="dropAreaContainer">
            <input
              type="file"
              multiple
              accept="image/*"
              hidden
              onChange={(e) => fileUploadAndResizeImage(e?.target?.files[0])}
              ref={mediaRef}
            />
            <div id="drop-area">
              <div className="reg_student-area">
                {uplaodLoading ? (
                  <div>Loading...</div>
                ) : (
                  <div>
                    <div>Choose an image</div>
                    <div>or drag it here</div>
                  </div>
                )}
              </div>
            </div>
          </label>
          <button className="largeButton" type="submit" disabled={loading || uplaodLoading}>
            {loading ? "Loading..." : "Update Testimonial"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestimonialUpdate;
