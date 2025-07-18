import React, { useState } from 'react';

function DropdownExample() {
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="my-dropdown">Choose an option:</label>
      <select id="my-dropdown" value={selectedValue} onChange={handleChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected value: {selectedValue}</p>
    </div>
  );
}

export default DropdownExample;