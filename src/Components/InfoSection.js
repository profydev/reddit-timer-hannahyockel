import React from 'react';

export default function InfoSection() {
  return (
    <div>
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
        <a href="https://profy.dev/employers">Click here for more information.</a>
      </p>
    </div>
  );
}
