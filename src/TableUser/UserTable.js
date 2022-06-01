import { Button, Table, Popconfirm } from 'antd'
import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";

const UserTable = () => {
  const [dataGrid, setDataGird] = useState([])
  const [loading, setLoading] = useState("")

  useEffect(() => {
    LoadDatas()
  },[])

  const LoadDatas = async() => {
    setLoading(true)
    const response = await axios("http://localhost:3000/users")
    setDataGird(response.data)
    setLoading(false)
  }

  const DataWithAge = dataGrid.map((item) =>({
    ...item,
    age: Math.floor(Math.random() * 6) + 20
  }))

  const handleDelete = (value) => {
    const newDatas = [...modifiedData]
    const filterData = newDatas.filter((item) => item.id !== value.id)
    setDataGird(filterData)
  }

  const modifiedData = DataWithAge.map(({...item}) => ({
    ...item,
    key:item.id,
  }))

  const columns = [
  {
      title:"ID",
      dataIndex:"id"
  },
  {
      title:"Name",
      dataIndex:"name",
      align:"center",
  },
  {
      title:"Age",
      dataIndex:"age",
      align:"center",
  },
  {
      title:"Username",
      dataIndex:"username",
      align:"center",
  },
  {
      title:"Email",
      dataIndex:"email",
      align:"center",
  },
  {
      title:"Phone",
      dataIndex:"phone",
      align:"center",
  },
  {
      title:"Website",
      dataIndex:"website",
      align:"center",
  },
  {
      title:"Action",
      dataIndex:"action",
      align:"center",
      render: (_, record) => {
      return modifiedData.length >= 1 ? (
        <span>
          <Popconfirm     
              title="Are u sure want to delete ?" 
              onConfirm={() => handleDelete(record)}
              >
              <Button danger type='primary' style={{marginRight: 8}}>
                  Delete
              </Button>
          </Popconfirm>
          <Button type='primary'>
          <Link to={`/DetailUser/${record.id}`}>Detail</Link>
          </Button>
        </span>
      ) : null
    }
  }
]
  return (
      <div>
          <Table 
              columns={columns}
              dataSource={modifiedData}
              bordered
              loading={loading}
          />
      </div>
  )
}

export default UserTable