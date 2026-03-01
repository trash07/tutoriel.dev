import * as React from 'react';

export function PostOgpSeo({ frontmatter }) {
  return (
    <>
      <meta property="og:title" content={frontmatter.title} />
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={frontmatter.date} />
      <meta property="article:author" content={frontmatter.author} />
      <meta
        property="og:image"
        content="https://html.sammy-codes.com/images/large-profile.jpg"
      />
      <meta property="og:description" content="A one sentence description" />
    </>
  );
}

export function PostTwitterSeo({ frontmatter }) {
  return (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lkpeto" />
      <meta name="twitter:title" content={frontmatter.title} />
      <meta
        name="twitter:description"
        content="Senior Selachimorpha at DigitalOcean"
      />
      <meta
        name="twitter:image"
        content="https://html.sammy-codes.com/images/large-profile.jpg"
      />
    </>
  );
}

export function PostSeo({ frontmatter }) {
  return (
    <>
      <PostOgpSeo frontmatter={frontmatter} />
      <PostTwitterSeo frontmatter={frontmatter} />
    </>
  );
}
