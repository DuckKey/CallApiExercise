import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { Form, Input, Button, notification } from 'antd';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };

const DetailUser = () => {
    const [form] = Form.useForm()
    const {id} = useParams()
    const navigate = useNavigate()
    const onFinish = async (values) => {
          await axios.patch(`http://localhost:3000/users/${id}`, values)
          navigate("/UserTable")
        }
    useEffect(() => {
        loadDatas()
      },[])

    const loadDatas = async() => {
      try {
        const response = await axios(`http://localhost:3000/users/${id}`)
        form.setFieldsValue({
            name:response.data.name,
            username:response.data.username,
            email:response.data.email,
            phone:response.data.phone,
            website:response.data.website
        })
      }
      catch (error) {
        notification.error({
        message: 'Error',
        description:
          'Error',
      });
      }
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