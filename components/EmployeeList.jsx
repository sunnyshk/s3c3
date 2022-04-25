import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const EmployeeList = () => {
  const [emplo, setEmpl] = useState([]);
  useEffect(() => {
    showData();
  }, []);
  const showData = async () => {
    const data = await fetch("http://localhost:8080/employee").then((d) =>
      d.json()
    );
    setEmpl(data);
  };
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {emplo.map((itm) => (
        <Link to={`/employees/${itm.id}`}>
          {/* <p key={itm.id}></p> */}
          <div className="employee_card">
            <img src={itm.image} className="employee_image" />
            <span className="employee_name">{itm.employee_name}</span>
            <span className="employee_title">{itm.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
