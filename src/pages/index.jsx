import * as React from 'react';
import IndexLayout from '../components/layout/IndexLayout';
import { graphql, Link } from 'gatsby';
import { generateBlogPostUrl } from '../components/utils/url-generator';

const IndexPage = ({ data }) => {
  const posts = data?.allMdx?.nodes;
  return (
    <IndexLayout>
      <div className="hero">
        <div className="hero-label">Share understanding</div>
        <h1>
          Cibler la
          <br />
          compréhension de sujets
        </h1>
        <p>
          Jardin digital en construction pour partager des idees et reflexions
          techniques. — Je publie de temps en temps quand libre. Contactez-moi
          pour poster et animer ce site communautaire pour tous.
        </p>
      </div>

      <div className="list">
        {posts.map((post, index) => (
          <PostDetails key={index} pos={post} />
        ))}
      </div>
    </IndexLayout>
  );
};

function PostDetails(post) {
  const { frontmatter } = post.pos;

  return (
    <div className="tutorial-item">
      <h2>
        <Link to={generateBlogPostUrl(frontmatter.slug)}>
          {frontmatter.title}
        </Link>
      </h2>
      <div className="meta">Publié le {frontmatter.dateFormatted}</div>
      <div className="tags">
        {frontmatter.tags.map((tag, index) => (
          <span className="tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export const Head = () => <title>Bienvenue - tutoriel.dev</title>;

export const query = graphql`
  query LatestPosts($limit: Int = 10) {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: $limit) {
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

export default IndexPage;
