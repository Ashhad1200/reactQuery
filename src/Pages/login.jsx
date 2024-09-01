import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, message, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useListUsers } from '../Api/crud';

const LoginForm = () => {
  const { data: usersData, isLoading: usersLoading, error: usersError } = useListUsers();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const onFinish = (values) => {
    const user = usersData?.find(
      (user) => user.username === values.username && user.password === values.password
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      messageApi.success('Login successful!');
      navigate('/');
    } else {
      messageApi.error('Invalid username or password.');
    }
  };

  if (usersLoading) {
    return <Spin size="large" />;
  }

  if (usersError) {
    return <div>Error loading user data. Please try again later.</div>;
  }

  return (
    <>
      {contextHolder}
      <Form
        name="login_form"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ maxWidth: '300px', margin: '0 auto', padding: '50px' }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <span> Or </span>
          <Link to="/registration">register now!</Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
