import React, { FC, useState } from 'react'
import classNames from 'classnames'
export enum AlertType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error'
}

interface baseAlertInfo {
  type?: string
  closable?: boolean
  message: string
  description?: string
  className?: string
}
export type AlertProps = Partial<baseAlertInfo>
const Alert: FC<baseAlertInfo> = props => {
  const { type, className, closable, description, message } = props
  const [show, setShow] = useState(true)
  const classes = classNames('alert', className, {
    [`alert-${type}`]: type
  })
  return (
    <div className={classes} style={show ? { display: 'block' } : { display: 'none' }}>
      {message}
      {description ? <div className="sub-content">{description}</div> : null}
      {closable ? (
        <div className="close" onClick={e => setShow(false)}>
          关闭
        </div>
      ) : null}
    </div>
  )
}

Alert.defaultProps = {
  type: AlertType.Info,
  closable: false
}
export default Alert
