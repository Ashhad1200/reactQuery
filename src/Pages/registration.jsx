import { Form, Input, Button, Checkbox, message, Spin } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useRegister, useListUsers } from '../Api/crud';

const RegistrationForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { mutate, error: registerError } = useRegister();
  const { data: usersData, isLoading: usersLoading, error: usersError } = useListUsers();

  if (registerError) {
    messageApi.error("An error occurred while creating the user.");
  }

  const onFinish = (values) => {
    // Validate username and email
    const userExists = usersData?.some(user => 
      user.username === values.username || user.email === values.email
    );

    if (userExists) {
      messageApi.error("Username or Email already exists.");
      return;
    }

    const user = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    // Call mutate function to register the user
    mutate({ user: user });
  };

  if (usersLoading) {
    return <Spin size="large" />; // Display loading spinner
  }

  if (usersError) {
    return <div>Error loading user data. Please try again later.</div>; // Display error message
  }

  return (
    <>
      {contextHolder}
      <Form
        name="registration_form"
        className="registration-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { type: 'email', message: 'The input is not a valid email!' },
            { required: true, message: 'Please input your Email!' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: 'Please confirm your Password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item name="agreement" valuePropName="checked" rules={[
          { validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')) },
        ]}>
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="registration-form-button">
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RegistrationForm;
