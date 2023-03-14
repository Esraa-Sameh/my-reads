import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import BookShelfChanger from './BookShelfChanger';

describe('BookShelfChanger component', () => {
    test('renders Book Shelf Changer', () => {
        const book = {id: 1, title: 'book title', shelf: 'currently reading'};
        const { container } = render(<BookShelfChanger book={book} />);
        expect(container.getElementsByClassName('book-shelf-changer').length).toBe(1);
        expect(container.getElementsByTagName('option').length).toBe(5);
    })
})
