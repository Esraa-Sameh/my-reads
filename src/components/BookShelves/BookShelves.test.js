import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import BookShelves from './BookShelves';

describe('BookShelfChanger component', () => {
    test('renders Book Shelf Changer', () => {
        const book1 = {id: 1, title: 'book title', shelf: 'currently reading'};
        const book2 = {id: 2, title: 'book title', shelf: 'currently reading'};
        const { container } = render(<BookShelves books={[book1,book2]} />);
        expect(container.getElementsByTagName('BookShelf')).toBeTruthy();
    })
})
