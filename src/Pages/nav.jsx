import { Button, Layout, Menu, message } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  EditOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("loggedInUser");

    // Show a success message
    message.success("You have been logged out successfully.");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <Layout>
      <Header>
        <div
          className="logo"
          style={{
            float: "left",
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
            marginRight: "50px",
          }}
        >
          CURD
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
            <Link to="/test">All Products</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
            <Link to="/catagoryId">Find Products By Category Id</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<EditOutlined />}>
            <Link to="/edit">Create</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<LoginOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Button type="primary" onClick={handleLogout}>
              Log out
            </Button>
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: "24px", minHeight: "280px" }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Navbar;