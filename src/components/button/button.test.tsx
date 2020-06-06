import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from './index'
const defaultProps = {
  onClick: jest.fn()
}

const testProps:ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'button'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}
describe('test button component', () => {
  it('test default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element.disabled).toBeFalsy()
    expect(element).toHaveClass('btn btn-default') // jest-dom里的方法
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('test props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn btn-primary btn-lg button')
  })
  it('test link', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="https://www.baidu.com">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link') // jest-dom里的方法
  })
  it('test disabled', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
