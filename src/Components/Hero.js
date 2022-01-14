import React from 'react';
import { Link } from 'react-router-dom';
import table from '../img/table.png';
import './Hero.css';

export default function Hero() {
  return (
    <div className="Hero">
      <h1>No reactions to your Reddit posts?</h1>
      <p>
        Great timing, great results! Find the best time to post on your
        subreddit.
      </p>
      <Link to="/search/javascript">
        <button type="button">SHOW ME THE BEST TIME</button>
      </Link>
      <Link to="/search/javascript">
        <span>r/javascript</span>
      </Link>
      <img src={table} alt="Reddit timer example" />
    </div>
  );
}
