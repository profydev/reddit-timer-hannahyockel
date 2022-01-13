import React from 'react';
import table from '../img/table.png';

export default function Hero() {
  return (
    <div className="Content">
      <h1>No reactions to your Reddit posts?</h1>
      <p>
        Great timing, great results! Find the best time to post on your
        subreddit.
      </p>
      <button type="button">SHOW ME THE BEST TIME</button>
      <p>r/javascript</p>
      <img src={table} alt="Reddit timer example" />
    </div>
  );
}
