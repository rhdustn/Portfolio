import * as React from 'react'
import cx from 'classnames'

import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import { Container, Logotype, Text, Icon } from '@/components/shared'
import { tokens, docs, socials } from '@/config'

import styles from './Footer.module.scss'

type FooterProps = {
    className?: string
}

const Footer = ({ className }: FooterProps) => {
    return (
        <footer className={cx(styles.base, className)}>
            <Container className={styles.container}>
                <Logotype className={styles.logo} />
                <div className={styles.socials}>
                    <Text size={18} theme={800} className={styles.socialsTitle}>
                        Join the Carrieverse community
                    </Text>
                    <div className={styles.socialsList}>
                        {socials.map((social, index) => (
                            <Link className={styles.social} href={social.href} title={social.title} key={index}>
                                <Icon glyph={social.icon} width={40} height={40} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={styles.tokens}>
                    <Text size={16} theme={500} className={styles.tokensTitle}>
                        Carrieverse token
                    </Text>
                    <div className={styles.tokensList}>
                        {tokens.map((token, index) => (
                            <Link className={styles.token} href={token.href} key={index}>
                                <Image src={token.icon} width={40} height={40} alt='token' />
                                <Text size={18} theme={800}>
                                    {token.text}
                                </Text>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={styles.docs}>
                    <Text className={styles.docsTitle} size={16} theme={500}>
                        Our documentation
                    </Text>
                    <div className={styles.docsList}>
                        {docs.map((doc, index) => (
                            <Link className={styles.doc} href={doc.href} key={index}>
                                <Icon glyph={doc.icon} width={40} height={40} />
                                <Text size={18} theme={800}>
                                    {doc.text}
                                </Text>
                            </Link>
                        ))}
                    </div>
                </div>
                <Text size={16} theme={500} className={styles.copyright}>
                    Carrieverse.io (C) {new Date().getFullYear()}. All rights reserved
                </Text>
            </Container>
        </footer>
    )
}

export { Footer }
