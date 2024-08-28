import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom"; // Import Outlet

const { Header, Content } = Layout; // Import Content for main content area

const Navbar = () => {
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
          Testing
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
        </Menu>
      </Header>
      
      {/* Add the Content component to wrap the Outlet */}
      <Content style={{ padding: '24px', minHeight: '280px' }}>
        {/* This is where the child components will be rendered */}
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Navbar;
