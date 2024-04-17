import { render, screen } from '@testing-library/react'
import App from './App'
import { test, expect } from '@jest/globals' // Import test and expect functions

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
