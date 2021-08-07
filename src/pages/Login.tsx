import { Form, Input, Button, Checkbox, Alert } from 'antd';
import './Login.css';
import AuthService from '../services/AuthService';
import { UserState } from '../atom/AuthAtom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import firebase from 'firebase';
import { useState } from 'react';

interface IloginForm {
	username: string;
	password: string;
	remember: boolean;
}

function Login(): JSX.Element {
	const authService = new AuthService();
	const setUser = useSetRecoilState<firebase.User | null>(UserState);
	const [error, setError] = useState<string>('');
	//아이디 비밀번호 기억 쿠키에 저장하던지 처리 해줘야함.
	const onFinish = async (values: IloginForm) => {
		try {
			const user = await authService.emailSignIn(values.username, values.password);
			const result = Object.assign({}, user);
			setUser(result);
		} catch (e) {
			setError(e.message);
		}
	};

	//TODO: 에러 처리 해줘야함.
	const onFinishFailed = (errorInfo: any) => {
		setError(errorInfo);
	};

	const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setError('');
	};

	return (
		<div className="FormWrapper">
			<span className="title">로그인</span>
			{error === '' ? (
				''
			) : (
				<Alert message="Error" description={error} type="error" closable onClose={onClose} />
			)}
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
