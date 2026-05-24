import * as React from 'react';
import IndexLayout from '../components/layout/IndexLayout';
import { graphql } from 'gatsby';

const TopicsPage = ({ data }) => {
  const groups = data?.allMdx?.group ?? [];
  return (
    <IndexLayout>
      <div className="hero">
        <div className="hero-label">Tous les sujets</div>
        <h1>Topics</h1>
        <p>Parcourez les sujets abordés sur tutoriel.dev.</p>
      </div>
      <div className="list">
        <div className="topics-grid">
          {groups.map(({ fieldValue, totalCount }) => (
            <div className="topic-card" key={fieldValue}>
              <span className="tag">{fieldValue}</span>
              <span className="topic-count">
                {totalCount} tutoriel{totalCount > 1 ? 's' : ''}
              </span>
            </div>
          ))}
        </div>
      </div>
    </IndexLayout>
  );
};

export const Head = () => <title>Topics - tutoriel.dev</title>;

export const query = graphql`
  query AllTopics {
    allMdx {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TopicsPage;
