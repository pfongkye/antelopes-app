import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import TableView from '../TableView';

describe('TableView', ()=>{
    it('should display a table', ()=>{
        render(<TableView />);
        expect(screen.getByRole('grid')).toBeInTheDocument();
    })
})