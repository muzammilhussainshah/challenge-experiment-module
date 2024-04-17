import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  // Test to ensure that the App component renders without crashing
  test('renders without crashing', () => {
    render(<App />)
  })

  // Test to ensure that the "Create Experiment Module" is rendered
  test('renders Create Experiment Module', () => {
    const { getByText } = render(<App />)
    const createModule = getByText('Create Experiment Module')
    expect(createModule).toBeInTheDocument()
  })

  // Test to ensure that the "Experiment Module List" is rendered
  test('renders Experiment Module List', () => {
    const { getByText } = render(<App />)
    const experimentList = getByText('Experiment Module')
    expect(experimentList).toBeInTheDocument()
  })
})
