import { useUserDetails } from "./Api/crud";
import { Card, Avatar, Row, Col, Spin } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const App = () => {
  // Retrieve user data from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Extract user name if available

  const { data: userdetails } = useUserDetails({ id: loggedInUser.id });
  console.log(userdetails);
  const user = userdetails?.[0];
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
        <Card style={{ width: 300 }}>
          <Row justify="center">
            <Avatar size={64} icon={<UserOutlined />} />
          </Row>
          <Row justify="center" style={{ marginTop: 16 }}>
            <h2>{user?.username || "Loading..."}</h2>
          </Row>
          <Row>
            <Col span={24}>
              <p>
                <MailOutlined /> : {user?.email || <Spin size="small" />}
              </p>
              <p>
                <PhoneOutlined /> : {user?.phone || <Spin size="small" />}
              </p>
              <p>
                <HomeOutlined /> : {user?.address || <Spin size="small" />}
              </p>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default App;
