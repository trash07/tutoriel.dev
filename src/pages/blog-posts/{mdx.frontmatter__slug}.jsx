import * as React from 'react';
import { PostLayout } from '../../components/layout/PostLayout';
import { PostSeo } from '../../components/seo/PostSeo';

export function Head({ pageContext }) {
  const { frontmatter } = pageContext;
  return (
    <>
      <title>{frontmatter.title}</title>
      <PostSeo frontmatter={frontmatter} />
    </>
  );
}

export default function PostPage({ pageContext, children }) {
  const { frontmatter } = pageContext;
  return <PostLayout title={frontmatter.title}>{children}</PostLayout>;
}
