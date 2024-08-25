import useProductsById from "../Api/crud";
import { Row, Col } from "antd";

const Test = () => {
  const { data, isLoading, isError } = useProductsById();
  console.log(data, isLoading, isError);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products.</div>;
  const style = {
    background: "#abb2b9",
    padding: "8px 0",
    marginBottom: "10px",
  };
  return (
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
  );
};

export default Test;
