/*
 * @Descripttion: 
 * @version: 
 * @Author: kgm
 * @Date: 2021-02-02 09:16:00
 * @LastEditors: kgm
 * @LastEditTime: 2021-02-02 11:57:19
 */
import "./index.css"
import React from "react"
import {
  Switch,
  Route,
} from "react-router-dom"
import { Layout, Menu, Breadcrumb } from 'antd';
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
          <div className="logo">React系统</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.handleClick}>
            {
                _Menu.map(item => {
                    if (item.subMenu) {
                        return(
                            <SubMenu key={item.path} icon={<item.icon/>} title={item.title}>
                                {
                                    item.subMenu.map( sub => {
                                        return (
                                            <Menu.Item key={sub.path}>{sub.title}</Menu.Item>
                                        )
                                    })
                                }
                            </SubMenu>
                        )
                    } else {
                        return(
                            <Menu.Item key={item.path} icon={<item.icon />}>{item.title}</Menu.Item>
                        )
                    }
                })
            }
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
  );
  }
}

export default _Layout;