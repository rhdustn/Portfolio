import * as React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Container, Text, Heading, Button, Icon } from '@/components'

import styles from './Superkola.module.scss'

export const Superkola: React.FC = () => {
    return (
        <div className={styles.base}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <Image src={'/superkola/logo.webp'} alt='logo' width={350} height={111} />
                        <div className={styles.back}>
                            SuperKola
                        </div>
                    </div>
                    <Heading element='h3' className={styles.subtitle}>
                        Collect Card, Collect <br /> Money!
                    </Heading>
                    <Text size={24} theme={500} className={styles.text}>
                        Strategy RPG game with collectable NFT cards.
                        <br /><br />
                        With over 600,000 pre-registered users waiting, SuperKola Tactics will launch in Q3, 2024.
                        <br /><br />
                        Create your own characters, use strategy to optimize your card decks and join battles to win!
                    </Text>
                    <Button as={Link} href={'https://www.superkolatactics.io/'} rel='nofollow norel noopen' className={styles.button} size={'default'} variant={'primary'}>
                        Pre-register
                        <Image src={'/google-play.svg'} alt='icon' width={64} height={64} />
                    </Button>
                </div>
                <div className={styles.video}>
                    <Image src={'/superkola/preview.webp'} alt='preview' fill />
                    <Image className={styles.cards} src={'/superkola/cards.webp'} width={604} height={465} alt='cards' />
                    <Link href={'https://youtu.be/j0akV9xI4pw'} target='_blank' rel='nofollow norel noopen' className={styles.play}>
                        <Icon glyph={'Youtube'} width={40} height={40} />
                        <Text size={18} theme={800}>
                         Watch the Trailer
                        </Text>
                    </Link>
                </div>
            </Container>
        </div>
    )
}