export const getStudioList = async () => {
  try {
    const studios = await fetch('http://localhost:3000/studios')
    return await studios.json()
  } catch (error) {
    throw new Error('Failed to fetch studios')
  }
}
