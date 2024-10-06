import { Feed } from 'feed';
import { NextResponse } from 'next/server';

// 创建一个配置对象，包含所有路由的特定信息
const routeConfig = {
  s72: {
    title: "每日天气预报s72",
    description: "feedId:62119258475656192+userId:62118866068020224",
  },
  s73: {
    title: "每日天气预报s73",
    description: "feedId:62120717702241280+userId:62120580196480000",
  },
  s74: {
    title: "每日天气预报s74",
    description: "feedId:62121528620588032+userId:62134013343236096",
  },
  s75: {
    title: "每日天气预报s75",
    description: "feedId:62135361574090752+userId:62135155742816256",
  },
  s76: {
    title: "每日天气预报s76",
    description: "feedId:65600845559572480+userId:63409825201652736",
  },
  s77: {
    title: "每日天气预报s77",
    description: "feedId:65601253174618112+userId:63411522435154944",
  },
  s78: {
    title: "每日天气预报s78",
    description: "feedId:65601411497191424+userId:63412814502257664",
  },
  s79: {
    title: "每日天气预报s79",
    description: "feedId:65601623832643584+userId:63414607974892544",
  },
  s80: {
    title: "每日天气预报s80",
    description: "feedId:65601812543956992+userId:63416085750468608",
  },
  s81: {
    title: "每日天气预报s81",
    description: "feedId:65602007646201856+userId:63417368347660288",
  },
  s82: {
    title: "每日天气预报s82",
    description: "feedId:65602204140775424+userId:63420138541376512",
  },
  s83: {
    title: "每日天气预报s83",
    description: "feedId:65602367303097344+userId:63541979719626752",
  },
  s84: {
    title: "每日天气预报s84",
    description: "feedId:65602569157179392+userId:63543355886522368",
  },
  s85: {
    title: "每日天气预报s85",
    description: "feedId:65602764285880320+userId:63544889821151232",
  },
  s86: {
    title: "每日天气预报s86",
    description: "feedId:65603020528196608+userId:63546637676274688",
  },
  s87: {
    title: "每日天气预报s87",
    description: "feedId:65603173455722496+userId:63548013927514112",
  },
  s88: {
    title: "每日天气预报s88",
    description: "feedId:65603340516141056+userId:65425018108897280",
  },
  s89: {
    title: "每日天气预报s89",
    description: "feedId:65603615029143552+userId:65426593633217536",
  },
  s90: {
    title: "每日天气预报s90",
    description: "feedId:65603805505251328+userId:65428293902084096",
  },
  s91: {
    title: "每日天气预报s91",
    description: "feedId:65603975978603520+userId:65429244255575040",
  },
  s92: {
    title: "每日天气预报s92",
    description: "feedId:65604151912340480+userId:65430939363043328",
  },
  s93: {
    title: "每日天气预报s93",
    description: "feedId:65604345542862848+userId:65578077482530816",
  },
  s94: {
    title: "每日天气预报s94",
    description: "feedId:65604524584937472+userId:65578941272680448",
  },
  s95: {
    title: "每日天气预报s95",
    description: "feedId:65604697180249088+userId:65580137059703808",
  },
  s96: {
    title: "每日天气预报s96",
    description: "feedId:65604853229807616+userId:65581161586223104",
  },
  s97: {
    title: "每日天气预报s97",
    description: "feedId:65605014110545920+userId:65582157272882176",
  },
  s98: {
    title: "每日天气预报s98",
    description: "feedId:65605177604696064+userId:65584783241419776",
  },
  s99: {
    title: "每日天气预报s99",
    description: "feedId:65605387705772032+userId:65585855958874112",
  },
  s100: {
    title: "每日天气预报s100",
    description: "feedId:65605547693364224+userId:65586821538369536",
  },
  s101: {
    title: "每日天气预报s101",
    description: "feedId:65605712344423424+userId:65587718797400064",
  },
  s102: {
    title: "每日天气预报s102",
    description: "feedId:65605896126539776+userId:65588663732267008",
  },
  s103: {
    title: "每日天气预报s103",
    description: "feedId:65606117690828800+userId:65589903552673792",
  },
  s104: {
    title: "每日天气预报s104",
    description: "feedId:65606261520633856+userId:65591693045889024",
  },
  s105: {
    title: "每日天气预报s105",
    description: "feedId:65606406572249088+userId:65592500031268864",
  },
  s106: {
    title: "每日天气预报s106",
    description: "feedId:65606573569790976+userId:65593225759107072",
  },
  s107: {
    title: "每日天气预报s107",
    description: "feedId:65606774594393088+userId:65594170950360064",
  },
  s108: {
    title: "每日天气预报s108",
    description: "feedId:65606923139622912+userId:65595579740923904",
  },
  s109: {
    title: "每日天气预报s109",
    description: "feedId:65607096079165440+userId:57617886770572288",
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