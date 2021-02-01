/*
 * @Descripttion: 
 * @version: 
 * @Author: kgm
 * @Date: 2021-01-22 17:18:31
 * @LastEditors: kgm
 * @LastEditTime: 2021-02-01 16:58:49
 */
// import logo from './logo.svg';
import './App.css';
import React from "react"
import {
  BrowserRouter,
  Switch,
  Route,
   
} from "react-router-dom"
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Home from "./views/home"
import User from "./views/user"
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  handleClick = e => {
    console.log('click ', e);
    console.log(this.props)
    this.props.history.push(e.key)
  };
  render(){
  const { collapsed } = this.state;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}>
          <div className="logo">XXX系统</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.handleClick}>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2  
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="/home">Home</Menu.Item>
              <Menu.Item key="/user">User</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 500 }}>
              <BrowserRouter>
                <Switch>
                  {/* <Route path="/home?id=5555" component={Home}/> */}
                  <Route path="/home?id=5555">
                    <Home/>
                  </Route>
                  <Route path="/user">
                    <User/>
                  </Route>
                </Switch>
              </BrowserRouter>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
  );
  }
}

export default App;
