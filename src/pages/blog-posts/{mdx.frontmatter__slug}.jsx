import * as React from 'react';
import { PostLayout } from '../../components/PostLayout';

export const Head = ({ pageContext }) => {
  const { frontmatter } = pageContext;
  return <title>{frontmatter.title}</title>;
};

export default function PostPage({ pageContext, children }) {
  const { frontmatter } = pageContext;
  return <PostLayout title={frontmatter.title}>{children}</PostLayout>;
}
