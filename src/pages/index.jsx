import * as React from 'react';
import IndexLayout from '../components/layout/IndexLayout';

const IndexPage = () => {
  return (
    <IndexLayout>
      <div className="hero">
        <div className="hero-label">Learn by doing</div>
        <h1>
          Dev tutorials,
          <br />
          straight to the point.
        </h1>
        <p>
          Practical guides on web development, tools, and best practices —
          written for developers who value their time.
        </p>
      </div>

      <div className="list">
        <div className="tutorial-item">
          <h2>
            <a>Building a REST API with Node.js and Express</a>
          </h2>
          <div className="meta">Published at March 18, 2026</div>
          <div className="tags">
            <span className="tag">Node.js</span>
            <span className="tag">Express</span>
            <span className="tag">REST API</span>
          </div>
        </div>

        <div className="tutorial-item">
          <h2>
            <a>Getting started with TypeScript generics</a>
          </h2>
          <div className="meta">Published at March 10, 2026</div>
          <div className="tags">
            <span className="tag">TypeScript</span>
            <span className="tag">JavaScript</span>
          </div>
        </div>

        <div className="tutorial-item">
          <h2>
            <a>Docker for front-end developers</a>
          </h2>
          <div className="meta">Published at February 28, 2026</div>
          <div className="tags">
            <span className="tag">Docker</span>
          </div>
        </div>
      </div>
    </IndexLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
