const LetterSelect = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('')

  return (
    <div className="py-2 grid grid-cols-11 text-center text-secondary ">
      {alphabet.map((letter, index) => (
        <a
          className={`${
            index % 2 === 0 ? 'bg-primary' : 'bg-primaryLight'
          } hover:bg-accent hover:text-primary transition-all duration-120 ease-in cursor-pointer `}
          href={`#studios-${letter}`}
          key={letter}
        >
          {letter}
        </a>
      ))}
    </div>
  )
}

export default LetterSelect
