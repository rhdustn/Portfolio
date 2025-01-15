'use client'

import React from 'react'
import cx from 'classnames'

import styles from './Button.module.scss'

export type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
  children?: React.ReactNode
  variant: 'primary' | 'gold'
  size: 'default'
  as?: E
}

export type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps>

const defaultElement = 'button'

export function Button<E extends React.ElementType = typeof defaultElement>({
  children,
  variant = 'primary',
  size = 'default',
  as,
  className,
  ...rest
}: ButtonProps<E>) {
  const TagName = as || defaultElement

  return (
    <>
      <TagName
        className={cx(
          styles.button,
          styles[size],
          styles[variant],
          rest?.disabled && styles.disabled,
          className,
        )}
        {...rest}
      >
        {children}
      </TagName>
    </>
  )
}
