import React from "react";

function CategoryFilter({ handleFilter, categories, selectedCategory }) {
  // const [selected, setSelected] = useState(false)

  // function filterCategory(category) {
  //   handleFilter(category)
  // }


  const renderCategory = categories.map((category) => {
    const className= category === selectedCategory ? "selected" : null
    return (
      <button
        key={category}
        className={className}
        onClick={() => handleFilter(category)}
        >  
        {category}
      </button>
      //anonymous function does not run automatically 
)
})

return (
  <div className="categories" >
    <h5>Category filters</h5>   
    {renderCategory}
  </div>
);
}

export default CategoryFilter;
