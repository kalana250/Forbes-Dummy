import { Component } from '@angular/core';

@Component({
  selector: 'app-middle-part',
  templateUrl: './middle-part.component.html',
  styleUrl: './middle-part.component.css'
})
export class MiddlePartComponent {
imgUrl:string = 'https://imageio.forbes.com/images-forbes/2024-billionaires-ver4/list-lander-1400x788.jpg?format=jpg';

  heads =[
    {
      leftImage:'https://images.forbes.com/2024-billionaires-ver4/intro-680x383.jpg',
      leftHead :'New Billionaires',
      leftDecription : '265 fresh faces, including Taylor Swift, Magic Johnson and Christian Louboutin.',
      leftReadmore : 'READ MORE'
    }
  ];
  people = [
    {
      rank: 1,
      name: 'Bernard Arnault & family',
      netWorth: '$233 B',
      age: 75,
      country: 'France',
      source: 'LVMH',
      industry: 'Fashion & Retail',
      wealthKeyUp:'▲',
      wealthKeyDown:'▼',
      wealthKeyUnchanged:'◀▶',
      wealthKeyNew:'🞦',
      image: 'https://specials-images.forbesimg.com/imageserve/5dc05518ca425400079c659f/416x416.jpg?background=000000&cropX1=0&cropX2=4000&cropY1=1209&cropY2=5212',
      description: 'Bernard Arnault oversees the LVMH empire of 75 fashion and cosmetics brands, including Louis Vuitton and Sephora.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 2,
      name: 'Elon Musk',
      netWorth: '$195 B',
      age: 52,
      country: 'United States',
      source: 'Tesla, SpaceX',
      industry: 'Automotive',
      image: 'https://imageio.forbes.com/specials-images/imageserve/62d700cd6094d2c180f269b9/0x0.jpg?format=jpg&crop=959,959,x0,y0,safe',
      description: 'Elon Musk cofounded six companies, including electric car maker Tesla, rocket producer SpaceX and tunneling startup Boring Company.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 3,
      name: 'Jeff Bezos',
      netWorth: '$194 B',
      age: 60,
      country: 'United States',
      source: 'Amazon',
      industry: 'Technology',
      image: 'https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe',
      description: 'Jeff Bezos founded e-commerce giant Amazon in 1994 out of his Seattle garage.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 4,
      name: 'Mark Zuckerberg',
      netWorth: '$177 B',
      age: 39,
      country: 'United States',
      source: 'Facebook',
      industry: 'Technology',
      image: 'https://specials-images.forbesimg.com/imageserve/5c76b7d331358e35dd2773a9/416x416.jpg?background=000000&cropX1=0&cropX2=4401&cropY1=0&cropY2=4401',
      description: 'A 19-year-old Mark Zuckerberg started Facebook in 2004 for students to match names with photos of classmates.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 5,
      name: 'Larry Ellison',
      netWorth: '$141 B',
      age: 79,
      country: 'United States',
      source: 'Oracle',
      industry: 'Technology',
      image: 'https://specials-images.forbesimg.com/imageserve/5e8b62cfc095010007bffea0/416x416.jpg?background=000000&cropX1=0&cropX2=4529&cropY1=652&cropY2=5184',
      description: 'Larry Ellison is chairman, chief technology officer and cofounder of software giant Oracle, of which he owns just under 40%..',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 6,
      name: 'Warren Buffett',
      netWorth: '$133 B',
      age: 93,
      country: 'United States',
      source: 'Berkshire Hathaway',
      industry: 'Finance & Investments',
      image: 'https://specials-images.forbesimg.com/imageserve/5babb7f1a7ea4342a948b79a/416x416.jpg?background=000000&cropX1=748&cropX2=3075&cropY1=1753&cropY2=4082',
      description: 'Known as the "Oracle of Omaha," Warren Buffett is one of the most successful investors of all time.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 7,
      name: 'Bill Gates',
      netWorth: '128 B',
      age: 68,
      country: 'United States',
      source: 'Microsoft',
      industry: 'Technology',
      image: 'https://imageio.forbes.com/specials-images/imageserve/62d599ede3ff49f348f9b9b4/0x0.jpg?format=jpg&crop=821,821,x155,y340,safe',
      description: 'Bill Gates diversified his fortune from software firm Microsoft into dozens of holdings, including waste disposal firm Republic Services and tractor maker Deere & Co.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 8,
      name: 'Steve Ballmer',
      netWorth: '121 B',
      age: 68,
      country: 'United States',
      source: 'Microsoft',
      industry: 'Technology',
      image: 'https://specials-images.forbesimg.com/imageserve/59d50c47a7ea436b47b36d66/416x416.jpg?background=000000&cropX1=553&cropX2=2940&cropY1=322&cropY2=2708',
      description: 'Steve Ballmer is the high-wattage former CEO of Microsoft, who led the company from 2000 to 2014.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 9,
      name: 'Mukesh Ambani',
      netWorth: '116 B',
      age: 66,
      country: 'India',
      source: 'Diversified',
      industry: 'Diversified',
      image: 'https://specials-images.forbesimg.com/imageserve/5c7d7829a7ea434b351ba0b6/416x416.jpg?background=000000&cropX1=206&cropX2=2043&cropY1=250&cropY2=2089',
      description: 'Mukesh Ambani chairs and runs $110 billion (revenue) Reliance Industries, which has interests in petrochemicals, oil and gas, telecom, retail and financial services.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 10,
      name: 'Larry Page',
      netWorth: '114 B',
      age: 51,
      country: 'United States',
      source: 'Google',
      industry: 'Technology',
      image: 'https://specials-images.forbesimg.com/imageserve/5c76bcaaa7ea43100043c836/416x416.jpg?background=000000&cropX1=227&cropX2=2022&cropY1=22&cropY2=1817',
      description: 'Larry Page stepped down as CEO of Alphabet, the parent company of Google, in 2019 but remains a board member and a controlling shareholder.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 11,
      name: 'Sergey Brin',
      netWorth: '110 B',
      age: 50,
      country: 'United States',
      source: 'Google',
      industry: 'Technology',
      image: 'https://specials-images.forbesimg.com/imageserve/5c7d7c254bbe6f78090d831f/416x416.jpg?background=000000&cropX1=475&cropX2=2887&cropY1=168&cropY2=2582',
      description: 'Sergey Brin stepped down as president of Alphabet, parent company of Google, in December 2019 but remains a board member and a controlling shareholder..',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 12,
      name: 'Michael Bloomberg',
      netWorth: '106 B',
      age: 82,
      country: 'United States',
      source: 'Bloomberg LP',
      industry: 'Finance & Investments',
      image: 'https://specials-images.forbesimg.com/imageserve/5c76b4104bbe6f24ad99c35d/416x416.jpg?background=000000&cropX1=165&cropX2=5613&cropY1=321&cropY2=5769',
      description: 'Michael Bloomberg cofounded financial information and media company Bloomberg LP in 1981.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 13,
      name: 'Amancio Ortega',
      netWorth: '103 B',
      age: 88,
      country: 'Spain',
      source: 'Zara',
      industry: 'Fashion & Retail',
      image: 'https://specials-images.forbesimg.com/imageserve/5c76b94131358e35dd27748e/416x416.jpg?background=000000&cropX1=179&cropX2=2232&cropY1=216&cropY2=2269',
      description: 'Amancio Ortega of Spain is one of the wealthiest clothing retailers in the world.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 14,
      name: 'Carlos Slim Helu & family',
      netWorth: '102 B',
      age: 84,
      country: 'Mexico',
      source: 'Telecom',
      industry: 'Telecom',
      image: 'https://specials-images.forbesimg.com/imageserve/5c76ba144bbe6f24ad99c613/416x416.jpg?background=000000&cropX1=0&cropX2=3005&cropY1=389&cropY2=3395',
      description: ' Mexicos richest person, Carlos Slim Helú and his family control América Móvil, Latin Americas biggest mobile telecom firm.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 15,
      name: 'Francoise Bettencourt Meyers & family',
      netWorth: '99.5 B',
      age: 70,
      country: 'France',
      source: 'LOréal',
      industry: 'Fashion & Retail',
      image: ' https://imageio.forbes.com/specials-images/imageserve/605e26e3c65f7c2596bd3e15/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe',
      description: 'Francoise Bettencourt Meyers, the granddaughter of the founder of LOreal, is the richest woman in the world.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 16,
      name: 'Michael Dell',
      netWorth: '91 B',
      age: 59,
      country: 'United States',
      source: 'Dell Technologies',
      industry: 'Technology',
      image: 'https://imageio.forbes.com/specials-images/imageserve/615c93f9da61f2ff5b9ecf9b/0x0.jpg?format=jpg&crop=1678,1679,x0,y118,safe',
      description: 'Michael Dell is chairman and CEO of Dell Technologies, which formed in 2016 via Dells $60 billion merger with computer storage giant EMC.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 17,
      name: 'Gautam Adani',
      netWorth: '84 B',
      age: 61,
      country: 'India',
      source: 'Infrastructure, commodities',
      industry: 'Diversified',
      image: 'https://imageio.forbes.com/specials-images/imageserve/6345ac3b833e07cd89aa314c/0x0.jpg?format=jpg&crop=1813,1815,x473,y95,safe',
      description: 'Gautam Adani is chairman of the $32 billion (revenue) Adani Group, with interests in ports, airports, power generation and transmission, and green energy, among others.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 18,
      name: 'Jim Walton & family',
      netWorth: '78.4 B',
      age: 75,
      country: 'United States',
      source: 'Walmart',
      industry: 'Fashion & Retail',
      image: 'https://specials-images.forbesimg.com/imageserve/5c7ef2fea7ea434b351bca5a/416x416.jpg?background=000000&cropX1=49&cropX2=934&cropY1=65&cropY2=951',
      description: 'Jim Walton is the youngest son of Walmart founder Sam Walton.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 19,
      name: 'Rob Walton & family',
      netWorth: '77.4 B',
      age: 79,
      country: 'United States',
      source: 'Walmart',
      industry: 'Fashion & Retail',
      image: 'https://specials-images.forbesimg.com/imageserve/59d50a9e4bbe6f37dd9ff712/416x416.jpg?background=000000&cropX1=244&cropX2=1841&cropY1=60&cropY2=1658',
      description: 'Rob Walton is the eldest son of Walmart founder Sam Walton.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 20,
      name: 'Jensen Huang',
      netWorth: '77 B',
      age: 61,
      country: 'United States',
      source: 'Semiconductors',
      industry: 'Technology',
      image: 'https://specials-images.forbesimg.com/imageserve/5bc505a331358e59f57abeb9/416x416.jpg?background=000000&cropX1=553&cropX2=3255&cropY1=212&cropY2=2912',
      description: 'Jensen Huang cofounded graphics-chip maker Nvidia in 1993, and has served as its CEO and president ever since.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 21,
      name: 'Alice Walton',
      netWorth: '72.3 B',
      age: 74,
      country: 'United States',
      source: 'Walmart',
      industry: 'Fashion & Retail',
      image: 'https://specials-images.forbesimg.com/imageserve/5c7ef270a7ea434b351bca52/416x416.jpg?background=000000&cropX1=232&cropX2=998&cropY1=222&cropY2=988',
      description: ' Alice Walton is the only daughter of Walmart founder Sam Walton.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 22,
      name: ' David Thomson & family',
      netWorth: '67.8 B',
      age: 66,
      country: 'Canada',
      source: 'Media',
      industry: 'Media & Entertainment',
      image: 'https://imageio.forbes.com/specials-images/imageserve/5a7ba72aa7ea43169012f1b4/0x0.jpg?format=jpg&crop=2250,2250,x1065,y60,safe',
      description: 'David Thomson and his family control a media and publishing empire founded by his grandfather Roy Thomson.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 23,
      name: ' Julia Koch & family',
      netWorth: '64.3 B',
      age: 61,
      country: 'United States',
      source: 'Koch Industries',
      industry: 'Diversified',
      image: 'https://imageio.forbes.com/specials-images/imageserve/6601ce61b79552a97c9e786c/0x0.jpg?format=jpg&crop=2583,2584,x0,y522,safe',
      description: 'Julia Koch and her three children inherited a 42% stake in Koch Industries from her husband, David, who died in 2019 at age 79.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 24,
      name: ' Zhong Shanshan',
      netWorth: '62.3 B',
      age: 69,
      country: 'China',
      source: 'Beverages, pharmaceuticals',
      industry: 'Food & Beverage',
      image: 'https://imageio.forbes.com/specials-images/imageserve/60380e390357bc1fbfc0bc32/0x0.jpg?format=jpg&crop=1211,1212,x116,y201,safe',
      description: 'Zhong Shanshan is the founder and chairman of Nongfu Spring, a bottled water company that listed its shares in Hong Kong in September 2020.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 25,
      name: '  Charles Koch & family',
      netWorth: '58.5 B',
      age: 88,
      country: 'United States',
      source: 'Koch Industries',
      industry: ' Diversified',
      image: 'https://imageio.forbes.com/specials-images/imageserve/615c94bd2aac2936a52682d1/0x0.jpg?format=jpg&crop=562,562,x286,y110,safe',
      description: 'Charles Koch has been chairman of Koch Industries, Americas second largest private company by revenue, since 1967. He brought on his first ever co-CEO in 2023.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 26,
      name: '  Giovanni Ferrero',
      netWorth: ' 43.8 B',
      age: 59,
      country: ' Italy',
      source: ' Nutella, chocolates',
      industry: ' Food & Beverage',
      image: 'https://imageio.forbes.com/specials-images/imageserve/5b11bc5ca7ea436b547f29cb/0x0.jpg?format=jpg&crop=1222,1221,x622,y361,safe',
      description: 'Giovanni Ferrero is executive chairman of his familys namesake confections business, which posted $18 billion sales in 2023.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 27,
      name: '  Prajogo Pangestu',
      netWorth: ' 43.4 B',
      age: 59,
      country: ' Italy',
      source: ' Nutella, chocolates',
      industry: ' Food & Beverage',
      image: 'https://imageio.forbes.com/specials-images/imageserve/656f8476e94e04b7e93336c8/0x0.jpg?format=jpg&crop=2961,2961,x0,y0,safe',
      description: 'Son of a rubber trader, Prajogo Pangestu got his start in the timber business in the late 1970s.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 27,
      name: '  Zhang Yiming',
      netWorth: ' 43.4 B',
      age: 40,
      country: ' China',
      source: '  TikTok',
      industry: ' Technology',
      image: 'https://imageio.forbes.com/specials-images/imageserve/618e91e427fcd6441f93c0c6/0x0.jpg?format=jpg&crop=1067,1066,x227,y14,safe',
      description: 'Zhang Yiming is the main founder of Chinese tech giant ByteDance, best known for its insanely popular app TikTok, which has more than 1 billion users worldwide.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 29,
      name: '  Tadashi Yanai & family',
      netWorth: ' 42.8 B',
      age: 75,
      country: ' Japan',
      source: '  Fashion retail',
      industry: ' Fashion & Retail',
      image: 'https://imageio.forbes.com/specials-images/imageserve/66560a756b74351d5b0711e8/0x0.jpg?format=jpg&crop=915,914,x689,y78,safe',
      description: ' Tadashi Yanai built and runs Tokyo-listed retail clothing empire Fast Retailing, parent of the Uniqlo chain.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 30,
      name: '  Phil Knight & family',
      netWorth: ' 40.9 B',
      age: 86,
      country: ' United States',
      source: '  Nike',
      industry: ' Fashion & Retail',
      image: 'https://imageio.forbes.com/specials-images/imageserve/6488d5874961598251b12f50/0x0.jpg?format=jpg&crop=2746,2747,x598,y0,safe',
      description: ' Phil Knight, cofounder of shoe giant Nike, retired as chairman in 2016 after 52 years at the company.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 31,
      name: '  Mark Mateschitz',
      netWorth: ' 39.6 B',
      age: 31,
      country: 'Austria',
      source: '  Red Bull',
      industry: ' Food & Beverage',
      image: 'https://imageio.forbes.com/specials-images/imageserve/642b2ae09caa113a6ce1c15e/0x0.jpg?format=jpg&crop=2478,2475,x898,y239,safe',
      description: ' Mark Mateschitz is the only child of the late Austrian billionaire Dietrich Mateschitz, who cofounded energy drink firm Red Bull in 1987.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 32,
      name: ' Klaus-Michael Kuehne',
      netWorth: ' 39.2 B',
      age: 86,
      country: 'Germany',
      source: ' Shipping',
      industry: ' Logistics',
      image: 'https://specials-images.forbesimg.com/imageserve/5e762e4fc7b02d000666c89b/416x416.jpg?background=000000&cropX1=792&cropX2=4141&cropY1=0&cropY2=3347',
      description: ' Logistics magnate Klaus-Michael Kuehne is honorary chairman of Kuehne + Nagel International AG, based in ‎Schindellegi‎, Switzerland.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 33,
      name: ' Colin Huang',
      netWorth: ' 38.9 B',
      age: 44,
      country: 'China',
      source: ' E-commerce',
      industry: ' Technology',
      image: 'https://imageio.forbes.com/specials-images/imageserve/5dc0500b3195ed0007eab3f7/0x0.jpg?format=jpg&crop=2640,2638,x1059,y45,safe',
      description: 'Colin Huang is the founder of PDD Holdings, the Chinese e-commerce company that changed its name from Pinduoduo in February 2023.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 34,
      name: ' Stephen Schwarzman',
      netWorth: ' 38.8 B',
      age: 77,
      country: 'United States',
      source: ' Investments',
      industry: ' Finance & InvestmentsTechnology',
      image: 'https://specials-images.forbesimg.com/imageserve/5d89f4d318444200084e5265/416x416.jpg?background=000000&cropX1=1911&cropX2=5305&cropY1=26&cropY2=3418',
      description: 'The son of a dry goods store owner, Stephen Schwarzman founded private equity firm Blackstone with fellow billionaire Peter Peterson in 1985.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 35,
      name: ' Jacqueline Mars',
      netWorth: ' 38.5 B',
      age: 84,
      country: 'United States',
      source: 'Candy, pet food',
      industry: ' Food & Beverage',
      image: 'https://specials-images.forbesimg.com/imageserve/59d50d06a7ea436b47b36d84/416x416.jpg?background=000000&cropX1=147&cropX2=1649&cropY1=377&cropY2=1879',
      description: 'Jacqueline Mars owns an estimated one-third of Mars, the candy, food and pet care firm founded by her grandfather.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 35,
      name: ' John Mars',
      netWorth: ' 38.5 B',
      age: 88,
      country: 'United States',
      source: 'Candy, pet food',
      industry: ' Food & Beverage',
      image: 'https://specials-images.forbesimg.com/imageserve/5ba41e08a7ea434e4c6948eb/416x416.jpg?background=000000&cropX1=53&cropX2=1401&cropY1=9&cropY2=1357',
      description: 'John Mars and his siblings Jacqueline and Forrest Jr. (d. 2016) inherited stakes in the candy firm Mars when their father died in 1999.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 37,
      name: ' Dieter Schwarz',
      netWorth: ' 38 B',
      age: 84,
      country: 'Germany',
      source: 'Retail',
      industry: ' Fashion & Retail',
      image: 'https://imageio.forbes.com/specials-images/imageserve/6050f48ca1ab099ed6e290cc/0x0.jpg?format=jpg&crop=800,800,x0,y0,safe',
      description: ' Dieter Schwarzs Schwarz Group, with revenue of over $160 billion, is comprised of the Kaufland and Lidl (rhymes with needle) discount supermarkets.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 38,
      name: ' Li Ka-shing',
      netWorth: ' 37.3 B',
      age: 95,
      country: 'Hong Kong',
      source: 'Diversified',
      industry: ' Diversified',
      image: 'https://imageio.forbes.com/specials-images/imageserve/65d4c4432a6eece8368e841b/0x0.jpg?format=jpg&crop=1244,1245,x250,y226,safe',
      description: ' Nicknamed Superman, Li Ka-shing is revered as one of the most influential businessmen in Asia.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 39,
      name: ' Shiv Nadar',
      netWorth: ' 36.9 B',
      age: 78,
      country: 'India',
      source: 'software services',
      industry: ' Technology',
      image: 'https://imageio.forbes.com/specials-images/imageserve/605e2b0c7cd0a7025abd3e15/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe',
      description: ' Indian IT pioneer Shiv Nadar cofounded HCL in a garage in 1976 to make calculators and microprocessors with five friends.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 40,
      name: '  Alain Wertheimer',
      netWorth: ' 36.8 B',
      age: 75,
      country: 'France',
      source: 'Chanel',
      industry: ' Fashion & Retail',
      image: 'https://imageio.forbes.com/specials-images/imageserve/645d0add2a0a83a54a9aa149/0x0.jpg?format=jpg&crop=2730,2731,x0,y100,safe',
      description: ' Alain Wertheimer is the chairman of Chanel, the French luxury brand.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 40,
      name: ' Gerard Wertheimer',
      netWorth: ' 36.8 B',
      age: 73,
      country: 'France',
      source: 'Chanel',
      industry: ' Fashion & Retail',
      image: 'https://imageio.forbes.com/specials-images/imageserve/645d02e2c7d39022642796dd/0x0.jpg?format=jpg&crop=3066,3068,x1150,y0,safe',
      description: ' Gerard Wertheimer and his brother Alain own French luxury brand Chanel.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 42,
      name: ' Ken Griffin',
      netWorth: ' 36.4 B',
      age: 55,
      country: ' United States',
      source: 'Hedge funds',
      industry: ' Finance & Investments',
      image: 'https://imageio.forbes.com/specials-images/imageserve/6247575a5af6af682d503f2f/0x0.jpg?format=jpg&crop=1966,1966,x0,y0,safe',
      description: ' Ken Griffin founded and runs Citadel, a Miami-based hedge fund firm that manages $59 billion in assets.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 43,
      name: ' MacKenzie Scott',
      netWorth: ' 35.6 B',
      age: 53,
      country: ' United States',
      source: 'MacKenzie Scott',
      industry: ' Technology',
      image: 'https://imageio.forbes.com/specials-images/imageserve/63325f33de0e387de2dd5389/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe',
      description: ' MacKenzie Scott is a philanthropist, author and the ex-wife of Amazon founder Jeff Bezos, to whom she was married for 25 years. As part of their 2019 divorce, she received a 4% stake in the online retailer.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 44,
      name: ' Thomas Peterffy',
      netWorth: ' 34 B',
      age: 79,
      country: ' United States',
      source: 'Discount brokerage',
      industry: ' Finance & Investments',
      image: 'https://specials-images.forbesimg.com/imageserve/5d8a5c6218444200084e6532/416x416.jpg?background=000000&cropX1=466&cropX2=1132&cropY1=297&cropY2=962',
      description: 'A digital trading pioneer, Thomas Peterffy chairs Interactive Brokers, which markets its specialized trading platform to sophisticated investors.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 45,
      name: ' Reinhold Wuerth & family',
      netWorth: ' 33.6 B',
      age: 88,
      country: ' Germany',
      source: ' Fasteners',
      industry: ' Manufacturing',
      image: 'https://specials-images.forbesimg.com/imageserve/5e76350710380d0006fbadf8/416x416.jpg?background=000000&cropX1=2132&cropX2=5568&cropY1=0&cropY2=3434',
      description: 'Reinhold Wuerth entered his fathers wholesale screw business in 1949, at age 14, as the companys second employee and first apprentice.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 46,
      name: ' William Ding',
      netWorth: ' 33.5 B',
      age: 52,
      country: ' China',
      source: ' Online games',
      industry: ' Technology',
      image: 'https://imageio.forbes.com/specials-images/imageserve/65496210455fdb2807b461fc/0x0.jpg?format=jpg&crop=1337,1338,x376,y341,safe',
      description: ' William Ding is the CEO of NetEase, one of the worlds largest online games companies.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 46,
      name: ' Savitri Jindal & family',
      netWorth: ' 33.5 B',
      age: 74,
      country: ' India',
      source: '   Steel',
      industry: ' Metals & Mining',
      image: 'https://specials-images.forbesimg.com/imageserve/55f77874e4b0ffa7afe4940e/416x416.jpg?background=000000&cropX1=90&cropX2=676&cropY1=53&cropY2=640',
      description: ' Jindal Group, whose interests include steel, power, cement and infrastructure, is chaired by Savitri Jindal, widow of founder Om Prakash Jindal.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 48,
      name: ' Gianluigi Aponte',
      netWorth: ' 33.1 B',
      age: 83,
      country: ' Switzerland',
      source: '   Shipping',
      industry: ' Logistics',
      image: 'https://specials-images.forbesimg.com/imageserve/5e77ceeac7b02d000666de20/416x416.jpg?background=000000&cropX1=1096&cropX2=5302&cropY1=46&cropY2=4249',
      description: '  Gianluigi Aponte and his wife Rafaela each own a 50% stake in MSC, the worlds largest shipping line.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 48,
      name: '  Rafaela Aponte-Diamant',
      netWorth: ' 33.1 B',
      age: 79,
      country: ' Switzerland',
      source: '   Shipping',
      industry: ' Logistics',
      image: 'https://i.forbesimg.com/media/lists/people/no-pic_416x416.jpg',
      description: ' Rafaela Aponte-Diamant and her husband Gianluigi each own a 50% stake in MSC, the worlds largest shipping line.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },
    {
      rank: 50,
      name: '  Changpeng Zhao',
      netWorth: ' 33 B',
      age: 47,
      country: ' Canada',
      source: 'Cryptocurrency exchange',
      industry: ' Finance & Investments',
      image: 'https://imageio.forbes.com/specials-images/imageserve/61115ac5b4c5d23845419c4e/0x0.jpg?format=jpg&crop=911,911,x0,y0,safe',
      description: ' Changpeng Zhao, who goes by CZ, is the founder and former CEO of Binance, the largest cryptocurrency exchange in the world.',
      chart: 'https://www.bing.com/th/id/OGC.02e14146471323dc0920630f863a7966?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f7162%2fscreenshots%2f1888419%2fopen-uri20150119-12-2b4861&ehk=QH9yiWcRphud77Vuexr%2fniQyvH%2fEiBWlWD55pBxhkmk%3d'
    },


  ];


  parts: any[] = [];
  selectedPerson: any = null;


  constructor() {
    this.splitIntoPartsWithAds();
  }

  splitIntoPartsWithAds() {
    const chunkSize = 15;
    for (let i = 0; i < this.people.length; i += chunkSize) {
      this.parts.push(this.people.slice(i, i + chunkSize));
      if (i + chunkSize < this.people.length) {
        this.parts.push({ type: 'advertisement' });
      }
    }
  }



  toggleDetails(person: any) {
    if (this.selectedPerson === person) {
      this.selectedPerson = null;
    } else {
      this.selectedPerson = person;
    }
  }


}
