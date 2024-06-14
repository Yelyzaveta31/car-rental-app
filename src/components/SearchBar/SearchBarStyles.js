export const SearchBarStyles = {
    control: (styles, state) => ({
      ...styles,
      borderColor: state.isFocused ? 'gray' : '#F7F7FB',
      backgroundColor: '#F7F7FB',
      color: 'white',
      borderCollapse: 'separate',
      width: '224px',
      borderRadius: '14px',
    }),
    dropdownIndicator: baseStyles => ({
      ...baseStyles,
      color: 'gray',
    }),
    menu: baseStyles => ({
      ...baseStyles,
      background: 'white',
      borderCollapse: 'separate',
      borderRadius: '14px',
  
      scrollBehavior: 'smooth',
      scrollbarWidth: 'thin',
      scrollbarColor: 'rgba(18, 20, 23, 0.05)',
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isFocused ? '#ffffff1a' : 'transparent',
      color: state.isDisabled
        ? ' rgba(18, 20, 23, 0.2)'
        : state.isSelected
        ? ''
        : 'rgba(18, 20, 23, 0.2)',
      cursor: state.isDisabled ? 'not-allowed' : 'pointer',
    }),
    singleValue: baseStyles => ({
      ...baseStyles,
      color: 'rgba(18, 20, 23, 1)',
    }),
  
    indicatorSeparator: baseStyles => ({
      ...baseStyles,
      display: 'none',
    }),
    valueContainer: baseStyles => ({
      ...baseStyles,
      height: '48px',
    }),
  
    cursor: 'pointer',
  };