'use client';

import * as React from 'react';
import cx from 'classnames';

import { Container, Heading, Button } from '@/components';
import { useWindowSize } from '@/hooks/useWindowSize';

import styles from './Partners.module.scss';

export const Partners: React.FC = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const { width } = useWindowSize();

  const partnersArray = Array.from({ length: 35 }, (_, index) => index + 1);

  // Move the last element to the front
  const reorderedPartners = [
    ...partnersArray.slice(-1),
    ...partnersArray.slice(0, -1),
  ];

  return (
    <section id="partners" className={styles.base}>
      <Container className={styles.container}>
        <div className={styles.title}>
          <div className={styles.back}>Ecosystem partners</div>
          <Heading element="h3" as="h2" className={styles.heading}>
            Ecosystem partners
          </Heading>
        </div>
        <div className={cx(styles.list, isOpened && styles.isOpened)}>
          {reorderedPartners.map((partnerNumber) => (
            <div key={partnerNumber} className={styles.item}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/partners/partner${partnerNumber}.webp`}
                alt="partner"
              />
            </div>
          ))}
          {!isOpened && (
            <Button
              onClick={() => setIsOpened(true)}
              size={'default'}
              variant={'primary'}
              className={styles.button}
            >
              Show more
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
};
