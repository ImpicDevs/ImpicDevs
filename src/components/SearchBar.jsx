const SearchBar = () => {
  return (
    <>
      <div className="mb-8">
        <input
          type="text"
          id="search"
          placeholder="Search by name, skills, or description"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-white text-black"
        />
      </div>
    </>
  );
};

export default SearchBar;
