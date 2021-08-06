import { Form, Input, Button, Checkbox, Alert } from 'antd';
import './SignUp.css';
import AuthService from '../services/AuthService';
import { useState } from 'react';

interface IloginForm {
  username: string;
  password: string;
  rePassword: string;
  remember: boolean;
}

function SignUp() {
  const authService = new AuthService();
  const [error, setError] = useState<string>('');


  //TODO: 아이디 비밀번호 기억 쿠키에 저장하던지 처리 해줘야함.
  const onFinish = async (values: IloginForm) => {
    if (values.password !== values.rePassword) {
      setError('check re-password');
      return;
    }

    try {
      await authService.emailSignUp(values.username, values.password);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setError('');
  };


  return (
    <div className="FormWrapper">
      <span className="title">회원가입</span>
      {
        error === "" ? "" :
          <Alert
            message="Error"
            description={error}
            type="error"
            closable
            onClose={onClose}
          />

      }
      <span className="blank"></span>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Re-Password "
          name="rePassword"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div >
  );
}

export default SignUp;