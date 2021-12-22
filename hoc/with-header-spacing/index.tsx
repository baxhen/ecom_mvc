import theme from "../../styles/theme";

const withHeaderSpacing = (Component: React.FC) => (props: any) => {
  return (
    <>
      <div style={{ marginTop: theme.spacing(8) }} />
      <Component {...props} />
    </>
  );
};

export default withHeaderSpacing;
