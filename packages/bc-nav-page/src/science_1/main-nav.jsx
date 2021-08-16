import React from 'react';
import Lottie from 'react-lottie';
import headBackground from './image/head-background.json';
import navBackground from './image/nav_bg.json';
import navSelBackground from './image/nav_bg_sel.json';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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

  navLottieRender = (index) => {
    const { selIndex } = this.props;
    const navBackgroundStyle = {
      position: 'absolute',
      zIndex: '1',
      top: 0,
      left: 0,
    };

    const navBackgroundHideStyle = {
      position: 'absolute',
      zIndex: '1',
      top: 0,
      left: 0,
      display: 'none',
    };

    return (
      <React.Fragment>
        <Lottie
          options={this.defaultOptions(3)}
          height={'100%'}
          width={'100%'}
          isStopped={false}
          isPaused={false}
          autoplay={true}
          style={
            selIndex === index ? navBackgroundStyle : navBackgroundHideStyle
          }
        />
        <Lottie
          options={this.defaultOptions(2)}
          height={'100%'}
          width={'100%'}
          isStopped={false}
          isPaused={false}
          autoplay={true}
          style={
            selIndex === index ? navBackgroundHideStyle : navBackgroundStyle
          }
        />
      </React.Fragment>
    );
  };

  render() {
    const { index, menu, selIndex } = this.props;
    return (
      <React.Fragment>
        <div className="nav-model">
          {this.navLottieRender(index)}
          <i
            className="icon"
            style={
              menu.iconCustom && menu.iconCustomUrl
                ? {
                    background: `url(${
                      menu.iconCustomSelUrl || menu.iconCustomUrl
                    }) center center / cover no-repeat`,
                    display: selIndex === index ? 'block' : 'none',
                  }
                : {
                    background: `url(${require('./../image/science-sel/' +
                      menu.icon +
                      '.svg')}) center center / cover no-repeat`,
                    display: selIndex === index ? 'block' : 'none',
                  }
            }
          />
          <i
            className="icon"
            style={
              menu.iconCustom && menu.iconCustomUrl
                ? {
                    background: `url(${menu.iconCustomUrl}) center center / cover no-repeat`,
                    display: selIndex !== index ? 'block' : 'none',
                  }
                : {
                    background: `url(${require('./../image/science/' +
                      menu.icon +
                      '.svg')}) center center / cover no-repeat`,
                    display: selIndex !== index ? 'block' : 'none',
                  }
            }
          ></i>
        </div>
        <div className="nav-name">{menu.name}</div>
      </React.Fragment>
    );
  }
}

export default MainNav;
