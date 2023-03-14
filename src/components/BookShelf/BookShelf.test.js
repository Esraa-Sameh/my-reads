import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import BookShelf from './BookShelf';

describe('Book Shelf component', () => {
    test('should render Book Shelf', () => {
        const books = [
            { id: 1, title: 'book title', shelf: 'currently reading', imageUrl: '', authors: ['', ''] }, 
            { id: 2, title: 'book title', shelf: 'currently reading', imageUrl: '', authors: ['', ''] }];
        render(<BookShelf books={books} title={'currently reading'}/>);
        const shelfName = screen.getByText('currently reading');
        expect(shelfName).toBeInTheDocument();
    })
})
