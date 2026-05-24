import * as React from 'react';
import IndexLayout from '../components/layout/IndexLayout';
import { graphql, Link } from 'gatsby';
import { generateBlogPostUrl } from '../components/utils/url-generator';

const TutorialsPage = ({ data }) => {
  const posts = data?.allMdx?.nodes;
  return (
    <IndexLayout>
      <div className="hero">
        <div className="hero-label">Tous les tutoriels</div>
        <h1>Tutoriels</h1>
        <p>Retrouvez l'ensemble des tutoriels publiés sur tutoriel.dev.</p>
      </div>
      <div className="list">
        {posts.map((post, index) => (
          <div className="tutorial-item" key={index}>
            <h2>
              <Link to={generateBlogPostUrl(post.frontmatter.slug)}>
                {post.frontmatter.title}
              </Link>
            </h2>
            <div className="meta">Publié le {post.frontmatter.dateFormatted}</div>
            <div className="tags">
              {post.frontmatter.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </IndexLayout>
  );
};

export const Head = () => <title>Tutoriels - tutoriel.dev</title>;

export const query = graphql`
  query AllTutorials {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date
          dateFormatted: date(formatString: "D MMMM, YYYY", locale: "fr")
          tags
          slug
        }
      }
    }
  }
`;

export default TutorialsPage;
