'use client';

const disqusShortname = 'kelvzhan';

import { DiscussionEmbed } from 'disqus-react';

export default function Disqus({
  url,
  slug,
  title,
}: {
  url: string;
  slug: string;
  title: string;
}) {
  const disqusConfig = {
    url: `https://iamkelv.in/blog/${slug}`,
    identifier: slug,
    title: title,
  };

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
}
