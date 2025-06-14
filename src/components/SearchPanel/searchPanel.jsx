import { useState } from "react";
import "./searchPanel.css";

const SearchPanel = ({ onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onChange(inputValue);
    }
  };

  return (
    <div className="form__group field">
      <input
        type="input"
        className="form__field"
        placeholder="City"
        name="name"
        id="name"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        required
      />
      <label htmlFor="name" className="form__label">
        Your City:
      </label>
    </div>
  );
};

export default SearchPanel;
