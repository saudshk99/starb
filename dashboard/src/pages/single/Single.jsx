import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useQuery } from "react-query";
import axios, { Axios } from "axios";
import { useState } from "react";
// import { Retryer } from "react-query/types/core/retryer";

const Single = () => {
  const [img, setImg] = useState();
  // Geting id value from URL
  let queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");

  const { data, isLoading, isError, error, isSuccess } = useQuery(
    "GetUser",
    () => {
      return axios.get(`http://127.0.0.1:8000/api/users/?id=${id}`);
    }
  );
  if (isSuccess) {
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
              <div className="details">
              <div className="detailItem">
                  <span className="itemKey">Name:</span>
                  <span className="itemValue"> {data?.data.username}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data?.data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Password:</span>
                  <span className="itemValue"> {data?.data.password} </span>
                </div>
                <div className="editButton">Edit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Single;
