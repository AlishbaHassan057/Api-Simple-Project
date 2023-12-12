import React from "react";

const SinglePerson = ({ id, avatar_url, login, type, organizations_url }) => {
  return (
    <>
      <div className="col-md-2">
        <div className="card text-capitalize p-3 my-1 mt-5 rounded-0">
          <h3>{id}</h3>
          <img src={avatar_url} />
          <h4>Name: {login}</h4>
          <h5>Type: {type}</h5>
          <a href="">{organizations_url}</a>
        </div>
      </div>
    </>
  );
};

export default SinglePerson;
