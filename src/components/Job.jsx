import React from "react";
import "./Jobs.css";
import Table from "./Table";
import { Users } from "../users";
import { useState } from "react";

function Job() {
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter(
      (item) =>
        item.job_name.toLowerCase().includes(query) ||
        item.job_description.toLowerCase().includes(query)
    );
  };

  return (
    <div>
      <div className="row mx-md-n8">
        <div className="col px-md-20">
          <div className="p-5 border text-light bg-dark h2">Jobs</div>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search Your Job Like - junior web dev/senior web dev etc"
        className="search1"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <input type="text" placeholder="Job Level" className="search2"/> */}

      <Table data={search(Users)} />
    </div>
  );
}

export default Job;
