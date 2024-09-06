import { useParams, useNavigate } from "react-router-dom";
import { Card, Input, Button, Form, Spin, notification, message } from "antd";
import { useUpdateUserProfile, useEditUserProfile } from "../Api/auth";
import { useListUsers } from "../Api/crud";

const EditUserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useEditUserProfile(id);
  const { mutate: updateUser, isLoading: isUpdating } = useUpdateUserProfile();
  const [messageApi, contextHolder] = message.useMessage();

  const {
    data: usersData,
  } = useListUsers();

  const [form] = Form.useForm();

  // Pre-fill the form when data is available
  const initialValues = {
    username: data?.username || "",
    email: data?.email || "",
    password: data?.password || "",
    phone: data?.phone || "",
    address: data?.address || "",
  };

  const onFinish = (values) => {

    const userExists = usersData?.some(
        (user) => (user.id !== id) && (user.username === values.username || user.email === values.email)
      );

      if (userExists) {
        messageApi.error("Username or Email already exists.");
        return;
      }

      const user = { id, ...values };

    updateUser(
        user,
      {
        onSuccess: () => {
          notification.success({
            message: "updated successfully!",
          });
          navigate("/");
        },
        onError: () => {
          notification.error({
            message: "Failed to update",
          });
        },
      }
    );
  };

  return (
    <>
    {contextHolder}
      <Card title={`Editing Profile Id : ${id}`}>
        {isLoading || isUpdating ? (
          <Spin tip="Loading..." />
        ) : (
          <Form
            form={form}
            initialValues={initialValues}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Please enter the username" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter the email" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter the password" }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                { message: "Please enter the phone number" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[{  message: "Please enter the address" }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isUpdating}>
                Update User
              </Button>
            </Form.Item>
          </Form>
        )}
      </Card>
    </>
  );
};

export default EditUserProfile;
