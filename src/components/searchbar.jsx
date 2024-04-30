import React, { useState } from 'react';


const submitButtonStyle={

  border:" none",
  borderRadius:"1.2em",
  backgroundColor:"#008CBA",
  color:"white",
  fontFamily: "'PT Sans', sans-serif",
  fontWeight: '400',
  fontStyle: 'normal',
  padding:"1em"

};

const style = {
    borderRadius: "0.5em",
    padding: "1em",
    backgroundColor: "rgba(220, 56, 69, 0.11)",
}

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm.length!=0){
    onSearch(searchTerm);}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        style = {style}
      />
      <button style={submitButtonStyle} type="submit">Search</button>
    </form>
    </div>
    
  );
};

export default SearchBar;
