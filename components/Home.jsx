import { useState, useEffect } from "react";

export const Home = () => {
  const [total, setTotal] = useState(0);
  const [termi, setTermi] = useState(0);
  const [promo, setPromo] = useState(0);

  useEffect(() => {
    showData();
  }, []);

  const showData = async () => {
    const data = await fetch("http://localhost:8080/employee").then((d) =>
      d.json()
    );
    totalD(data);
  };

  function totalD(details) {
    details.map((e, i) => {
      if (e.status == "terminated") {
        setTermi((prev) => prev + 1);
      } else if (e.status === "promoted") {
        setPromo((prev) => prev + 1);
      } else {
        setTotal((prev) => prev + 1);
      }
    });
  }

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp">{total}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated"></span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{promo}</span>
        </div>
        <div>
          Total New: <span className="total_new"></span>
        </div>
      </div>
    </>
  );
};
