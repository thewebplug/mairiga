import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
  } from "@mui/material";
  import { Link } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { useEffect } from "react";
import { getAllMedia } from "../../apis";
import { useState } from "react";  
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

  const Media = () => {
    const navigate = useNavigate();
    const [media, setMedia] = useState([]);
    const auth = useSelector((state) => state.auth);

    const handleGetAllMedia = async () => {
        const response = await getAllMedia();
        setMedia(response?.data?.media)
    }

    useEffect(() => {
        handleGetAllMedia();
    }, [])

    const handleMediaNavigate = (item) => {
        if(item?.mediaUrl?.url?.includes('image')) {
            navigate(`/admin/update-media/image/${item?._id}`)
        }else if(item?.mediaUrl?.url?.includes('video')) {
            navigate(`/admin/update-media/video/${item?._id}`)
        }else{
            alert('Invalid media type')
        }
    }
    return (
      <div className="students">
        <Sidebar />
        <div className="main">
          <div className="title">Media</div>
          {/* <div className="subtitle">
            {" "}
            <span>Total Students</span>: 2000
          </div>
          <div className="subtitle">
            <span>Session</span>: 2022/2023
          </div> */}
          {/* <Link to="/admin/update-media">
          <button className="register">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
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
                  d="M6 12H18M12 6V18"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            Update Media
          </button>
          </Link> */}
          <TableContainer className="student_table">
            <Table>
              <TableHead className="student_table-head">
                <TableRow className="student_table-head">
                  <TableCell className="table_row">S/N</TableCell>
                  <TableCell className="table_row">Category</TableCell>
                  <TableCell className="table_row">Media title</TableCell>
                  <TableCell className="table_row">H</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="table_body">
                {media?.map((item) => <TableRow>
                  <TableCell className="table_row">1</TableCell>
                  <TableCell className="table_row">{item?.type}</TableCell>
                  <TableCell className="table_row active">{item?.mediaType}</TableCell>
                 <TableCell className="table_row active"><a onClick={() => handleMediaNavigate(item)}>Update media</a></TableCell>
                </TableRow>)}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  };
  
  export default Media;
  