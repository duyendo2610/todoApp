import style from "./Login.module.css";
import data from "../../data/user.json";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginAction } from "../../redux/action/login";
import { useNavigate } from "react-router-dom";
import { Flag } from "iconsax-react";
import Loading from "../../component/notify/loading/Loading";

const Login = () => {
  const userData = useSelector((state) => state.LoginReducer);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [eye, setEye] = useState(false);
  const [eyeClose, setEyeClose] = useState(true);
  const [typePasswordInput, setTypePasswordInput] = useState("password");
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();
  

  const getUserName = (e: any) => {
    setUserName(e.target.value);
  };

  const getPassword = (e: any) => {
    setPassword(e.target.value);
  };
  const showPassWord = () => {
    if(eyeClose){
      setEye(true)
      setEyeClose(false)
      setTypePasswordInput("text")
    }
    if(eye){
      setEyeClose(true)
      setEye(false)
      setTypePasswordInput("password")
    }
  };
  const submit = () => {
    if (userName === data.name && password === data.password) {
      dispatch(loginAction(data));
      setShowError(false);
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        navigate("/Main");
      }, 2100);
    } else {
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        setShowError(true);
      }, 1000);
    }
  };

  return (
    <div className={`${style.login_wrap}`}>
      {showLoading && <Loading></Loading>}
      <div className={`${style.login_box} rounded-3`}>
        <p className="fs-2 fw-bold text-center mt-3">Login </p>

        <form className="">
          <label className="fs-sm fw-bold" htmlFor="UserName">
            User name
          </label>
          <input
            onChange={getUserName}
            className={`${style.input} form-control py-2 fs-6 mt-1`}
            type="text"
            name="UserName"
            id="UserName"
            placeholder="👤  user name"
          />
          <label className="fs-sm mt-4 fw-bold" htmlFor="password">
            Password
          </label>
          <div className="position-relative">
            <input
              onChange={getPassword}
              className={`${style.input} form-control py-2 fs-6 mt-1`}
              type={typePasswordInput}
              name="password"
              id="password"
              placeholder="🔒  Enter your Password"
            />
            {eye && (
              <svg
                onClick={showPassWord}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={style.eye}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
            {eyeClose && (
              <svg
                onClick={showPassWord}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={style.eye}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </div>
          <a href="#" className="fs-sm text-infor ">create accout</a>
          {showError && (
            <p className="text-danger mt-2">
              ⚠️ đăng nhập thất bại! thông tin tài khoản mật khẩu không chính
              xác
            </p>
          )}
          <div
            onClick={submit}
            className={`${style.Login_btn} text-center mt-4`}
          >
            Login
          </div>
        </form>

        <p className="text-center mt-5">Or sign Up Using</p>
        <div className="d-flex justify-content-center">
          <img
            width={30}
            style={{ marginLeft: "16px", cursor: "pointer" }}
            src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png"
            alt=""
          />
          <img
            width={30}
            style={{ marginLeft: "16px", cursor: "pointer" }}
            src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
            alt=""
          />
          <img
            width={30}
            style={{ marginLeft: "16px", cursor: "pointer" }}
            src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
