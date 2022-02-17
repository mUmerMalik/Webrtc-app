import React from 'react'

const SelectBox = () => {
    return (
        <div>
      <select
        id="Categories"
        name="Categories"
        className="mt-3 mb-5 block w-full pl-3 pr-10 py-2 text-base border-gray-300 bg-gray-800 text-white border border-white focus:outline-none sm:text-sm rounded-md"
        defaultValue="Categories"
      >
        <option>Categories 1</option>
        <option>Categories 2</option>
        <option>Categories 3</option>
        <option>Categories 4</option>
        <option>Categories 5</option>
        <option>Categories 6</option>
      </select>
    </div>
    )
}

export default SelectBox
