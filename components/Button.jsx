import "../css/button.css";

const Button = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="button-checkbox"
        id={`button-new`}
        type="checkbox"
      />
      <label
        style={{
          background:
            isOn &&
            "linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%)",
        }}
        className="button-label"
        htmlFor={`button-new`}
      >
        <span className={`button`} />
      </label>
    </>
  );
};

export default Button;
