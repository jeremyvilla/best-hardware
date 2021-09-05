const SearchBar = (props) => {
  const placeholder = props.placeholder;

  return (
    <div className="float-end">
      <input
        type="text"
        className="form-control mt-4 mb-4"
        placeholder={placeholder}
        onChange={(e) => props.onChange(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
