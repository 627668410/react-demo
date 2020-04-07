import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';
import MenuLeft from './layout/menu';
import 'antd/dist/antd.css';
import './app.scss';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Row>
          <Col span="3" className="nav-left">
            <MenuLeft />
          </Col>
          <Col span="21">
            <Header />
            <Main />
            <Footer />
          </Col>
        </Row>
      </BrowserRouter>
    );
  }
}

export default App;
