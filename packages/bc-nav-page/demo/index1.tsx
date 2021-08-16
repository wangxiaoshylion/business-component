import { useState } from 'react';
import { Drawer, Button } from 'antd';
import MainNavComponent from '@wxshylion/bc-nav-page';
import { config } from './config';

const Demo1: React.FC<any> = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [navTpye, setNavType] = useState<string>('science_1');
  const [theme, setTheme] = useState<string>('light');

  const {
    projectIconShow,
    navList,
    projectTitle,
    extraList,
    navTitle,
    extraTitle,
  } = config;

  /** 切换皮肤 */
  const themeChange = (key, theme?: string) => {
    setNavType(key);
    theme && setTheme(theme);
  };

  return (
    <>
      <Button type="primary" onClick={() => setVisible(!visible)}>
        测试查看
      </Button>
      <Drawer
        title=""
        placement="right"
        closable={false}
        visible={visible}
        width="100vw"
      >
        <MainNavComponent
          navTpye={navTpye}
          navList={navList}
          projectTitle={projectTitle}
          projectIconShow={projectIconShow}
          theme={theme}
          extraList={extraList}
          userMenu={[
            {
              menuName: '退出登陆',
              menuKey: 'exit-system',
              menuClick: (key) => key && setVisible(false),
            },
          ]}
          settingMenu={[
            {
              menuName: '科技风1',
              menuKey: 'science_1',
              menuClick: themeChange,
            },
            {
              menuName: '科技风2',
              menuKey: 'science_2',
              menuClick: themeChange,
            },
            {
              menuName: '科技风-扁平化1',
              menuKey: 'square_1',
              menuClick: (key) => themeChange(key, 'science'),
            },
            {
              menuName: '暗黑-扁平化1',
              menuKey: 'square_1',
              menuClick: (key) => themeChange(key, 'dark'),
            },
            {
              menuName: 'bg1-扁平化1',
              menuKey: 'square_1',
              menuClick: (key) => themeChange(key, 'bg_1'),
            },
            {
              menuName: 'bg2-扁平化2',
              menuKey: 'square_2',
              menuClick: (key) => themeChange(key, 'bg_2'),
            },
            {
              menuName: 'bg3-扁平化2',
              menuKey: 'square_2',
              menuClick: (key) => themeChange(key, 'bg_3'),
            },
          ]}
          navTitle={navTitle}
          extraTitle={extraTitle}
        />
      </Drawer>
    </>
  );
};
export default Demo1;
