import { useUserDetails } from "./Api/crud";
import { Card, Avatar, Row, Col, Button } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  EditOutlined,
  PlusOutlined
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  // Retrieve user data from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  
  // // Extract user name if available
  if (!loggedInUser) {
    navigate("/login");
  }
  const { data: userdetails } = useUserDetails({ id: loggedInUser.id });

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
          <Row justify="end">
            <Link to={`/editUserProfile/${user?.id}`}>
              <EditOutlined />
            </Link>
          </Row>{" "}
          <Row justify="center">
            <Avatar size={64} icon={<UserOutlined />} />
          </Row>
          <Row justify="center" style={{ marginTop: 16 }}>
            <h2>{user?.username || "Loading..."}</h2>
          </Row>
          <Row>
            <Col span={24}>
              <p>
                <MailOutlined /> :{" "}
                {user?.email || (
                  <Link to={`/editUserProfile/${user?.id}`}>
                    {" "}
                    <Button><PlusOutlined/></Button>
                  </Link>
                )}
              </p>
              <p>
                <PhoneOutlined /> :{" "}
                {user?.phone || (
                  <Link to={`/editUserProfile/${user?.id}`}>
                    <Button><PlusOutlined/></Button>
                  </Link>
                )}
              </p>
              <p>
                <HomeOutlined /> :{" "}
                {user?.address || (
                  <Link to={`/editUserProfile/${user?.id}`}>
                    {" "}
                    <Button><PlusOutlined/></Button>
                  </Link>
                )}
              </p>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default App;
