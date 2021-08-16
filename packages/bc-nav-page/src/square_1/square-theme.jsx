import React, { Component } from 'react';
import OperateButtons from '../component/operate-buttons';
import { NavLink } from 'react-router-dom';
import { navNumberClass } from '../util/nav-number-class';
import './less/index.less';

class SquareTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onMenuClick = (menu) => {
    menu.menuClick && menu.menuClick(menu.menuKey);
  };

  /**
   * @description
   * 根据导航数量定义不同的className
   * @memberof SquareTheme
   * type=1是左侧classname/type=2是右侧classname
   */
  navContentClassName = (type, length) => {
    let mainClassName = '';
    if (type === 1) {
      mainClassName = 'main-nav-content';
    } else if (type === 2) {
      mainClassName = 'extra-nav-content';
    }
    let numberClassName = navNumberClass(length, 4, 6);
    return mainClassName + ' ' + numberClassName;
  };

  /**
   * @name: clickNav
   * @desc: 点击导航 - 自定义函数
   * @param {menu} props中的menu对象
   */
  clickNav = (e, menu) => {
    e.preventDefault();
    let menuObj = { ...menu };
    delete menuObj.clickCustom;
    menu.clickCustom(menuObj);
  };

  navShow = (type, list) => {
    let NavRender = ({ menu }) => {
      return menu.bgShow && menu.bgShowUrl ? (
        <div className="nav-bg-show">
          <img src={menu.bgShowUrl} />
          <p>{menu.name}</p>
        </div>
      ) : (
        <div>
          <i
            className="icon"
            style={
              menu.iconCustom && menu.iconCustomUrl
                ? {
                    background: `url(${menu.iconCustomUrl}) center center / 80% 80% no-repeat`,
                  }
                : {
                    background: `url(${require('./../image/light/' +
                      menu.icon +
                      '.svg')}) center center / 80% 80% no-repeat`,
                  }
            }
          ></i>
          <p>{menu.name}</p>
        </div>
      );
    };
    return (
      list.length > 0 &&
      list.map((menu, index) => {
        return menu.clickCustom ? (
          <a
            key={type + '-' + index}
            className="modules"
            onClick={(e) => this.clickNav(e, menu)}
          >
            <NavRender menu={menu} />
          </a>
        ) : (
          <NavLink key={type + '-' + index} to={menu.url} className="modules">
            <NavRender menu={menu} />
          </NavLink>
        );
      })
    );
  };

  /**
   * @description
   * 功能模块
   * @memberof SquareTheme
   */
  mainNavContent = () => {
    const { navList } = this.props;
    return (
      <div className={this.navContentClassName(1, navList.length)}>
        {this.navShow('main-nav', navList)}
      </div>
    );
  };

  /**
   * @description
   * 配置模块
   * @memberof SquareTheme
   */
  extraNavContent = () => {
    const { extraList } = this.props;
    return (
      <div className={this.navContentClassName(2, extraList.length)}>
        {this.navShow('extra-nav', extraList)}
      </div>
    );
  };

  render() {
    const {
      projectTitle,
      projectIcon,
      projectIconShow,
      theme,
      userMenu,
      settingMenu,
      navTitle,
      extraTitle,
    } = this.props;
    let themeClassName = {
      science: ' science',
      dark: ' dark',
      light: ' light',
    }[theme];

    return (
      <div
        className={
          'square-theme-nav main-nav-component' + (themeClassName || ' science')
        }
      >
        <header>
          <div>
            {projectIconShow ? (
              projectIcon ? (
                <i
                  className="logo"
                  style={{
                    background:
                      'url(' +
                      projectIcon +
                      ')  center center / cover no-repeat',
                  }}
                ></i>
              ) : (
                <i className="logo"></i>
              )
            ) : null}
            <span className="project-title">{projectTitle}</span>
          </div>
          <OperateButtons
            userMenu={userMenu}
            settingMenu={settingMenu}
            theme={theme}
          />
        </header>
        <content>
          <div className="left-nav-content">
            <div className="content-title">{navTitle}</div>
            {this.mainNavContent()}
          </div>
          <div className="right-nav-content">
            <div className="content-title">{extraTitle}</div>
            {this.extraNavContent()}
          </div>
        </content>
      </div>
    );
  }
}

export default SquareTheme;
