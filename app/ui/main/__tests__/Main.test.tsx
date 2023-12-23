import { render, screen } from '@testing-library/react'
import Main from '../Main'

describe('Main', () => {
    it('should render a list with the correct number of items', () => {
        render(
            <Main />
        ) // ARRANGE

        //ACT
        const todosArray = screen.getAllByRole('article')

        expect(todosArray.length).toBe(4)// ASSERT
    })

    it('should render the todos in the correct order', () => {
        render(
            <Main />
        ) // ARRANGE

        //ACT
        const firstItem = screen.getAllByTestId("todo-item")[0]

        expect(firstItem).toHaveTextContent("Write Code 💻")// ASSERT
    })

})