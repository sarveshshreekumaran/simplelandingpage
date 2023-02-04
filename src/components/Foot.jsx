import React from "react";

var year = new Date().getFullYear();

function Foot() {
  return (
    <div className="container-fluid bg-primary">
      <footer className="text-center text-white">
        <p>Created-by : Sarvesh</p>
        <p>© {year}</p>
      </footer>
    </div>
  );
}

export default Foot;
