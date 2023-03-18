import React from "react";

function Process() {
  return (
    <div className="process">
      <h1>Apply Process</h1>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img src="/img/job1 (2).png" alt="" />
            <p>Upload Your Details</p>
          </div>
          <div className="col-sm">
            <img src="/img/job1 (1).png" alt="" />
            <p>Schedule Interview</p>
          </div>
          <div className="col-sm">
            <img src="/img/job1 (3).png" alt="" />
            <p>Got Your Job</p>
          </div>
        </div>
      </div>

      {/* <div className="row">
            <h1>Apply Process</h1>
          <div className="column" >
                <img src="/img/job1 (2).png" alt="" />
                <p>Upload Your Resume</p>
            </div>
            <div className="column" >
                <img src="/img/job1 (1).png" alt="" />
                <p>Schedule Interview</p>
            </div>
            <div className="column" >
                <img src="/img/job1 (3).png" alt="" />
                <p>Got You Job</p>
            </div>
        </div> */}
    </div>
  );
}

export default Process;
