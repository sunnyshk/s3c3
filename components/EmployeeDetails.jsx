import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export const EmployeeDetails = () => {
  const { id } = useParams();
  const [sUser, setSUser] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8080/employee/${id}`).then(({ data }) => {
      setSUser(data);
      // console.log(data);
    });
  }, []);
  return (
    <div className="user_details">
      <img src={sUser.image} className="user_image" />
      <h4 className="user_name">{sUser.username}</h4>
      <span className="user_salary">${sUser.salary}</span>
      <span className="tasks">
        <li className="task">{sUser.team}</li>
      </span>
      Status: <b className="status">{sUser.status}</b>
      Title: <b className="title">{sUser.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
