import React, { Component } from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import menuConfig from '@/utils/menuConfig';
import './index.scss';
const { SubMenu } = Menu;
@withRouter
class MenuLeft extends Component {
  render() {
    if (!Array.isArray(menuConfig)) return (<></>);
    const defaultSelectedKeys = menuConfig[0] ? menuConfig[0].path : '';
    const { location } = this.props;
    const selectedKey = location.pathname;
    return (
      <>
        <Link to="/home" className="home-title">
          React Demo
        </Link>
        <Menu
          className="menu-left"
          defaultSelectedKeys={defaultSelectedKeys}
          selectedKeys={selectedKey}
          mode="inline"
          theme="dark"
        >
          {this.renderMenu(menuConfig)}
        </Menu>
      </>
    );
  }
  renderMenu = (menuData) => {
    return menuData.map((menu) => {
      if (menu.children) {
        return (
          <SubMenu key={menu.path} title={menu.name}>
            {this.renderMenu(menu.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={menu.path}>
          <Link to={menu.path}>{menu.name}</Link>
        </Menu.Item>
      );
    });
  };
}
export default MenuLeft;
