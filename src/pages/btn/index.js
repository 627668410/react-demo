import React, { Component } from 'react'
import Button, { ButtonType, ButtonSize } from '../../components/button'

class ButtonPage extends Component {
  render() {
    return (
      <>
        <Button>按钮</Button>
        <Button btnType={ButtonType.Primary}>primary</Button>
        <Button btnType={ButtonType.Primary} disabled>primary disabled</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>primary small</Button>
        <Button btnType={ButtonType.Danger}>danger</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com">link</Button>
      </>
    )
  }
}

export default ButtonPage
