/* eslint-disable jest-dom/prefer-checked */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../page'

describe('Home', () => {

    it('should renderd correctly', async () => {
        render(<Home />) 

        const title = screen.getByText("Today Todos");

		expect(title).toBeInTheDocument();

    })

    it('should update a todo', async () => {
        render(<Home />) // ARRANGE

        // ACT
        const checkbox = screen.getAllByRole('checkbox')[0] as HTMLInputElement
        expect(checkbox.checked).toBeFalsy()
        await userEvent.click(checkbox)
        expect(checkbox.checked).toBeTruthy() // ASSERT 

    })

    it('should delete a todo', async () => {
        render(<Home />) // ARRANGE

        const todoText = screen.queryByText('Write Code 💻')
        expect(todoText).toBeInTheDocument() // ASSERT 

        // ACT
        const button = screen.getAllByTestId('delete-button')[0]
        await userEvent.click(button)

        expect(todoText).not.toBeInTheDocument() // ASSERT 

    })

})