const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-primary text-secondary px-4 py-2">
      {children}
    </div>
  )
}

export default MainContentWrapper
