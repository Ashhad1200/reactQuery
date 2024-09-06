import { useParams, useNavigate } from "react-router-dom";
import { useEditProduct, useUpdateProduct } from "../Api/crud";
import { Card, Input, Button, Form, Spin, notification } from "antd";


const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useEditProduct(id);
  const { mutate: updateProduct, isLoading: isUpdating } = useUpdateProduct();

  const [form] = Form.useForm();

  // Pre-fill the form when data is available
  const initialValues = {
    name: data?.name || "",
    description: data?.description || "",
    price: data?.price || "",
    isAvailable: data?.isAvailable || false,
  };

  const onFinish = (values) => {
    updateProduct(
      { id, ...values },
      {
        onSuccess: () => {
          notification.success({
            message: "Product updated successfully!",
          });
          navigate("/Test"); // Redirect after successful update
        },
        onError: () => {
          notification.error({
            message: "Failed to update product",
          });
        },
      }
    );
  };

  return (
    <>
      <Card title={`Editing Product: Id ${id}`}>
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
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter the name" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please enter the description" }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: "Please enter the price" }]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="Available"
              name="isAvailable"
              valuePropName="checked"
            >
              <Input type="checkbox" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isUpdating}>
                Update Product
              </Button>
            </Form.Item>
          </Form>
        )}
      </Card>
    </>
  );
};

export default EditProduct;
