import { Feed } from 'feed';
import { NextResponse } from 'next/server';

export async function GET() {
  const feed = new Feed({
    title: "每日天气预报s50",
    description: "feedId:61028264807309312+userId:55059127996282880",
    id: "http://example.com/",
    link: "http://example.com/",
    language: "zh-CN",
    updated: new Date(),
    generator: "Next.js App Router Weather Feed",
  });

  feed.addItem({
    title: `今日天气预报`,
    id: new Date().toISOString(),
    link: `http://example.com/weather/${new Date().toISOString()}`,
    description: `今天天气晴朗，温度20°C`,
    date: new Date()
  });

  const xmlFeed = feed.rss2();

  return new NextResponse(xmlFeed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}