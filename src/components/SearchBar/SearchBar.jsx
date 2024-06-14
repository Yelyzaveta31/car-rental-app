import { useSelector } from 'react-redux';
import { selectBrands } from '../../redux/cars/slice';
import s from './SearchBar.module.css';
import Select from 'react-select';
import { useState } from 'react';
import { selectQuery } from '../../redux/cars/selectors';
import { SearchBarStyles } from './SearchBarStyles';

const SearchBar = ({ onFilter }) => {
 const query = useSelector(selectQuery);
  const carBrands = useSelector(selectBrands);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const carOptions = carBrands.map(brand => ({ value: brand, label: brand }));


  const handleChange = selectedOption => {
    setSelectedBrand(selectedOption);
  };

  const defaultOption = carOptions.find(
    (item) => item.value === query.make
  ) || { value: "", label: "All brands" };

  const handleSubmit = () => {
    if (selectedBrand) {
      onFilter(selectedBrand.value);
    }
  };

  return (
    <div className={s.search_bar}>
      <Select
         options={carOptions }
        defaultValue={defaultOption}
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