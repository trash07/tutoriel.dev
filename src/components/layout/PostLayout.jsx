import * as React from 'react';
import '../../css/post.css';
import Header from '../fragment/Header';
import Footer from '../fragment/Footer';
import { getSiteUrl } from '../utils/url-generator';

export function PostLayout({ title, children }) {
  const { frontmatter } = children.props.pageContext;
  return (
    <>
      <Header />
      <Breadcrumb title={frontmatter.title} />
      <div className="page">
        <article>
          <div className="post-header">
            <div className="post-tags">
              {frontmatter.tags.map((tag, index) => (
                <span className="tag" key={index}>
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="post-title">{title}</h1>
            <div className="post-meta">
              <div className="author">
                <div className="avatar">LK</div>
                <span>{frontmatter.author}</span>
              </div>
              <div className="dot"></div>
              <time dateTime={frontmatter.date}>March 18, 2026</time>
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

function Breadcrumb({ title }) {
  return (
    <div className="breadcrumb-bar">
      <div className="breadcrumb">
        <a href={getSiteUrl()}>Accueil</a>
        <span className="sep">›</span>
        <a href={getSiteUrl()}>Tutoriels</a>
        <span className="sep">›</span>
        <span className="current">{title}</span>
      </div>
    </div>
  );
}
