import Image2 from "../assets/IMG_0975.PNG";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

    return (
        <header>
        <img src={Image2} alt="" className="logo" onClick={() => navigate("/")} />
        <nav>
          <div>
            <h2>About</h2>
            <div className="line"></div>
          </div>
          <div>
            <h2>Poetry</h2>
            <div className="line"></div>
          </div>
          <div>
            <h2>Podcast</h2>
            <div className="line"></div>
          </div>
          <div>
            <h2>Charity</h2>
            <div className="line"></div>
          </div>
        </nav>
      </header>
    )
}