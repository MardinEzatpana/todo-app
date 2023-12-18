import { render, screen } from '@testing-library/react'
import Main from '../Main'

describe('Main', () => {

    it('should render an article', () => {
        render(<Main />) 

        const article = screen.getByRole('article')

        expect(article).toBeInTheDocument()
    })

    it('should render a label', () => {
        render(<Main />) 

        const label = screen.getByTestId('todo-item')

        expect(label).toBeInTheDocument()
    })

    it('should render a checkbox', () => {
        render(<Main />) 
     
        const checkbox = screen.getByRole('checkbox')

        expect(checkbox).toBeInTheDocument()
    })

    it('should render a button', () => {
        render(<Main />) 
       
        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

})