import React from "react";

function CategoryFilter({categories, categoryIndex, onSelectedButtonChange}) {
  const buttons = categories.map((category, index)=> {
    const selectedClass = categoryIndex=== index ? {className: "selected"} : {}
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
