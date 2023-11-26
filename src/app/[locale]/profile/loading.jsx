import Logo from "@/app/atoms/logo/Logo";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
      }}
    >
      <Logo />
    </div>
  );
};

export default Loading;
