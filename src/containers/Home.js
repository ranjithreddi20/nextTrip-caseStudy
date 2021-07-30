import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <Link to={'/nexttrip'} className="findByRoute">FIND BY ROUTE {'->'}</Link>
    </div>
  );
}

export default Home;
