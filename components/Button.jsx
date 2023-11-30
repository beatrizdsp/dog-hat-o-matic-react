



const Button = ({isOn,handleToggle})=>{

    return (
        <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="button-checkbox"
        id={`button-new`}
        type="checkbox"/>
      <label
        className="button-label"
        htmlFor={`button-new`}
      >
        <span className={`button`} />
      </label>
    </>
    );
};

export default Button