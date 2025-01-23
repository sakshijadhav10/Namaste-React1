/* eslint-disable react/jsx-key */
// import React from 'react'

import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobsData = useLoaderData();
  return (
    <div>
      {jobsData.map((job) => {
        // eslint-disable-next-line react/jsx-key
        return (
          <Link>
            <h3>{job.title}</h3>
            <h3>{job.location}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default Jobs;

export const jobsLoader = async () => {
  const res = await fetch("http://localhost:8000/jobs");
  return res.json();
};
