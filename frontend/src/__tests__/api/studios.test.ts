import { getProductionsByStudio, getStudioList } from 'api/studios'

import fetchMock from 'fetch-mock'

describe('getStudioList', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  test('fetches studios successfully', async () => {
    const mockStudios = [{ name: 'Studio 1' }, { name: 'Studio 2' }]
    fetchMock.getOnce('http://localhost:3000/studios', {
      body: mockStudios,
      headers: { 'content-type': 'application/json' }
    })

    const result = await getStudioList()
    expect(result).toEqual(mockStudios)
  })

  test('throws an error when fetch fails', async () => {
    fetchMock.getOnce('http://localhost:3000/studios', 500)

    await expect(getStudioList()).rejects.toThrow('Failed to fetch studios')
  })
})

describe('getProductionsByStudio', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  test('fetches productions successfully', async () => {
    const mockProductions = [{ name: 'Production 1' }, { name: 'Production 2' }]
    fetchMock.getOnce('http://localhost:3000/studios/Studio 1', {
      body: mockProductions,
      headers: { 'content-type': 'application/json' }
    })

    const result = await getProductionsByStudio('Studio 1')
    expect(result).toEqual(mockProductions)
  })

  test('throws an error when fetch fails', async () => {
    fetchMock.getOnce('http://localhost:3000/studios/Studio 1', 500)

    await expect(getProductionsByStudio('Studio 1')).rejects.toThrow(
      'Failed to fetch productions'
    )
  })
})
