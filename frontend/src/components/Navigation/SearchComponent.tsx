const SearchComponent = ({
  className,
  setSearch
}: {
  className: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <form className={`${className} relative`}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="py-2 pl-2 w-full pr-12 rounded-md bg-primaryLight "
        type="text"
        placeholder="Search..."
      />
      <img
        className="absolute top-3 right-4"
        src="/src/assets/search-icon.svg"
        alt="search icon"
      />
    </form>
  )
}

export default SearchComponent
