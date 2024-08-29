const ErrorInfo = ({
  className,
  text
}: {
  className: string
  text: string
}) => {
  return (
    <div className={`${className} flex flex-col justify-center items-center`}>
      <img
        className="w-1/2 rounded-lg"
        src="/src/assets/error.gif"
        alt="error"
      />
      <p className="text-xl mt-4">{text}</p>
    </div>
  )
}

export default ErrorInfo
