/*
 * @Descripttion: 
 * @version: 
 * @Author: kgm
 * @Date: 2021-02-02 11:32:33
 * @LastEditors: kgm
 * @LastEditTime: 2021-02-02 11:47:41
 */
import Home from "../views/home"
import User from "../views/user"
const routes = [
    {
        path: "/home",
        exact: false,
        name: "Home",
        component: Home
    },
    {
        path: "/user",
        exact: false,
        name: "User",
        component: User
    },
]

export default routes

