const ProductionGenresList = ({ genres }: { genres: string }) => {
  const genreList = genres.split(',')

  return (
    <div className="flex flex-wrap gap-2 justify-center mt-4 font-medium">
      {genreList.map((genre) => (
        <p key={genre} className={`bg-primaryLight rounded-md px-2`}>
          {genre}
        </p>
      ))}
    </div>
  )
}

export default ProductionGenresList
