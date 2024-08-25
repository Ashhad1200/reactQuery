import { useCatagory, useCreateNewProduct } from "../Api/crud";
import { Form, Input, InputNumber, Switch, Button, Select } from "antd";
const { Option } = Select;

const Edit = () => {
  // Mutation hook for creating a new product
  const { mutate } = useCreateNewProduct();

  // State for form fields
  const [form] = Form.useForm();

  // Function to handle form submission
  const onFinish = (values) => {
    // Create a new product with form values
    const data = {
      id: values.id,
      sku: values.sku,
      name: values.name,
      description: values.description,
      price: values.price,
      isAvailable: values.isAvailable,
      categoryId: values.categoryId,
    };

    // Call mutate function to create the new product
    mutate({ product: data });
  };

  const { data: categories } = useCatagory();
  console.log(categories);
  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Product ID"
        name="id"
        rules={[{ required: true, message: "Please input the product ID!" }]}
      >
        <InputNumber min={1} />
      </Form.Item>

      <Form.Item
        label="SKU"
        name="sku"
        rules={[{ required: true, message: "Please input the SKU!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input the product name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please input the price!" }]}
      >
        <InputNumber min={0} formatter={(value) => `$ ${value}`} />
      </Form.Item>

      <Form.Item
        label="Availability"
        name="isAvailable"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>

      <Form.Item
        label="Category"
        name="categoryId"
        rules={[{ required: true, message: "Please select a category!" }]}
      >
        <Select>
          {categories?.map((category) => (
            <Option key={category.id} value={category.id}>
              {category.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Edit;
