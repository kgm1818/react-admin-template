/*
 * @Descripttion: 
 * @version: 
 * @Author: kgm
 * @Date: 2021-02-02 10:26:10
 * @LastEditors: kgm
 * @LastEditTime: 2021-02-02 11:44:43
 */
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const menu = [
    {
        title: "模块一",
        path: "1",
        icon: PieChartOutlined,
        subMenu: [
            {
                title: "Home",
                path: "/home"
            },
            {
                title: "User",
                path: "/user"
            }
        ]
    },
    {
        title: "模块二",
        path: "2",
        icon: DesktopOutlined,
        subMenu: [
            {
                title: "2_1",
                path: "/2_1"
            }
        ]
    },
    {
        title: "模块三",
        path: "3",
        icon: UserOutlined,
        subMenu: [
            {
                title: "3_1",
                path: "/3_1"
            }
        ]
    },
]

export default menu