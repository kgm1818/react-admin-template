/*
 * @Descripttion: 
 * @version: 
 * @Author: kgm
 * @Date: 2021-01-27 11:33:35
 * @LastEditors: kgm
 * @LastEditTime: 2021-02-05 14:17:19
 */
import "./index.css"
import React, { Component } from "react"
import { Table, Input, Button } from 'antd';
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
      },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Delete</a>,
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  
class Home extends Component {
  render(){
    return (
      <div>
        <div className="input-box-search">
          <div className="input-box-demo">
            <label className="label">name:</label>
            <Input placeholder="Basic usage" className="input-middle"/>
          </div>
          <div className="input-box-demo">
            <label className="label">name:</label>
            <Input placeholder="Basic usage" className="input-middle"/>
          </div>
          <div className="input-box-demo">
            <label className="label">name:</label>
            <Input placeholder="Basic usage" className="input-middle"/>
          </div>
          <div className="input-box-demo">
            <label className="label">name:</label>
            <Input placeholder="Basic usage" className="input-middle"/>
          </div>
          <div className="input-box-demo">
            <label className="label">name:</label>
            <Input placeholder="Basic usage" className="input-middle"/>
          </div>
          <div className="btn-input-box">
            <Button type="primary">Search</Button>
            <Button>Reset</Button>
          </div>
        </div>
        <Table columns={columns} dataSource={data} size="small" 
          pagination={{
            total: 50,
            defaultPageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true
          }}
        />
      </div>
    )
  }
}
export default Home