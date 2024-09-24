import { NextResponse } from 'next/server';
import { getActivities } from '@rss3/sdk';

export async function GET() {
  try {
    const readableFeed = await getActivities({
      account: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    });

    // 返回 JSON 格式的响应
    return NextResponse.json(readableFeed);
  } catch (error) {
    // 如果发生错误，返回 500 状态码
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}