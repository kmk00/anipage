import { render, waitFor } from '@testing-library/react'
import Loading from 'components/Other/Loading'

describe('Loading component', () => {
  it('renders with default props', () => {
    const { container } = render(<Loading />)
    expect(container).toBeInTheDocument()
  })

  it('renders with text prop', async () => {
    const { getByText } = render(<Loading text="Loading..." />)
    await waitFor(() => expect(getByText('Loading...')).toBeInTheDocument(), {
      timeout: 1500
    })
  })

  it('tests loading delay', async () => {
    const { queryByText } = render(<Loading />)
    expect(queryByText('loading')).toBeNull()
    await waitFor(() => expect(queryByText('loading')).toBeNull(), {
      timeout: 1500
    })
  })
})
