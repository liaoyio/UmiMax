import { LogoutOutlined, UserOutlined } from "@ant-design/icons"
import { Dropdown } from "antd"

export default ({ dom }: any) => {
  const items = [
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
  return (
    <Dropdown menu={{ items: items }}>{dom}</Dropdown>
  )
}


