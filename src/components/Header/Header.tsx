'use client';

import * as React from 'react';
import cx from 'classnames';

import Link from 'next/link';

import { Container, Text, Logotype, Icon } from '@/components/shared';
import { links, socials } from '@/config';

import styles from './Header.module.scss';
import { useLenis } from '@studio-freight/react-lenis';
import { useSearchParams } from 'next/navigation';

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const lenis = useLenis();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const elementId = searchParams.get('target');

    if (!elementId) {
      return;
    }

    setTimeout(() => {
      scrollTo(elementId);
    }, 400);
  }, [searchParams]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    lenis?.scrollTo?.(element);
  };

  return (
    <header className={cx(styles.base, className)}>
      <Container className={styles.container}>
        <Logotype />
        <nav className={styles.nav}>
          {links.map((link, index) => {
            if (link.href === 'about') {
              return (
                <Link key={index} href={link.href} className={styles.link}>
                  <Text size={18} theme={800}>
                    {link.text}
                  </Text>
                </Link>
              );
            }
            return (
              <Link
                key={index}
                href={`/?target=${link.href}`}
                className={styles.link}
              >
                <Text size={18} theme={800}>
                  {link.text}
                </Text>
              </Link>
            );
          })}
        </nav>
        <div className={styles.socials}>
          {socials.map((social, index) => (
            <Link
              className={styles.social}
              href={social.href}
              title={social.title}
              key={index}
              target="_blank"
            >
              <Icon glyph={social.icon} width={40} height={40} />
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
};

export { Header };
