import { useSelector } from 'react-redux';
import s from "./SearchBar.module.css";
import Select from 'react-select';
import { useState } from 'react';
import { SearchBarStyles } from './SearchBarStyles';
import { selectSelectedBrand } from '../../redux/cars/selectors';

const SearchBar = ({ onFilter }) => {
  const carBrands = useSelector(selectSelectedBrand);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const carOptions = carBrands ? carBrands.map(brand => ({ value: brand, label: brand })) : [];

  const handleChange = selectedOption => {
    setSelectedBrand(selectedOption);
  };

  const handleSubmit = () => {
    if (selectedBrand) {
      onFilter(selectedBrand.value);
    }
  };

  return (
    <div className={s.search_bar}>
      <Select
        options={carOptions}
        onChange={handleChange}
        styles={SearchBarStyles}
        placeholder={'Write a brand'}
      />
      <button onClick={handleSubmit} className={s.submitBtn} type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
