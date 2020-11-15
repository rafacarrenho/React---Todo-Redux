import React from "react";

const PageHeader = ({ name, small }) => {
  return (
    <header className="page-header my-4">
      <h2 className="font-weight-bold">
        {name} <small className="h4">{small}</small>
      </h2>
      <hr />
    </header>
  );
};

export default PageHeader;
