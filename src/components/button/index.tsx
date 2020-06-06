import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string
  size?: ButtonSize
  btnType?: ButtonType
  disabled?: boolean
  href?: string
  children: React.ReactNode
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement> // 拿按钮的原生属性
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: FC<ButtonProps> = props => {
  const { className, size, btnType, disabled, href, children, ...restProps } = props
  // 默认btn ， 添加用户自定义的 className
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled
  })
  if (btnType === ButtonType.Link) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}
Button.defaultProps = {
  btnType: ButtonType.Default,
  disabled: false
}
export default Button
