import React from 'react';
import table from './img/table.png';

function App() {
  return (
    <div>
      <div className="Content">
        <h1>No reactions to your Reddit posts?</h1>
        <p>
          Great timing, great results! Find the best time to post on your
          subreddit.
        </p>
        <button type="button">SHOW ME THE BEST TIME</button>
        <p>r/javascript</p>
        <img src={table} alt="Reddit timer example" />
        <h2 id="how-it-works">How it works</h2>
        <ul>
          <li>We find the 500 top posts from the past year for a subreddit.</li>
          <li>
            The data is visualized in a heatmap grouped by weekday and hour of
            the day.
          </li>
          <li>See immediately when to submit your reddit post.</li>
        </ul>
        <h2 id="about">About</h2>
        <p>
          This app was created during a course on
          {' '}
          <a href="https://profy.dev/">profy.dev</a>
          {' '}
          with the goal to implement
          a pixel-perfect real-world application with professional workflows and
          tools like Kanban, Asana, Zeplin, GitHub, pull requests and code
          reviews.
          {' '}
          <a href="https://profy.dev/">Click here for more information.</a>
        </p>
      </div>
    </div>
  );
}

export default App;
