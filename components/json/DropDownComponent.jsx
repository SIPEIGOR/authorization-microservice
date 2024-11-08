import { ApiClient } from 'adminjs';
import React, { useEffect, useState } from 'react';

const api = new ApiClient();

const DropdownComponent = (props) => {
  const { onChange, record, property } = props;
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      const response = await fetch(
        `http://localhost:3000/acuity-scheduling/services-admin`,
      );
      const data = await response.json();
      setOptions(data);
    };

    fetchOptions();
  }, []);

  const handleChange = (event) => {
    onChange(property.name, event.target.value);
  };

  return (
    <div>
      <label>{property.label}</label>
      <select
        value={record.params[property.name] || ''}
        onChange={handleChange}
      >
        <option value="">Select a service</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;
