import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScienceNav from './science_1/science-nav';
import RotateNav from './science_2/rotate-nav';
import SquareTheme from './square_1/square-theme';
import Square from './square_2/square';
import './less/index.less';

class MainNavComponent extends Component {
  static defaultProps = {
    navTpye: 'science_1',
    projectTitle: 'XXX模块监控平台',
    projectIconUrl: '',
    projectIconShow: true,
    theme: 'science',
    background: 1,
    navList: [],
    navTitle: '功能模块',
    extraTitle: '配置管理',
    userMenu: [],
    settingMenu: [],
  };

  static propTypes = {
    navTpye: PropTypes.oneOf([
      'science_1',
      'square_1',
      'science_2',
      'square_2',
    ]),
    projectTitle: PropTypes.string,
    projectIcon: PropTypes.string,
    theme: PropTypes.string,
    projectIconShow: PropTypes.bool,
    navList: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        clickCustom: PropTypes.func,
      }),
    ),
    extraList: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        clickCustom: PropTypes.func,
      }),
    ),
    userMenu: PropTypes.arrayOf(
      PropTypes.shape({
        menuName: PropTypes.string.isRequired,
        menuKey: PropTypes.string.isRequired,
        menuClick: PropTypes.func,
      }),
    ),
    settingMenu: PropTypes.arrayOf(
      PropTypes.shape({
        menuName: PropTypes.string.isRequired,
        menuKey: PropTypes.string.isRequired,
        menuClick: PropTypes.func,
      }),
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      navList: [],
      extraList: [],
    };
  }

  componentDidMount() {
    this.limitNavList();
    this.limitExtraList();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.navTpye !== this.props.navTpye) {
      this.limitNavList();
      this.limitExtraList();
    }
  }

  /**
   * @description
   * 限制navList个数
   * @memberof MainNavComponent
   */
  limitNavList = () => {
    const { navList, navTpye } = this.props;
    let newNavList = navList;
    if (navList && navList.length) {
      if (navTpye === 'science_1' || navTpye === 'square_2') {
        if (navList.length > 8) {
          newNavList = newNavList.slice(0, 8);
        } else if (navList.length < 6) {
          const index = newNavList.length - 1;
          newNavList.length = 6;
          newNavList.fill(navList[index], index, 6);
        }
      } else if (navTpye === 'science_2' || navTpye === 'square_1') {
        if (navList.length > 6) {
          newNavList = newNavList.slice(0, 6);
        } else if (navList.length < 4) {
          const index = newNavList.length - 1;
          newNavList.length = 4;
          newNavList.fill(navList[index], index, 4);
        }
      }
    }
    this.setState({
      navList: newNavList,
    });
  };

  /**
   * @description
   * 限制extraList个数
   * @memberof MainNavComponent
   */
  limitExtraList = () => {
    const { extraList } = this.props;
    let newExtraList = extraList || [];
    if (extraList && extraList.length) {
      if (extraList.length > 6) {
        newExtraList = newExtraList.slice(0, 6);
      } else if (extraList.length < 4) {
        const index = newExtraList.length - 1;
        newExtraList.length = 4;
        newExtraList.fill(extraList[index], index, 4);
      }
    }
    this.setState({
      extraList: newExtraList,
    });
  };

  render() {
    const {
      navTpye,
      projectTitle,
      theme,
      projectIcon,
      projectIconShow,
      userMenu,
      settingMenu,
      navTitle,
      extraTitle,
    } = this.props;
    const { navList, extraList } = this.state;
    return (
      <React.Fragment>
        {navTpye === 'science_1' ? (
          <ScienceNav
            projectTitle={projectTitle}
            navList={navList}
            projectIcon={projectIcon}
            projectIconShow={projectIconShow}
            userMenu={userMenu}
            settingMenu={settingMenu}
          />
        ) : null}
        {navTpye === 'science_2' ? (
          <RotateNav
            projectTitle={projectTitle}
            projectIcon={projectIcon}
            projectIconShow={projectIconShow}
            navList={navList}
            extraList={extraList}
            userMenu={userMenu}
            settingMenu={settingMenu}
          />
        ) : null}
        {navTpye === 'square_1' ? (
          <SquareTheme
            projectTitle={projectTitle}
            projectIcon={projectIcon}
            projectIconShow={projectIconShow}
            navList={navList}
            extraList={extraList}
            theme={theme}
            userMenu={userMenu}
            settingMenu={settingMenu}
            navTitle={navTitle}
            extraTitle={extraTitle}
          />
        ) : null}
        {navTpye === 'square_2' ? (
          <Square
            projectTitle={projectTitle}
            projectIcon={projectIcon}
            projectIconShow={projectIconShow}
            navList={navList}
            theme={theme}
            userMenu={userMenu}
            settingMenu={settingMenu}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default MainNavComponent;
