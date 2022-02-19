import theme from "../../styles/theme";

const withMenuSpacing = (Component: React.FC) => (props: any) => {
  return (
    <>
      <div style={{ marginLeft: "20vw" }}>
        <Component {...props} />
      </div>
    </>
  );
};

export default withMenuSpacing;
