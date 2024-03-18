import { useState } from "react";
import LoginIllustration from "../../assets/DSC08861.jpg";
import Logo from "../../assets/IMG_0975.PNG";
import { Input,
    Box,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { login } from "../../apis";
import { useDispatch, useSelector } from "react-redux";



const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setuserName] = useState('')
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = await login(username, password);

    if(response?.status === 200) {
      localStorage.setItem("token", response.data.token);

        dispatch({
            type: "USER_LOGIN_SUCCESS",
            payload: {
              token: response.data.token,
            },
          });
          navigate('/admin/media')
    }else {
        toast.error('Incorrect email or password')
    }
    setLoading(false);
  }
  return (
    <div className="login">
      <div className="login__card">
        <div className="login__card-background">
          <img src={LoginIllustration} alt="" />
        </div>
        <div className="login__card-container">
          <form className="container-login" onSubmit={handleSubmit}>
            <img src="" alt="" className="logo" />

            <Input
              id="standard-adornment-password"
              className="container-login__input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setuserName(e.target.value)}
              required
            />
               <Input
              className="container-login__input"
              required
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />

            <button className="container-login__filled" type="submit">{loading ? "Loading..." : "Login"}</button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
