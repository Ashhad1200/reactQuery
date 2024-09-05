import { useCatagory, useCreateNewProduct } from "../Api/crud";
import {
  Form,
  Input,
  InputNumber,
  Switch,
  Button,
  Select,
  message,
  Spin,
  Card,
} from "antd";
const { Option } = Select;

const AddProduct = () => {
  const { data: categories } = useCatagory();
  const {
    mutate: createProduct,
    error: errorInCreatingProduct,
    isLoading: creatingNewProduct,
  } = useCreateNewProduct();

  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  // Display an error message if the request fails
  if (errorInCreatingProduct) {
    messageApi.error("An error occurred while creating the product.");
  }
  const onFinish = (values) => {
    const data = {
      sku: values.sku,
      name: values.name,
      description: values.description,
      price: values.price,
      isAvailable: values.isAvailable,
      categoryId: values.categoryId,
    };
    // Call mutate function to create the new product
    createProduct({ product: data });
  };
  if (creatingNewProduct) return <Spin size="large" />;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "100vh", // Full viewport height to center vertically
        }}
      >
        <Card title="Add Product" style={{ width: 600 }}>
          {contextHolder}
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            style={{ maxWidth: 600, margin: "0 auto" }}
          >
            <Form.Item
              label="SKU"
              name="sku"
              rules={[{ required: true, message: "Please input the SKU!" }]}
            >
              <Input placeholder="Enter SKU" aria-label="SKU" />
            </Form.Item>

            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please input the product name!" },
              ]}
            >
              <Input
                placeholder="Enter product name"
                aria-label="Product Name"
              />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  max: 355,
                  message: "Description cannot exceed 255 characters!",
                },
              ]}
            >
              <Input.TextArea
                placeholder="Enter product description"
                aria-label="Description"
                autoSize={{ minRows: 3 }}
              />
            </Form.Item>

            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: "Please input the price!" }]}
            >
              <InputNumber
                min={0}
                formatter={(value) => `$ ${value}`}
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                placeholder="Enter price"
                aria-label="Price"
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item
              label="Availability"
              name="isAvailable"
              valuePropName="checked"
              initialValue={true}
            >
              <Switch aria-label="Availability" />
            </Form.Item>

            <Form.Item
              label="Category"
              name="categoryId"
              rules={[{ required: true, message: "Please select a category!" }]}
            >
              <Select
                placeholder="Select a category"
                aria-label="Category"
                allowClear
              >
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
        </Card>
      </div>
    </>
  );
};

export default AddProduct;
