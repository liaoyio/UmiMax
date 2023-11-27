import { LogoutOutlined, UserOutlined } from "@ant-design/icons"
import { Dropdown, MenuProps, message } from "antd"

const items: MenuProps['items'] = [
  {
    key: 'personal',
    icon: <UserOutlined />,
    label: '个人中心',
  },
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    label: '退出登录',
  },
]
export default ({ dom }: any) => {

  const DropdownOnClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  return (
    <Dropdown menu={{ items: items, onClick: DropdownOnClick }}>{dom}</Dropdown>
  )
}


