/*
 * @Descripttion: 
 * @version: 
 * @Author: kgm
 * @Date: 2021-02-02 09:16:00
 * @LastEditors: kgm
 * @LastEditTime: 2021-02-07 09:34:36
 */
import "./index.css"
import React, { Fragment } from "react"
import {
  Switch,
  Route,
} from "react-router-dom"
import { Layout, Menu, Breadcrumb, Avatar, Badge } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
  UserOutlined
} from '@ant-design/icons';
import _Menu from "../../utils/menu"
import routes from "../../routes"
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class _Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
    };
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed: !this.state.collapsed, });
  };
  handleClick = e => {
    console.log('click ', e);
    console.log(this.props)
    this.props.history.push(e.key)
  };
  renderMenuItem = (path, _icon, title) => {
    return(
      <Menu.Item 
       key={path} 
       icon={<_icon/>}
      >{title}</Menu.Item>
    )
  };
  renderSubMenu = (path, _icon, title, subMenu) => {
    return(
      <SubMenu key={path} icon={<_icon/>} title={title}>
        {
          subMenu.map( sub => {
            return (
              <Menu.Item key={sub.path}>{sub.title}</Menu.Item>
            )
          })
        }
      </SubMenu>
    )
  };
  render(){
    const { collapsed } = this.state;
    return (
      <Fragment>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}
         style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
        >
          <div className="logo">React系统模板</div>
          <Menu theme="dark" 
           defaultSelectedKeys={['1']}
           mode="inline" 
           onClick={this.handleClick}>
            {
              _Menu.map(item => {
                if (item.subMenu) {
                  return this.renderSubMenu(item.path, item.icon, item.title, item.subMenu)
                } else {
                  return this.renderMenuItem(item.path, item.icon, item.title)
                }
              })
            }
          </Menu>
        </Sider>
        <Layout className="site-layout"  style={{ marginLeft: collapsed ? '80px' : '200px'}}>
          <Header className={collapsed ? 'header-box80' : 'header-box200'}
           style={{ position: 'fixed', zIndex: 1, background: '#fff'}}>
          { React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.onCollapse,
            })}
            <div className="avatar-block">
              <Badge count={5} size="small">
                <BellOutlined style={{fontSize: '22px'}}/>
              </Badge>
              <Avatar size={48} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
          </Header>
          <Content style={{ margin: '0 16px',marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 600 }}>
              <Switch>
                {
                  routes.map( item => {
                    return(
                      <Route 
                       path={item.path} 
                       component={item.component}
                       key={item.name}
                      />
                    )
                  })
                }
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
      </Fragment>  
    )
  };
}

export default _Layout;