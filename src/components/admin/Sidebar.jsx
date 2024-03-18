import React from "react";
// import Logo from "../img/InnovateVillageArtboard-2.png";

import ApprovalIcon from "@mui/icons-material/Approval";
import { useDispatch } from "react-redux";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const pathname = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
    localStorage.removeItem("token");
    navigate("/admin/login");
    window.scrollTo(0, 0);
  };

  return (
    <div className="admin_nav-container">
      <div className="admin_nav-logo_container">
        {/* <img className="admin_nav-logo" src={Logo} alt="logo" /> */}
      </div>

      <div className="admin_nav-container-inner">
        <Link to="/admin/media" className="link">
          <div
            className={
              pathname?.pathname === "/admin/media"
                ? "admin_nav-flex-container admin_nav-active"
                : "admin_nav-flex-container"
            }
          >
            <div
              className={
                pathname?.pathname === "/admin/media"
                  ? "admin_nav-flex admin_nav-flex-active"
                  : "admin_nav-flex"
              }
            >
              <svg 
              className={
                pathname?.pathname === "/admin/media"
                  ? "admin_nav-svg admin_nav-svg-active"
                  : "admin_nav-svg"
              }
              viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4.83164C4 3.24931 5.75049 2.29363 7.08152 3.14928L18.2323 10.3176C19.4569 11.1049 19.4569 12.8951 18.2323 13.6823L7.08152 20.8507C5.75049 21.7063 4 20.7506 4 19.1683V4.83164ZM17.1507 12L6 4.83164V19.1683L17.1507 12Z" fill="#000000"></path> </g></svg>

          

              <div>Media</div>
            </div>
          </div>
        </Link>
        <Link to="/admin/bio" className="link">
          <div
            className={
              pathname?.pathname.includes("bio")
                ? "admin_nav-flex-container admin_nav-active"
                : "admin_nav-flex-container"
            }
          >
            <div
              className={
                pathname?.pathname.includes("bio")
                  ? "admin_nav-flex admin_nav-flex-active"
                  : "admin_nav-flex"
              }
            >
              <svg
               className={
                pathname?.pathname.includes("bio")
                  ? "admin_nav-svg admin_nav-svg-active"
                  : "admin_nav-svg"
              }
              viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Iconly/Curved/Profile"> <g id="Profile"> <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M11.8445 21.6618C8.15273 21.6618 5 21.0873 5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364 14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564 21.6618 11.8445 21.6618Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M11.8372 11.1735C14.26 11.1735 16.2236 9.2099 16.2236 6.78718C16.2236 4.36445 14.26 2.3999 11.8372 2.3999C9.41452 2.3999 7.44998 4.36445 7.44998 6.78718C7.4418 9.20172 9.3918 11.1654 11.8063 11.1735C11.8172 11.1735 11.8272 11.1735 11.8372 11.1735Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g> </g></svg>
            
              <div>Bio</div>
            </div>
          </div>
        </Link>

        <Link to="/admin/poetry" className="link">
          <div
            className={
              pathname?.pathname === "/admin/poetry"
                ? "admin_nav-flex-container admin_nav-active"
                : "admin_nav-flex-container"
            }
          >
            <div
              className={
                pathname?.pathname === "/admin/poetry"
                  ? "admin_nav-flex admin_nav-flex-active"
                  : "admin_nav-flex"
              }
            >
              <svg
                className={
                  pathname?.pathname === "/admin/poetry"
                    ? "admin_nav-svg admin_nav-svg-active"
                    : "admin_nav-svg"
                }
                width="26"
                height="31"
                fill="#1a1a1a"
                viewBox="0 0 32 32"
                id="icon"
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
                  <defs> </defs>{" "}
                  <rect x="13.9999" y="23" width="8" height="2"></rect>{" "}
                  <rect x="9.9999" y="23" width="2" height="2"></rect>{" "}
                  <rect x="13.9999" y="18" width="8" height="2"></rect>{" "}
                  <rect x="9.9999" y="18" width="2" height="2"></rect>{" "}
                  <rect x="13.9999" y="13" width="8" height="2"></rect>{" "}
                  <rect x="9.9999" y="13" width="2" height="2"></rect>{" "}
                  <path
                    d="M25,5H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V7A2,2,0,0,0,25,5ZM12,4h8V8H12ZM25,28H7V7h3v3H22V7h3Z"
                    transform="translate(0 0)"
                  ></path>{" "}
                  <rect
                    id="_Transparent_Rectangle_"
                    data-name="<Transparent Rectangle>"
                    class="cls-1"
                    fill="none"
                    width="32"
                    height="32"
                  ></rect>{" "}
                </g>
              </svg>
              <div>Poetry</div>
            </div>
          </div>
        </Link>
        <Link to="/admin/testimonials" className="link">
          <div
            className={
              pathname?.pathname === "/admin/testimonials"
                ? "admin_nav-flex-container admin_nav-active"
                : "admin_nav-flex-container"
            }
          >
            <div
              className={
                pathname?.pathname === "/admin/testimonials"
                  ? "admin_nav-flex admin_nav-flex-active"
                  : "admin_nav-flex"
              }
            >
              <svg  className={
                  pathname?.pathname === "/admin/testimonials"
                    ? "admin_nav-svg admin_nav-svg-active"
                    : "admin_nav-svg"
                } fill="#000000" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m 1.4358383,12.895149 c -0.38924,-0.1993 -0.43281,-0.3751 -0.41279,-1.665 0.0158,-1.0195 0.0314,-1.1697 0.14735,-1.4205004 0.26312,-0.5694 0.88589,-1.0631 1.46037,-1.1579 l 0.21,-0.035 0.62728,1.0597 c 0.345,0.5829004 0.63415,1.0358004 0.64256,1.0065004 0.008,-0.029 0.0415,-0.3472 0.0736,-0.7065004 0.0525,-0.5882 0.0468,-0.6826 -0.0575,-0.9472 -0.0637,-0.1617 -0.11586,-0.32 -0.11586,-0.3517 0,-0.033 0.26499,-0.058 0.62678,-0.058 l 0.62678,0 -0.12063,0.345 c -0.10456,0.2991 -0.11523,0.4309 -0.0802,0.9905 0.0222,0.3551004 0.0611,0.6584004 0.0864,0.6740004 0.0253,0.016 0.32158,-0.4318 0.65846,-0.9942004 l 0.61252,-1.0226 0.18995,0.04 c 0.58752,0.1229 1.19054,0.5979 1.42811,1.1248 0.12949,0.2872004 0.1425,0.4062004 0.1588,1.4528004 0.0156,0.9994 0.005,1.1659 -0.0896,1.35 -0.21721,0.425 -0.1746,0.4199 -3.4974,0.4199 -2.70948,0 -2.98802,-0.01 -3.17496,-0.1049 z m 2.71495,-4.9624004 c -0.76247,-0.3317 -1.3488,-1.7133 -1.07583,-2.5352 0.48535,-1.4612 2.58633,-1.4612 3.07167,0 0.27559,0.8297 -0.31945,2.2162 -1.08916,2.5378 -0.25463,0.1064 -0.65878,0.1053 -0.90668,0 z m 3.58006,-2.0213 0,-0.6365 -0.34018,-0.028 c -0.27583,-0.023 -0.36661,-0.059 -0.48,-0.1908 -0.13962,-0.1623 -0.13984,-0.1653 -0.13984,-1.9339 l 0,-1.7713 0.17539,-0.1754 0.17539,-0.1753 2.76131,0 2.7613097,0 0.16835,0.1448 0.16835,0.1448 0,1.8101 0,1.8102 -0.19595,0.175 -0.19595,0.1751 -1.7831,0 -1.7830997,0 -0.64599,0.644 -0.64599,0.644 0,-0.6366 z"></path></g></svg>
          
              <div>Testimonials</div>
            </div>
          </div>
        </Link>
        <Link to="/admin/speaking" className="link">
          <div
            className={
              pathname?.pathname === "/admin/speaking"
                ? "admin_nav-flex-container admin_nav-active"
                : "admin_nav-flex-container"
            }
          >
            <div
              className={
                pathname?.pathname === "/admin/speaking"
                  ? "admin_nav-flex admin_nav-flex-active"
                  : "admin_nav-flex"
              }
            >
              <svg className={
                  pathname?.pathname === "/admin/speaking"
                    ? "admin_nav-svg admin_nav-svg-active"
                    : "admin_nav-svg"
                } height="400px" width="400px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path fill="#000" class="st0" d="M364.717,270.937c-2.241-9.343-7.942-29.512-19.625-50.299c-7.892-13.981-18.587-28.35-33.236-39.472 c-14.6-11.114-33.376-18.727-55.745-18.718h-0.082h-0.116h-0.041c-22.352-0.008-41.129,7.604-55.736,18.718 c-21.949,16.725-35.073,40.527-43.106,59.889v0.008c-5.248,12.738-8.255,23.679-9.754,29.874H38.225v51.724l23.316,89.738h34.126 V512h12.218h308.449v-99.601h34.117l23.324-89.738v-51.724H364.717z M184.284,228.91c7.028-12.218,16.272-24.148,28.004-32.857 c11.765-8.717,25.887-14.385,43.708-14.41c18.11,0.024,32.395,5.866,44.276,14.83c17.764,13.396,29.702,34.274,36.944,51.896 c3.625,8.808,6.113,16.774,7.67,22.484c0.569,2.092,1.013,3.888,1.343,5.314H165.755C167.65,268.136,173.137,248.23,184.284,228.91 z M397.137,492.803H114.864V372.276h282.274V492.803z M435.604,393.219h-24.51v-34.908H100.898v34.908H76.396l-16.923-65.137 h393.055L435.604,393.219z M454.579,314.117H57.422v-23.984h397.158V314.117z"></path> <path class="st0" fill="#000" d="M256.004,149.355c41.244,0,74.67-33.434,74.67-74.67c0-41.26-33.425-74.677-74.67-74.686 c-41.252,0.008-74.685,33.425-74.685,74.686C181.318,115.922,214.752,149.355,256.004,149.355z M215.535,34.216 c10.38-10.365,24.634-16.767,40.469-16.767c15.827,0,30.081,6.402,40.462,16.767c10.365,10.372,16.758,24.642,16.758,40.469 c0,15.819-6.393,30.088-16.758,40.453c-10.38,10.366-24.634,16.759-40.462,16.759c-15.834,0-30.088-6.393-40.469-16.759 c-10.373-10.364-16.758-24.634-16.758-40.453C198.776,58.858,205.162,44.589,215.535,34.216z"></path> </g> </g></svg>
              
              <div>Speaking Engagements</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="admin_nav-footer">
            <div className="admin_nav-footer-title">Aishatu Mairiga</div>
            <div
              className="admin_nav-footer-subtitle pointer"
                onClick={handleLogout}
            >
              Log out
            </div>
        {/* <img src={Logo} alt="" /> */}
      </div>
    </div>
  );
};

export default Sidebar;
