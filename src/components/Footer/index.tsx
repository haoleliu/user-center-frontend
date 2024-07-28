import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
const Footer: React.FC = () => {



  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'authorblog',
          title: '作者博客',
          href: 'https://www.cnblogs.com/vastjoy',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />author github</>,
          href: 'https://github.com/haoleliu',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}

    />
  );
};

export default Footer;
