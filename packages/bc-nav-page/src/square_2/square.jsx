import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import OperateButtons from '../component/operate-buttons';
import { navNumberClass } from '../util/nav-number-class';
import './less/index.less';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * @name: navContentClassName
   * @desc: 定义nav的className
   */
  navContentClassName = () => {
    const { navList = [] } = this.props;
    let mainClassName = 'nav-content';
    let numberClassName = navNumberClass(navList.length, 6, 8);
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

  mainNavContent = () => {
    const { navList } = this.props;
    let MainNav = ({ menu }) => {
      return (
        <React.Fragment>
          <div>
            <i
              className="icon"
              style={
                menu.iconCustom && menu.iconCustomUrl
                  ? {
                      background: `url(${menu.iconCustomUrl}) center center / 80% 80% no-repeat`,
                    }
                  : {
                      background: `url(${require('./../image/color/' +
                        menu.icon +
                        '.svg')}) center center / 80% 80% no-repeat`,
                    }
              }
            ></i>
          </div>
          <p>{menu.name}</p>
        </React.Fragment>
      );
    };
    return (
      <React.Fragment>
        {navList.length > 0 &&
          navList.map((menu, index) => {
            return menu.clickCustom ? (
              <a
                key={'main-nav-' + index}
                className="modules"
                onClick={(e) => this.clickNav(e, menu)}
              >
                <MainNav menu={menu} />
              </a>
            ) : (
              <NavLink
                key={'main-nav-' + index}
                to={menu.url}
                className="modules"
              >
                <MainNav menu={menu} />
              </NavLink>
            );
          })}
      </React.Fragment>
    );
  };

  render() {
    const {
      projectTitle,
      projectIcon,
      projectIconShow,
      theme = 'bg_1',
      userMenu = [],
      settingMenu = [],
    } = this.props;
    let themeClassName = {
      bg_1: ' bg_1',
      bg_2: ' bg_2',
      bg_3: ' bg_3',
    }[theme];
    return (
      <div
        className={
          'square-nav main-nav-component' + (themeClassName || ' bg_1')
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
            theme={'light'}
          />
        </header>
        <content className={this.navContentClassName()}>
          {this.mainNavContent()}
        </content>
      </div>
    );
  }
}

export default Square;
