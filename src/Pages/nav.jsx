import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  return (
    <>
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
              <Link to="/catagoryId">Find Products By Catagory Id</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<EditOutlined />}>
              <Link to="/edit">Edit</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
};

export default Navbar;
