import * as React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Container, Heading, Text, Icon } from '@/components'

import { Header } from '@/components'

import styles from './About.module.scss'

export const AboutPage: React.FC = () => {
    return (
        <React.Suspense>
            <section className={styles.base}>
                <Header />
                <Container className={styles.container}>
                    <div className={styles.title}>
                        <div className={styles.back}>
                            About
                        </div>
                        <Heading element='h2' as='h1' className={styles.heading}>
                            About
                        </Heading>
                    </div>
                    <div className={styles.video}>
                        <Image src={'/about-poster.webp'} alt='preview' fill />
                        <Link href={'https://www.youtube.com/watch?v=91DP4-isf94'} target='_blank' rel='nofollow norel noopen' className={styles.play}>
                            <Icon glyph={'Youtube'} width={40} height={40} />
                            <Text size={18} theme={800}>
                                Watch the Trailer
                            </Text>
                        </Link>
                    </div>
                    <div className={styles.content}>
                        <Heading element='h3' as='h2' className={styles.subtitle}>
                            Our Mission
                        </Heading>
                        <Text size={24} theme={500} className={styles.note}>
                            {`Carrieverse's mission is to lead the Web3 gaming field. We provide immersive experiences using $CVTX and strengthen the community through flagship games like 'Carrieverse' and 'SuperKola Tactics'.`}
                        </Text>
                        <Text size={24} theme={500} className={styles.text}>
                            {`Carrieverse has reached 150,000 DAU in Southeast Asia and now aims to enter the markets of India, Southeast Asia, and North America, anticipating even greater growth in larger markets.`}
                        </Text>
                        <Text size={24} theme={500} className={styles.text}>
                            {`SuperKola Tactics is the next big thing after Carrieverse. It's an RPG genre that anyone can enjoy easily and with fun. It has garnered over 700,000 pre-registrations`}
                        </Text>
                    </div>
                </Container>
            </section>
        </React.Suspense>
    )
}