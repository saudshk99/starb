import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { AddUser } from "../../postRequest";
import { useEffect, useState } from "react";

const New = ({ inputs, title }) => {
  const [user, setUser] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const clearForm = () => {
    setUser({
      Username: "",
      Email: "",
      Password: "",
    });
  };
  const {
    mutate: CreateUser,
    isLoading,
    data,
    isError,
    isSuccess,
    error,
  } = AddUser();
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Username", user.Username);
    formData.append("Email", user.Email);
    formData.append("Password", user.Password);

    CreateUser(formData);

    clearForm();
  }

  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="right">
              <form type="POST" onSubmit={handleSubmit}>
                <div className="formInput">
                  <label>Username</label>
                  <input
                    type="text"
                    id="username"
                    onChange={(e) =>
                      setUser({ ...user, Username: e.target.value })
                    }
                    value={user.Username}
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="formInput">
                  <label>Email</label>
                  <input
                    type="email"
                    id="email"
                    onChange={(e) =>
                      setUser({ ...user, Email: e.target.value })
                    }
                    value={user.Email}
                    placeholder="Email"
                  />
                </div>

                <div className="formInput">
                  <label>Password</label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) =>
                      setUser({ ...user, Password: e.target.value })
                    }
                    value={user.Password}
                    placeholder="Password"
                    required
                  />
                </div>
                {isLoading && <span>loading... please Wait</span>}
                {isError && (
                  <span style={{ color: "red" }}>{error.message}</span>
                )}

                {isSuccess && (
                  <span style={{ color: "Green" }}>
                    <b>{data.data} </b>
                  </span>
                )}

                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
