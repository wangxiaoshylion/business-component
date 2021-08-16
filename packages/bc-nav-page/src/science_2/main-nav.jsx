import React from 'react';
import Lottie from 'react-lottie';
import { NavLink } from 'react-router-dom';
import bgModelNav from './image/bg_model.json';

class MainNav extends React.Component {
  state = {
    selMainIndex: null,
  };
  /**
   * @description
   * 动效默认配置
   * @memberof RotateNav
   */
  defaultOptions = () => {
    let data = bgModelNav;
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
    const { menu, index } = this.props;
    const { selMainIndex } = this.state;

    const navBackgroundStyle = {
      position: 'absolute',
      zIndex: '1',
      top: 0,
      left: 0,
      transition: 'all 0.625s',
    };

    let BgNav = () => {
      return (
        <React.Fragment>
          <div className="nav-name">
            <span>{menu.name}</span>
          </div>
          {selMainIndex === index ? (
            <div className="sel-main-nav"></div>
          ) : (
            <Lottie
              options={this.defaultOptions(2)}
              height={'100%'}
              width={'100%'}
              isStopped={false}
              isPaused={false}
              autoplay={true}
              style={navBackgroundStyle}
            />
          )}
        </React.Fragment>
      );
    };

    return menu.clickCustom ? (
      <a
        onClick={(e) => this.clickNav(e, menu)}
        onMouseEnter={() => this.changeIcon(index, 3)}
        onMouseLeave={() => this.changeIcon(index, 4)}
      >
        <BgNav />
      </a>
    ) : (
      <NavLink
        to={menu.url}
        onMouseEnter={() => this.changeIcon(index, 3)}
        onMouseLeave={() => this.changeIcon(index, 4)}
      >
        <BgNav />
      </NavLink>
    );
  }
}

export default MainNav;
