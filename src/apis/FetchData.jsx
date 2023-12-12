import React, { useEffect, useState } from "react";
import SinglePerson from "./SinglePerson";

const FetchData = () => {
  const api = "https://api.github.com/users";
  const [people, setPeople] = useState([]);
  const fetchData = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setPeople(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="display-4 text-center fw-bold mt-2">API Data</h1>
        <div className="row">
          {people.map((person) => {
            return (
              <>
                <SinglePerson {...person} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchData;
