import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Alert, {AlertType,AlertProps} from './index'

const testProps:AlertProps = {
  type: AlertType.Success,
  description: '描述',
  className: 'describe'
}

const testClose:AlertProps = {
  closable: true
}
describe('test Alert Component',()=>{
  it('test default alert',()=>{
    const wapper = render(<Alert message="alert"></Alert>)
    const element = wapper.getByText('alert')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('alert alert-info')
  })

  it('test props',()=>{
    const wapper = render(<Alert message="alert" {...testProps}></Alert>)
    const element = wapper.getByText('alert')
    const describe = wapper.getByText('描述')
    expect(describe).toBeInTheDocument()
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('alert alert-success describe')
  })

  it('test closable',()=>{
    const wapper = render(<Alert message="alert" {...testClose}></Alert>)
    const element = wapper.getByText('alert')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('alert alert-info')
    const closable = wapper.getByText('关闭')
    expect(closable).toBeInTheDocument()
    fireEvent.click(closable)
    expect(closable).not.toBeInTheDocument()
  })
})