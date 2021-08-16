import React from 'react';
import { NavLink } from 'react-router-dom';
import OperateButtons from '../component/operate-buttons';
import { navNumberClass } from '../util/nav-number-class';

import Lottie from 'react-lottie';
import headBackground from './image/head-background.json';
import navBackground from './image/nav_bg.json';
import navSelBackground from './image/nav_bg_sel.json';
import MainNav from './main-nav';

import './less/index.less';

class ScienceNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selIndex: null,
    };
  }

  componentDidMount() {}

  /**
   * @description
   * 移入移出绑定事件
   * @param {*} index
   * @param {*} type
   */
  changeIcon = (index, type) => {
    if (type === 1) {
      this.setState({
        selIndex: index,
      });
    } else {
      this.setState({
        selIndex: null,
      });
    }
  };

  /**
   * @description
   * 特效配置
   * @memberof ScienceNav
   */
  defaultOptions = (type) => {
    let data = {
      1: headBackground,
      2: navBackground,
      3: navSelBackground,
    }[type];
    return {
      loop: true,
      autoplay: true,
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
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

  /**
   * @description
   * 根据导航个数判定className命名
   * @memberof ScienceNav
   */
  navContentClassName = () => {
    const { navList = [] } = this.props;
    let numberClassName = navNumberClass(navList.length, 6, 8);
    return numberClassName;
  };

  render() {
    const {
      projectTitle,
      projectIcon,
      projectIconShow,
      navList,
      userMenu,
      settingMenu,
    } = this.props;
    const { selIndex } = this.state;

    const headBackgroundStyle = {
      position: 'absolute',
      zIndex: '1',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    };

    return (
      <div className="science-nav main-nav-component">
        <header>
          <Lottie
            options={this.defaultOptions(1)}
            // width={'100vw'}
            width={'100%'}
            height={'auto'}
            isStopped={false}
            isPaused={false}
            autoplay={true}
            style={headBackgroundStyle}
          />
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
            theme={'science'}
          />
        </header>
        <content className={this.navContentClassName()}>
          {!!navList.length &&
            navList.map((menu, index) => {
              return (
                <div
                  className="nav"
                  key={index}
                  onMouseEnter={() => this.changeIcon(index, 1)}
                  onMouseLeave={() => this.changeIcon(index, 2)}
                >
                  {menu.clickCustom ? (
                    <a
                      onClick={(e) => this.clickNav(e, menu)}
                      className="modules"
                    >
                      <MainNav menu={menu} selIndex={selIndex} index={index} />
                    </a>
                  ) : (
                    <NavLink to={menu.url} className="modules">
                      <MainNav menu={menu} selIndex={selIndex} index={index} />
                    </NavLink>
                  )}
                </div>
              );
            })}
        </content>
      </div>
    );
  }
}

export default ScienceNav;
