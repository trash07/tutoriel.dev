import * as React from 'react';
import '../../css/post.css';
import Header from '../fragment/Header';
import Footer from '../fragment/Footer';

export function PostLayout(props) {
  const { title, children } = props;
  console.log(props);
  return (
    <>
      <Header />
      <Breadcrumb />
      <div className="page">
        <article>
          <div className="post-header">
            <div className="post-tags">
              <span className="tag">Node.js</span>
              <span className="tag">Express</span>
              <span className="tag">REST API</span>
            </div>
            <h1 className="post-title">{title}</h1>
            <div className="post-meta">
              <div className="author">
                <div className="avatar">JD</div>
                <span>Jane Doe</span>
              </div>
              <div className="dot"></div>
              <span>March 18, 2026</span>
              <div className="dot"></div>
              <span>8 min read</span>
            </div>
            <div className="prose">{children}</div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}

function Breadcrumb() {
  return (
    <div className="breadcrumb-bar">
      <div className="breadcrumb">
        <a href="prototype-1-minimal.html">Home</a>
        <span className="sep">›</span>
        <a href="prototype-1-minimal.html">Tutorials</a>
        <span className="sep">›</span>
        <span className="current">
          Building a REST API with Node.js and Express
        </span>
      </div>
    </div>
  );
}
