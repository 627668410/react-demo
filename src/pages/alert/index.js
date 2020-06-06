import React,{Component} from 'react'
import Alert, {AlertType} from '../../components/alert'

class AlertPage extends Component {
  render(){
    return(
      <>
        <Alert message="默认" closable description='描述'></Alert>
        {/* <Alert type={AlertType.Success} message="成功"></Alert> */}
      </>
    )
  }
}
export default AlertPage