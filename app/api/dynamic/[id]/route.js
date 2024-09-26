import { Feed } from 'feed';
import { NextResponse } from 'next/server';

// 创建一个配置对象，包含所有路由的特定信息
const routeConfig = {
  s72: {
    title: "每日天气预报s72",
    description: "feedId:61804665727140864+userId:61804520898494464",
  },
  s73: {
    title: "每日天气预报s73",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s74: {
    title: "每日天气预报s74",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s75: {
    title: "每日天气预报s75",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s76: {
    title: "每日天气预报s76",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s77: {
    title: "每日天气预报s77",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s78: {
    title: "每日天气预报s78",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s79: {
    title: "每日天气预报s79",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s80: {
    title: "每日天气预报s80",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s81: {
    title: "每日天气预报s81",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s82: {
    title: "每日天气预报s82",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s83: {
    title: "每日天气预报s83",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s84: {
    title: "每日天气预报s84",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s85: {
    title: "每日天气预报s85",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s86: {
    title: "每日天气预报s86",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s87: {
    title: "每日天气预报s87",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s88: {
    title: "每日天气预报s88",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s89: {
    title: "每日天气预报s89",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s90: {
    title: "每日天气预报s90",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s91: {
    title: "每日天气预报s91",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s92: {
    title: "每日天气预报s92",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s93: {
    title: "每日天气预报s93",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s94: {
    title: "每日天气预报s94",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s95: {
    title: "每日天气预报s95",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s96: {
    title: "每日天气预报s96",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s97: {
    title: "每日天气预报s97",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s98: {
    title: "每日天气预报s98",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s99: {
    title: "每日天气预报s99",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s100: {
    title: "每日天气预报s100",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s101: {
    title: "每日天气预报s101",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s102: {
    title: "每日天气预报s102",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s103: {
    title: "每日天气预报s103",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s104: {
    title: "每日天气预报s104",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s105: {
    title: "每日天气预报s105",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s106: {
    title: "每日天气预报s106",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s107: {
    title: "每日天气预报s107",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s108: {
    title: "每日天气预报s108",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s109: {
    title: "每日天气预报s109",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s110: {
    title: "每日天气预报s110",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s111: {
    title: "每日天气预报s111",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s112: {
    title: "每日天气预报s112",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s113: {
    title: "每日天气预报s113",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s114: {
    title: "每日天气预报s114",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s115: {
    title: "每日天气预报s115",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s116: {
    title: "每日天气预报s116",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s117: {
    title: "每日天气预报s117",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s118: {
    title: "每日天气预报s118",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s119: {
    title: "每日天气预报s119",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s120: {
    title: "每日天气预报s120",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s121: {
    title: "每日天气预报s121",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s122: {
    title: "每日天气预报s122",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s123: {
    title: "每日天气预报s123",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s124: {
    title: "每日天气预报s124",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s125: {
    title: "每日天气预报s125",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s126: { 
    title: "每日天气预报s126",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s127: {
    title: "每日天气预报s127",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s128: {
    title: "每日天气预报s128",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s129: {
    title: "每日天气预报s129",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s130: {
    title: "每日天气预报s130",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s131: {
    title: "每日天气预报s131",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s132: {
    title: "每日天气预报s132",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s133: {
    title: "每日天气预报s133",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s134: {
    title: "每日天气预报s134",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s135: {
    title: "每日天气预报s135",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s136: {
    title: "每日天气预报s136",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s137: {
    title: "每日天气预报s137",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s138: {
    title: "每日天气预报s138",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s139: {
    title: "每日天气预报s139",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s140: {
    title: "每日天气预报s140",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s141: {
    title: "每日天气预报s141",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s142: {
    title: "每日天气预报s142",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s143: {
    title: "每日天气预报s143",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s144: {
    title: "每日天气预报s144",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s145: {
    title: "每日天气预报s145",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s146: {
    title: "每日天气预报s146",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s147: {
    title: "每日天气预报s147",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s148: {
    title: "每日天气预报s148",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s149: {
    title: "每日天气预报s149",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
  s150: {
    title: "每日天气预报s150",
    description: "feedId:61791876405559296+userId:61791741840908288",
  },
    
};

export async function GET(request, { params }) {
  const id = params.id;
  const config = routeConfig[id];

  if (!config) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const feed = new Feed({
    title: config.title,
    description: config.description,
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