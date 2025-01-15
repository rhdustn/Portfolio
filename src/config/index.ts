import { Glyph } from '@/components';
import { StaticImageData } from 'next/image';
import Icon1 from 'public/tokens/token1.svg';
import Icon2 from 'public/tokens/token2.svg';
import Icon3 from 'public/tokens/token3.svg';
import Icon4 from 'public/tokens/token4.svg';
import Icon5 from 'public/tokens/token5.svg';
import Icon6 from 'public/tokens/token6.svg';
import Icon7 from 'public/tokens/token7.svg';
import Icon8 from 'public/tokens/token8.svg';

export const links: {
  text: string;
  href: string;
}[] = [
  {
    text: 'About',
    href: 'about',
  },
  {
    text: 'Games',
    href: 'games',
  },
  {
    text: 'Platform',
    href: 'platform',
  },
  {
    text: 'Press',
    href: 'press',
  },
  {
    text: 'Roadmap',
    href: 'roadmap',
  },
  {
    text: 'Partners',
    href: 'partners',
  },
];

export const socials: {
  title: string;
  icon: Glyph;
  href: string;
}[] = [
  {
    title: 'Discord',
    icon: 'Discord',
    href: 'https://discord.com/invite/carrieverseofficial',
  },
  {
    title: 'Twitter',
    icon: 'Twitter',
    href: 'https://x.com/CarrieVerse',
  },
  {
    title: 'Youtube',
    icon: 'Youtube',
    href: 'https://www.youtube.com/@CarrieVerseOfficial',
  },
];

export const tokens: {
  icon: StaticImageData;
  text: string;
  href: string;
}[] = [
  {
    icon: Icon1,
    text: 'Coinmarketcap',
    href: 'https://coinmarketcap.com/currencies/carrieverse/',
  },
  {
    icon: Icon2,
    text: 'Gate.io',
    href: 'https://www.gate.io/price/carrieverse-cvtx',
  },
  {
    icon: Icon3,
    text: 'BingX',
    href: 'https://bingx.com/en/prices/carrieverse/',
  },
  {
    icon: Icon4,
    text: 'MEXC Global',
    href: 'https://www.mexc.com/exchange/CVTX_USDT',
  },
  {
    icon: Icon5,
    text: 'Bitmart',
    href: 'https://www.bitmart.com/trade/en-US?symbol=CVTX_USDT',
  },
  {
    icon: Icon6,
    text: 'Bitget',
    href: 'https://www.bitget.com/spot/CVTXUSDT',
  },
  {
    icon: Icon7,
    text: 'Gopax',
    href: 'https://www.gopax.co.kr/exchange/cvtx-krw',
  },
  {
    icon: Icon8,
    text: 'Probit Global',
    href: 'https://www.probit.com/app/exchange/CVTX-USDT',
  },
];

export const docs: {
  icon: Glyph;
  text: string;
  href: string;
}[] = [
  {
    icon: 'Book',
    text: 'Whitepaper',
    href: 'https://s-organization-359.gitbook.io/carrieverse',
  },
  {
    icon: 'Paper',
    text: 'Certik',
    href: 'https://skynet.certik.com/projects/carrieverse',
  },
];

export const roadmap: {
  type: 'yellow' | 'purple' | 'pink' | 'orange';
  title: string;
  content: string[];
}[] = [
  {
    type: 'yellow',
    title: 'Q1',
    content: ['Establishment of a company'],
  },
  {
    type: 'purple',
    title: 'Q2',
    content: ['Team setting', 'Carrieverse Governance Token', 'Issuing $CVTX'],
  },
  {
    type: 'pink',
    title: 'Q3',
    content: [
      'Development a Cling Wallet',
      'Polygon & Polygon Labs Partnership',
    ],
  },
  {
    type: 'orange',
    title: 'Q4',
    content: ['Cling Wallet Launch'],
  },
  {
    type: 'yellow',
    title: 'Q1',
    content: [
      '$CVTX Listing (Gate.io)',
      `Theatrical release of the animated film "Carrie and Super Kola" (Korea, Southeast Asia)`,
    ],
  },
  {
    type: 'purple',
    title: 'Q2',
    content: [
      '$CVTX Listing (MEXC)',
      `Pre-registration for the metaverse "Carrieverse"`,
      'Vietnam Showcase',
    ],
  },
  {
    type: 'pink',
    title: 'Q3',
    content: [
      'Land NFT Minting PFP NFT',
      `"DeD011z" Minting`,
      'Carrieverse Soft Launch',
    ],
  },
  {
    type: 'orange',
    title: 'Q4',
    content: ['— Staking Service Launch', 'Super Kola Tactics First Phase CBT'],
  },
  {
    type: 'yellow',
    title: 'Q1',
    content: ['Carrieverse Global Open', 'Super Kola Tactics Second Phase CBT'],
  },
  {
    type: 'purple',
    title: 'Q2',
    content: ['$CVTX Listing (Major CEX)', 'Super Kola Tactics Open'],
  },
  {
    type: 'pink',
    title: 'Q3',
    content: [
      'Superkola Tactics Global Launch',
      'Carrieverse Expansion  into more countries',
    ],
  },
  {
    type: 'orange',
    title: 'Q4',
    content: [
      'Big IP Collaboration Items Released in Carrieverse',
      'Big IP in Carrieverse E-Sports Tournament',
    ],
  },
];
