import { getAnimeById } from 'api/anime'

import fetchMock from 'fetch-mock'

describe('getAnimeById', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  test('fetches anime successfully', async () => {
    const mockAnime = { id: 1, name: 'Naruto' }
    fetchMock.getOnce('http://localhost:3000/anime/1', {
      body: mockAnime,
      headers: { 'content-type': 'application/json' }
    })

    const result = await getAnimeById(1)
    expect(result).toEqual(mockAnime)
  })

  test('throws an error when the anime is not found', async () => {
    fetchMock.getOnce('http://localhost:3000/anime/1432', 404)

    await expect(getAnimeById(1432)).rejects.toThrow('Failed to fetch anime')
  })

  test('throws an error when fetch fails', async () => {
    fetchMock.getOnce('http://localhost:3000/anime/1', 500)

    await expect(getAnimeById(1)).rejects.toThrow('Failed to fetch anime')
  })
})
