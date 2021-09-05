const InputBox = (props) => {
  const type = props.type;
  const id = props.id;
  const placeholder = props.placeholder;
  const value = props.value || "";

  return (
    <div>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => props.onChange(e.target.value)}
      ></input>
    </div>
  );
};

export default InputBox;
