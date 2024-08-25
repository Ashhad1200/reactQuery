import { useState } from "react";
import { useCatagory, useProductsByCategoryId } from "../Api/crud";
import { Button, Col, Form, Row, Select } from "antd";
const { Option } = Select;

export const ProductByCatagoryId = () => {
  const [categoryId, setCategoryId] = useState("");

  const { data } = useProductsByCategoryId(categoryId);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    setCategoryId(values.categoryId);
  };
  const { data: categories } = useCatagory();
  const style = {
    background: "#abb2b9",
    padding: "8px 0",
    marginBottom: "10px",
  };
  return (
    <>
      <Form form={form} layout="vertical" onFinish={onFinish}>
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
            Find
          </Button>
        </Form.Item>
      </Form>

      <ul>
        {data && data ? (
          data.map((product) => (
            <Row gutter={24} key={product.id}>
              <Col className="gutter-row" span={2}>
                <div style={style}>{product.id}</div>
              </Col>
              <Col className="gutter-row" span={2}>
                <div style={style}>{product.id}</div>
              </Col>
              <Col className="gutter-row" span={2}>
                <div style={style}>{product.id}</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>{product.name}</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>Price: ${product.price}</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>{product.sku}</div>
              </Col>
            </Row>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ul>
    </>
  );
};
