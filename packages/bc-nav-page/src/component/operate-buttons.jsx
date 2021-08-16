import React, { Component } from 'react';
import { Dropdown, Menu } from 'antd';
import { isEqual } from 'lodash';
import './index.less';

class OperateButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      !isEqual(this.props.userMenu, nextProps.userMenu) ||
      !isEqual(this.props.settingMenu, nextProps.settingMenu) ||
      !isEqual(this.props.theme, nextProps.theme)
    ) {
      return true;
    } else {
      return false;
    }
  }

  onMenuClick = (menu) => {
    menu.menuClick && menu.menuClick(menu.menuKey);
  };

  render() {
    const { userMenu, settingMenu, theme } = this.props;
    let themeClassName = {
      science: ' science',
      dark: ' dark',
      light: ' light',
    }[theme];

    const userMenuDropDown = (
      <Menu>
        {userMenu.map((menu, index) => {
          return (
            <Menu.Item
              key={menu.menuKey + index}
              onClick={() => this.onMenuClick(menu, index)}
            >
              {menu.menuName}
            </Menu.Item>
          );
        })}
      </Menu>
    );

    const settingMenuDropDown = (
      <Menu>
        {settingMenu.map((menu, index) => {
          return (
            <Menu.Item
              key={menu.menuKey + index}
              onClick={() => this.onMenuClick(menu, index)}
            >
              {menu.menuName}
            </Menu.Item>
          );
        })}
      </Menu>
    );

    return (
      <div className={'operate-buttons' + (themeClassName || ' science')}>
        {userMenu.length > 0 ? (
          <Dropdown
            overlay={userMenuDropDown}
            placement="bottomCenter"
            overlayClassName={'drop-down' + (themeClassName || ' science')}
          >
            <span className="operate-icon-user"></span>
          </Dropdown>
        ) : null}
        {settingMenu.length > 0 ? (
          <Dropdown
            overlay={settingMenuDropDown}
            placement="bottomCenter"
            overlayClassName={'drop-down' + (themeClassName || ' science')}
          >
            <span className="operate-icon-setting"></span>
          </Dropdown>
        ) : null}
      </div>
    );
  }
}

export default OperateButtons;
