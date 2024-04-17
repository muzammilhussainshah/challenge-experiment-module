/* eslint-disable */
import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import path from 'path'
import fs from 'fs'

// MATCH SNAPSHOT
test('renders App component', () => {
  const { container } = render(<App />)
  expect(container).toMatchSnapshot()
})

describe('App Component', () => {
  // RENDER APP WITHOUT CRASHING
  test('renders without crashing', () => {
    render(<App />)
  })
  // Experiment MODULE COMPONENT RENDER Ï
  test('renders Create Experiment Module', () => {
    const { getByText } = render(<App />)
    const createModule = getByText('Create Experiment Module')
    expect(createModule).toBeInTheDocument()
  })
})

// CHECK INVALID COLOR FROM APP
describe('Color Usage Test', () => {
  test('checks if any other color is used in the app', () => {
    const { container } = render(<App />)
    const elementsWithStyles = container.querySelectorAll('[style]')
    elementsWithStyles.forEach(element => {
      const style = element.getAttribute('style')
      if (style.includes('color') || style.includes('background-color')) {
        if (
          !style.includes('#191919') &&
          !style.includes('#000000') &&
          !style.includes('#757575') &&
          !style.includes('green') &&
          !style.includes('rgb(117, 117, 117)') &&
          !style.includes('#FFFFFF')
        ) {
          console.log('Element with different color:', element, 'Style:', style)
          expect(true).toBe(false)
        }
      }
    })

    // Pass the test if no other color is found
    expect(true).toBe(true)
  })
})

// CHECK INVALID COLOR FROM CSS FILE
describe('CSS Color Test', () => {
  test('Check if only specified colors are used in CSS file', () => {
    const cssFilePath = path.resolve(__dirname, './App.css')
    const cssFileContent = fs.readFileSync(cssFilePath, 'utf8')
    const expectedColors = ['#191919', '#000', 'rgb(117, 117, 117)', '#757575', '#FFFFFF', 'green']
    const regex = /#[0-9A-Fa-f]{3,6}|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|\b(?:red|blue|green|yellow|orange|purple|pink)\b/g
    const foundColors = cssFileContent.match(regex) || []
    const unexpectedColors = foundColors.filter(color => !expectedColors.includes(color))
    expect(unexpectedColors).toHaveLength(0)
  })
})
