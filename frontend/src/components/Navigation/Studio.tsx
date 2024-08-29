const Studio = ({ letter, studios }: { letter: string; studios: string[] }) => {
  return (
    <div>
      <h2 id={`studios-${letter}`} className="text-xl pl-4 pb-1">
        {letter}
      </h2>
      <hr className="border-b-2 border-primaryLight" />
      <div className="space-y-1 pl-8 flex flex-col items-start gap-2 py-4">
        {studios.map((studio) => (
          <button key={studio} className="ml-4 py-1 cursor-pointer">
            {studio}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Studio
