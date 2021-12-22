import type { NextPage } from "next";
import withHeaderSpacing from "../hoc/with-header-spacing";
import theme from "../styles/theme";

const Home: NextPage = () => {
  return <div>Welcome to Brasil Shop</div>;
};

export default withHeaderSpacing(Home);
