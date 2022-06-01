import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };

const DetailUser = () => {
    const [dataGrid, setDataGrid] = useState([])
    const [loading, setLoading] = useState("")
    const [form] = Form.useForm()
    const {id} = useParams()
    const navigate = useNavigate()
    const onFinish = (values) => {
          axios.patch(`http://localhost:3000/users/${id}`, values)
          navigate("/UserTable")
        }
    useEffect(() => {
        LoadDatas()
      },[])

    const LoadDatas = async() => {
        setLoading(true)
        const response = await axios(`http://localhost:3000/users/${id}`)
        setDataGrid(response.data)
        form.setFieldsValue({
            name:response.data.name,
            username:response.data.username,
            email:response.data.email,
            phone:response.data.phone,
            website:response.data.website
        })
        setLoading(false)
    }
  return (
    <Form form={form} {...layout} name="nest-messages" onFinish={onFinish} >
        <Form.Item
        name='name'
        label="Name"
        rules={[
          {
            required: true,
          },
          {
            whitespace: true
          },
          {
            min: 3
          }
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='username'
        label="Username"
        rules={[
          {
            required: true,
          },
          {
            whitespace: true
          },
          {
            min: 3
          }
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='email'
        label="Email"
        rules={[
          {
            required: true,
          },
          {
            whitespace: true
          },
          {
            min: 3
          }
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='phone'
        label="Phone"
        rules={[
          {
            required: true,
          },
          {
            whitespace: true
          },
          {
            min: 3
          }
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='website'
        label="Website"
        rules={[
          {
            required: true,
          },
          {
            whitespace: true
          },
          {
            min: 3
          }
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default DetailUser