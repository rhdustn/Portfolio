import * as React from 'react';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Container, Text, Heading } from '@/components';

import Preview1 from 'public/press/preview1.jpg';
import Preview2 from 'public/press/preview2.jpg';
import Preview3 from 'public/press/preview3.jpg';

import styles from './Press.module.scss';

const articles: {
  preview: StaticImageData;
  title: string;
  href: string;
}[] = [
  {
    preview: Preview1,
    title: `Korea’s Leading Metaverse Carrieverse, Reaches 100k Global DAU`,
    href: 'https://apnews.com/press-release/pr-newswire/south-korea-c104a3883aaf839281459f774aaf44b3',
  },
  {
    preview: Preview2,
    title: `Disney Officially Enters Metaverse Market Through Carrieverse
`,
    href: 'https://news.bitcoin.com/disney-officially-enters-metaverse-market-through-carrieverse/',
  },
  {
    preview: Preview3,
    title: `CVTX Enters Dubai's DMCC, the Global Hub of Web3`,
    href: 'https://edition.cnn.com/business/newsfeeds/prnewswire/202311091300PR_NEWS_USPR_____CN62661.html',
  },
];

export const Press: React.FC = () => {
  return (
    <section id="press" className={styles.base}>
      <Container className={styles.container}>
        <div className={styles.title}>
          <div className={styles.back}>In the press</div>
          <Heading className={styles.heading} element="h3" as="h2">
            In the press
          </Heading>
        </div>
        <div className={styles.list}>
          {articles.map((article, index) => (
            <Link
              href={article.href}
              className={styles.article}
              key={index}
              target="_blank"
            >
              <span className={styles.preview}>
                <Image src={article.preview} fill alt="image" />
              </span>
              <div className={styles.row}>
                <Text size={24} theme={800} className={styles.text}>
                  {article.title}
                </Text>
                <Image src={'/next.svg'} alt="play" width={54} height={54} />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
