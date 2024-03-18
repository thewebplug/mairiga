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
import { deleteTestimonial, getTestimonials } from "../../apis";
import { useState } from "react";  
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

  const Testimonials = () => {
    const auth = useSelector((state) => state.auth);

    const navigate = useNavigate();
    const [testimonials, setTestimonials] = useState([])

    const handleGetPoetry = async () => {
        const response = await getTestimonials(auth?.token);
        setTestimonials(response?.data?.testimonial)
    }


    useEffect(() => {
        handleGetPoetry();
    }, [])

    const handleTestimonialDelete = async (id) => {
      const response = await deleteTestimonial(auth?.token, id);
      if(response?.status === 200) {
        toast.success(response?.data?.message)
        setTestimonials(response?.data?.poetry)
      }else{
        toast.error('Something went wrong please try again')
      }
  }

    
    return (
      <div className="students">
        <Sidebar />
        <div className="main">
          <div className="title">Testimonials</div>
          <Link to="/admin/testimonials/create">
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
          Upload Testimonial
        </button>
        </Link>
          <TableContainer className="student_table">
            <Table>
              <TableHead className="student_table-head">
                <TableRow className="student_table-head">
                  <TableCell className="table_row">S/N</TableCell>
                  <TableCell className="table_row">Name</TableCell>
                  <TableCell className="table_row">Position</TableCell>
                  <TableCell className="table_row">Update</TableCell>
                  <TableCell className="table_row">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="table_body">
                {testimonials?.map((item) => <TableRow>
                  <TableCell className="table_row">1</TableCell>
                  <TableCell className="table_row">{item?.name}</TableCell>
                  <TableCell className="table_row active">{item?.position}</TableCell>
                 <TableCell className="table_row active"><a 
                 onClick={() => navigate(`/admin/testimonials/${item?._id}`)}
                 >Update Testimonial</a></TableCell>
                 <TableCell className="table_row active"><a 
                 onClick={() => handleTestimonialDelete(item?._id)}
                 >Delete Testimonial</a></TableCell>
                </TableRow>)}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  