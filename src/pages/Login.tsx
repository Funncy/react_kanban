import { Form, Input, Button, Checkbox } from 'antd';
import './Login.css';
import AuthService from '../services/AuthService';

interface IloginForm {
  username: string;
  password: string;
  remember: boolean;
}

function Login() {
  const authService = new AuthService();
  //아이디 비밀번호 기억 쿠키에 저장하던지 처리 해줘야함.
  const onFinish = async (values: IloginForm) => {
    try {
      authService.emailSignIn(values.username, values.password);
    } catch (e) {
      console.log("Error");
    }

  };

  //TODO: 에러 처리 해줘야함.
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div className="FormWrapper">
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

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;