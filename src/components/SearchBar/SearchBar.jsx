import { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { SearchBarStyles } from './SearchBarStyles';
import s from './SearchBar.module.css';
import { selectBrands } from '../../redux/cars/selectors';


const SearchBar = ({ onFilter }) => {
  const carBrands = useSelector(selectBrands);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const carOptions = carBrands.map(brand => ({ value: brand, label: brand }));

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
        placeholder={'Select a brand'}
      />
      <button onClick={handleSubmit} className={s.submitBtn} type="button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
