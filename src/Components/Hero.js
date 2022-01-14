import React from 'react';
import { Link } from 'react-router-dom';
import table from '../img/table.png';

export default function Hero() {
  return (
    <header>
      <h1>No reactions to your Reddit posts?</h1>
      <p>
        Great timing, great results! Find the best time to post on your
        subreddit.
      </p>
      <Link to="/search/javascript">
        <button type="button">SHOW ME THE BEST TIME</button>
      </Link>
      <Link to="/search/javascript">
        <p>r/javascript</p>
      </Link>
      <img src={table} alt="Reddit timer example" />
    </header>
  );
}
