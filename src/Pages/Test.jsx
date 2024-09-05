// import { useState } from "react";
import { Card, Row, Col, Spin, Alert, Button, Modal } from "antd";
import { useDeleteProduct, useProducts } from "../Api/crud";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useProducts(/*sortBy, order*/);
  const { mutate, error } = useDeleteProduct();
  if (isLoading) return <Spin size="large" />;
  if (isError)
    return (
      <Alert
        message="Error"
        description="Error loading products."
        type="error"
      />
    );
  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this item?",
      content: "Once deleted, the item cannot be recovered.",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "No, Cancel",
      onOk() {
        mutate(id);
        console.log("Deleted :" + id);
        console.log(error);
      },
      onCancel() {
        console.log("Cancelled"); // Handle cancel action here
      },
    });
  };

  return (
    <>
      <Row justify="space-around" gutter={{ xs: 24, sm: 16, md: 32, lg: 32 }}>
        {data && data.length > 0 ? (
          data.map((product) => (
            <Col className="gutter-row" span={16} key={product.id}>
              <Card
                title={product.name}
                extra={<span>Price: ${product.price}</span>}
                style={{
                  marginBottom: "20px",
                  // maxHeight: "400px",
                  overflow: "auto",
                }} // Adjust maxHeight as needed
              >
                <p>
                  <strong>ID:</strong> {product.id}
                </p>
                <p>
                  <strong>SKU:</strong> {product.sku}
                </p>
                <p>
                  <strong>Description:</strong> {product.description}
                </p>

                <div style={{ marginTop: "10px" }}>
                  <Button
                    style={{ marginRight: "3px" }}
                    onClick={() => navigate(`/edit/${product.id}`)}
                  >
                    Edit
                  </Button>
                  <Button onClick={() => showDeleteConfirm(product.id)} danger>
                    Delete
                  </Button>
                </div>
              </Card>
            </Col>
          ))
        ) : (
          <Col span={24}>
            <p>No products found.</p>
          </Col>
        )}
      </Row>
    </>
  );
};

export default Test;
