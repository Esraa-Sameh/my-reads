import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import Book from './Book';

describe('Book component', () => {
    test('renders Book', () => {
        const book = {id: 1, title: 'book title', shelf: 'currently reading', imageUrl: '', authors: ['','']};
        const { container } = render(<Book book={book} />);
        expect(container.getElementsByClassName('book').length).toBe(1);
    })
})
