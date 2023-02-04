import React from "react";

function Body() {
  return (
    <div className="bg-img position-relative">
      <div className="container text-center position-absolute top-50 start-50 translate-middle">
        <div className="row ">
          <div className="col-lg-6">
            <h1 className="text-light">
              <span className="text-danger">Hot </span>sweet change{" "}
              <span className="text-primary">cold </span>life
            </h1>
          </div>
          <div className="col-lg-6">
            <h1 className="text-warning">Order now!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
