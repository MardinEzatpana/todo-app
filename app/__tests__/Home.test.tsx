import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home', () => {

    it('should renderd correctly', async () => {
        render(<Home />) 

        const title = screen.getByText("Today Todos");

		expect(title).toBeInTheDocument();

    })

})