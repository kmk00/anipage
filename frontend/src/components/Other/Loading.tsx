const Loading = ({ className, text }: { className: string; text: string }) => {
  return (
    <div className={`${className} flex flex-col justify-center items-center`}>
      <img src="/src/assets/loading.svg" alt="loading" />
      <p className="text-xl">{text}</p>
    </div>
  )
}

export default Loading
