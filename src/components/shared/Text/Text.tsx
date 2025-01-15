import * as React from 'react'
import cx from 'classnames'

import styles from './Text.module.scss'

type TextSizes = 16 | 18 | 20 | 22 | 24
type TextThemes = 500 | 800

type TextProps = React.PropsWithChildren<{
  size: TextSizes
  theme: TextThemes
}>

const Text = React.forwardRef<
  React.ElementRef<'p'>,
  React.ComponentPropsWithoutRef<'p'> & TextProps
>(({ children, size, theme, className, ...props }, forwardedRef) => (
  <p
    className={cx(
      styles.base,
      styles['size__' + size],
      styles['theme__' + theme],
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </p>
))

Text.displayName = 'Text'
export { Text }
