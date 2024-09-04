export const getAnimeById = async (animeId: number) => {
  try {
    const anime = await fetch(`http://localhost:3000/anime/${animeId}`)
    if (!anime.ok) {
      throw new Error('Anime not found')
    }
    return await anime.json()
  } catch (error) {
    throw new Error('Failed to fetch anime')
  }
}
