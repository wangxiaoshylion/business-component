import React from 'react';
import { NavLink } from 'react-router-dom';
import OperateButtons from '../component/operate-buttons';
import { navNumberClass } from '../util/nav-number-class';

import MainNav from './main-nav';

import Lottie from 'react-lottie';
import bgModelsCenter from './image/bg_models_center.json';
import bgModelNav from './image/bg_model.json';
import bgExtraNav from './image/nav_model.json';
import bgExtraNavSel from './image/nav_model_sel.json';

import './less/index.less';

class RotateNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      headerClassName: 'hide',
      navBackgourndWidth: '0vh',
      navClassName: 'hide',
      selMainIndex: null, // 默认导航选中
      selExtraIndex: null, // 默认下半部分选中
    };
  }

  componentDidMount() {
    this.isImgLoaded();
  }

  componentWillUnmount() {
    this.changeBackgourndWidthTimer &&
      clearTimeout(this.changeBackgourndWidthTimer);
  }

  /**
   * @description
   * 判断背景图生成完之后再开始头部特效，防止因为动效一闪而过
   * @memberof RotateNav
   */
  isImgLoaded = () => {
    // const img = new Image();
    // img.onload = () => {
    setTimeout(() => {
      this.setState({
        headerClassName: 'header',
      });
      // 中间圆环背景动效
      this.changeNavBackgournd();
    }, 100);
    // }
    // img.src = require('./image/background.png');
  };

  changeNavBackgournd = () => {
    this.changeBackgourndWidthTimer = setTimeout(() => {
      this.setState({
        navBackgourndWidth: '48vh',
      });
    }, 100);
  };

  /**
   * @description
   * 根据导航个数判定className命名
   * @memberof ScienceNav
   */
  navContentClassName = (min, max) => {
    const { navList = [] } = this.props;
    let mainClassName = 'nav-content';
    let numberClassName = navNumberClass(navList.length, min, max);
    return mainClassName + ' ' + numberClassName;
  };

  /**
   * @description
   * 动效默认配置
   * @memberof RotateNav
   */
  defaultOptions = (type) => {
    let data = {
      1: bgModelsCenter,
      2: bgModelNav,
      3: bgExtraNav,
      5: bgExtraNavSel,
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

  changeIcon = (index, type) => {
    if (type === 1) {
      this.setState({
        selExtraIndex: index,
      });
    } else if (type === 2) {
      this.setState({
        selExtraIndex: null,
      });
    } else if (type === 3) {
      this.setState({
        selMainIndex: index,
      });
    } else if (type === 4) {
      this.setState({
        selMainIndex: null,
      });
    }
  };

  render() {
    const {
      projectTitle,
      projectIcon,
      projectIconShow,
      navList,
      extraList,
      userMenu,
      settingMenu,
    } = this.props;
    const { headerClassName, navBackgourndWidth, selExtraIndex } = this.state;
    const centerBackgroundStyle = {
      transition: 'all 0.625s',
    };
    const extraNavbackgroundStyle = {
      position: 'absolute',
      zIndex: '1',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    let ExtraNav = ({ menu, index }) => {
      return (
        <React.Fragment>
          <div className="nav-name">
            <span>{menu.name}</span>
          </div>
          {selExtraIndex === index ? (
            <Lottie
              options={this.defaultOptions(5)}
              isStopped={false}
              isPaused={false}
              autoplay={true}
              style={extraNavbackgroundStyle}
            />
          ) : (
            <Lottie
              options={this.defaultOptions(3)}
              isStopped={false}
              isPaused={false}
              autoplay={true}
              style={extraNavbackgroundStyle}
            />
          )}
        </React.Fragment>
      );
    };
    return (
      <div className="rotate-nav main-nav-component">
        <header className={headerClassName}>
          <div className="title-bar left-bar"></div>
          <div className="project-title">{projectTitle}</div>
          <div className="title-bar right-bar"></div>
          <OperateButtons
            userMenu={userMenu}
            settingMenu={settingMenu}
            theme={'science'}
          />
        </header>
        <content className={!!extraList.length ? 'main-nav' : 'main-nav big'}>
          <div className={this.navContentClassName(4, 6)}>
            {!!navList.length &&
              navList.map((menu, index) => {
                return <MainNav key={index} menu={menu} index={index} />;
              })}
          </div>
          <div className="center-bg-content">
            <Lottie
              options={this.defaultOptions(1)}
              height={navBackgourndWidth}
              width={navBackgourndWidth}
              isStopped={false}
              isPaused={false}
              autoplay={true}
              style={centerBackgroundStyle}
            />
          </div>
          <div className="logo-content">
            {projectIconShow ? (
              projectIcon ? (
                <i
                  className="nav-logo"
                  style={{
                    background:
                      'url(' +
                      projectIcon +
                      ')  center center / cover no-repeat',
                  }}
                ></i>
              ) : (
                <i className="nav-logo"></i>
              )
            ) : null}
          </div>
        </content>
        {!!extraList.length && (
          <content className="extra-nav">
            <div className={this.navContentClassName(4, 6)}>
              {extraList.map((extraMenu, extraIndex) => {
                return extraMenu.clickCustom ? (
                  <a
                    key={extraIndex}
                    onClick={(e) => this.clickNav(e, extraMenu)}
                    onMouseEnter={() => this.changeIcon(extraIndex, 1)}
                    onMouseLeave={() => this.changeIcon(extraIndex, 2)}
                  >
                    <ExtraNav menu={extraMenu} index={extraIndex} />
                  </a>
                ) : (
                  <NavLink
                    key={extraIndex}
                    to={extraMenu.url}
                    onMouseEnter={() => this.changeIcon(extraIndex, 1)}
                    onMouseLeave={() => this.changeIcon(extraIndex, 2)}
                  >
                    <ExtraNav menu={extraMenu} index={extraIndex} />
                  </NavLink>
                );
              })}
            </div>
          </content>
        )}
      </div>
    );
  }
}

export default RotateNav;
