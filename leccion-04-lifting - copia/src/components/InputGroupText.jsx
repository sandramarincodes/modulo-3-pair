function InputGroupText({
  labeltext,
  inputname,
  inputid,
  inputplaceholder,
  inputvalue,
  handlechange
}) {
  const handleInputChange = (ev) => {
    handlechange(ev.target.value)
  };

  return (
    <>
      <div className="input-group-text">
        <label className="label-text" htmlFor="name">
          {labeltext}:
        </label>
        <input
          className="input-text"
          type="text"
          name={inputname}
          id={inputid}
          placeholder={inputplaceholder}
          value={inputvalue}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default InputGroupText;
