// import { useState } from "react";
import { Card, Row, Col, Spin, Alert, Button } from "antd";
import useProducts from "../Api/crud";

const Test = () => {
  // const [sortBy, setSortBy] = useState("name"); // Default sorting column
  // const [order, setOrder] = useState("asc"); // Default sorting order
  const { data, isLoading, isError } = useProducts(/*sortBy, order*/);

  if (isLoading) return <Spin size="large" />;
  if (isError)
    return (
      <Alert
        message="Error"
        description="Error loading products."
        type="error"
      />
    );

  return (
    <>
      {/* <div style={{ marginBottom: "20px" }}>
        <Button onClick={() => setSortBy("name")} style={{ marginRight: "10px" }}>
          Sort by Name
        </Button>
        <Button onClick={() => setSortBy("price")} style={{ marginRight: "10px" }}>
          Sort by Price
        </Button>
        <Button onClick={() => setOrder(order === "asc" ? "desc" : "asc")}>
          Toggle Order
        </Button>
      </div> */}
      <Row gutter={24}>
        {data && data.length > 0 ? (
          data.map((product) => (
            <Col className="gutter-row" span={8} key={product.id}>
              <Card
                title={product.name}
                extra={<span>Price: ${product.price}</span>}
                style={{ marginBottom: "20px" }}
              >
                <p>
                  <strong>ID:</strong> {product.id}
                </p>
                <p>
                  <strong>SKU:</strong> {product.sku}
                </p>
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
