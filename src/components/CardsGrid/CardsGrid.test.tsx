import {render} from '@testing-library/react';
import CardsGrid from './CardsGrid';
import {Movie} from '../../models/movie';

it("should be able to render movie cards", () => {

    const mock_movies = [
        {episode_id: 0, title: 'Teste 0'},
        {episode_id: 1, title: 'Teste 1'}
    ];

    const { getByText } = render(<CardsGrid movies={mock_movies}/>);

    const grid_item_0 = getByText("Teste 0");
    const grid_item_1 = getByText("Teste 1");

    
    expect(grid_item_0).toBeTruthy();
    expect(grid_item_1).toBeTruthy();

      });
