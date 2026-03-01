import * as React from 'react';
import { PostLayout } from '../../components/PostLayout';

const PostPage = ({ pageContext, children }) => {
  const { frontmatter } = pageContext;
  return <PostLayout title={frontmatter.title}>{children}</PostLayout>;
};

export default PostPage;

export const Head = ({ pageContext }) => {
  const { frontmatter } = pageContext;
  return <title>{frontmatter.title}</title>;
};
