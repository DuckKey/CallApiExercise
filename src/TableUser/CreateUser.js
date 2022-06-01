import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };

const CreateUser = () => {
    const navigate = useNavigate()
    const onFinish = async (values) => {
        try {
          await axios.post(`http://localhost:3000/users/`, values)
          navigate("/UserTable")
        }
        catch (error) {
          console.log("Error")
        }
      }
  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} >
        <Form.Item
        name='name'
        label="Name"
        rules={[
          {
            required: true,
            type:'tring'
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
          },{
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

export default CreateUser