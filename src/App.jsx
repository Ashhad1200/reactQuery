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
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();

  // Retrieve user data from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Always call hooks at the top
  const { data: userdetails } = useUserDetails({
    id: loggedInUser?.id || null, // Pass a fallback value if loggedInUser is null
  });

  const user = userdetails?.[0];

  // Handle navigation after hook execution
  useEffect(() => {
    if (!loggedInUser || !loggedInUser.id) {
      navigate("/login");
    }
  }, [loggedInUser, navigate]);

  // Conditional rendering based on user data
  if (!loggedInUser || !loggedInUser.id) {
    return null; // Prevent rendering if user is not found
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
                    <Button><PlusOutlined /></Button>
                  </Link>
                )}
              </p>
              <p>
                <PhoneOutlined /> :{" "}
                {user?.phone || (
                  <Link to={`/editUserProfile/${user?.id}`}>
                    <Button><PlusOutlined /></Button>
                  </Link>
                )}
              </p>
              <p>
                <HomeOutlined /> :{" "}
                {user?.address || (
                  <Link to={`/editUserProfile/${user?.id}`}>
                    {" "}
                    <Button><PlusOutlined /></Button>
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
