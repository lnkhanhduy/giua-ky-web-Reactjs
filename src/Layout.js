import { Button } from "@material-ui/core";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>     
          <Button href="/">Số liệu</Button>
          <Button href="/charts">Biểu đồ</Button>      
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;