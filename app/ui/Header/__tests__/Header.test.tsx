import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {

    it('should render the "Mardin Todos" heading', () => {
        render(<Header title="Mardin Todos" />) 

        const header = screen.getByRole('heading', {
            name: 'Mardin Todos'
        })

        expect(header).toBeInTheDocument()
    })
})