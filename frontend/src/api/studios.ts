export const getStudioList = async () => {
  try {
    const studios = await fetch('http://localhost:3000/studios')
    return await studios.json()
  } catch (error) {
    throw new Error('Failed to fetch studios')
  }
}

export const getProductionsByStudio = async (studioName: string) => {
  try {
    const productions = await fetch(
      `http://localhost:3000/studios/${studioName}`
    )

    const response = await productions.json()

    if (!productions.ok) {
      console.log(response)
      throw new Error('Failed to fetch productions')
    }

    return response
  } catch (error) {
    throw new Error('Failed to fetch productions')
  }
}
