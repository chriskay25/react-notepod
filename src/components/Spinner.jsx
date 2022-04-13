const Spinner = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#262626",
      }}
    >
      <div className="spinner">
        LOADING
        <span></span>
      </div>
    </div>
  );
};

export default Spinner;
