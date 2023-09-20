import { useNavigate } from "react-router-dom";
import ListDone from "../../component/ListDone/ListDone";
import ListJob from "../../component/ListJob/ListJob";
import Task from "../../component/Task/Task";
import Timer from "../../component/Timer/Timer";
import { useState } from "react";
import Loading from "../../component/notify/loading/Loading";

const MainWeb = () => {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const logOut = ()=>{
    setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        navigate("/");
      }, 1000);
    
  }
  return (
    <div id="web" className="pb-5">
      {showLoading && <Loading></Loading>}
      <div className={`container align-items-center pt-4 `}>
        <div className="d-flex position-relative  user-heading">
          <img
            width={30}
            className="avatar"
            src="https://img6.thuthuatphanmem.vn/uploads/2022/11/18/anh-avatar-don-gian-ma-dep_081757969.jpg"
            alt=""
          />
          <div className="name-user">
            <p className="ms-2 mt-1 name">duyendv</p>
            <ul className="user">
              <li>My Accout</li>
              <li onClick={logOut}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="logout-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg> Logout
              </li>
            </ul>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-5 text-center" style={{ marginTop: "-30px" }}>
            <Timer></Timer>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-5 ">
              <ListJob></ListJob>
            </div>
            <div className="col-5 text-center ">
              <Task></Task>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row align-items-center justify-content-center">
            <div className="col-5 text-center"></div>
            <div className="col-5  text-center">
              <ListDone></ListDone>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-5">
        Made with ❤️ by <span className="text-success infor">@duyendv</span> ©
        2023
      </p>
    </div>
  );
};

export default MainWeb;
