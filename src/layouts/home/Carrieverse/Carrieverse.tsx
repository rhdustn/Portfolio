import * as React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Container, Heading, Text, Button, Icon } from '@/components'

import styles from './Carrieverse.module.scss'

export const Carrieverse: React.FC = () => {
    return (
        <div id='games' className={styles.base}>
            <Container className={styles.container}>
                <div className={styles.video}>
                    <Image src={'/carrieverse/preview.webp'} alt='preview' fill />
                    <Link href={'https://youtu.be/wrp83coSzKk'} target='_blank' rel='nofollow noopen norel' className={styles.play}>
                        <Icon glyph={'Youtube'} width={40} height={40} />
                        <Text size={18} theme={800}>
                         Watch the Trailer
                        </Text>
                    </Link>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <Image src={'/carrieverse/logo.webp'} alt='logo' width={350} height={111} />
                        <div className={styles.back}>
                            Carrieverse
                        </div>
                    </div>
                    <Heading element='h3' className={styles.subtitle}>
                        Carrie on your 2nd life!
                    </Heading>
                    <Text size={24} theme={500} className={styles.text}>
                        IP Playground for All
                        <br /><br />
                        Global Launch in March 2024.
                        <br /><br />
                        500,000+ Downloads <br />
                        100,000+ DAU. <br /><br />
                        Join the Carrieverse WEB3 metaverse, make friends from around the world, play fun mini-games and monetize!
                    </Text>
                    <Button as={Link} rel='nofollow norel noopen' href={'https://play.google.com/store/apps/details?id=com.carrieverse.carriepark&pli=1'} className={styles.button} size={'default'} variant={'primary'}>
                        Download on Google
                        <Image src={'/google-play.svg'} alt='icon' width={64} height={64} />
                    </Button>
                </div>
            </Container>
        </div>
    )
}