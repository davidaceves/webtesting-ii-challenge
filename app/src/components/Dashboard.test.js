import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; // keeps the test from adding a new app everytime - cleans up the tests

import 'jest-dom/extend-expect';
import Dashboard from './Dashboard.js';

describe('<Dashboard /> tests', () => {
    it('should display one button each saying Strike, Ball, Foul, Hit', () => {
        const { getByTestId } = render(<Dashboard />);

        const strikeBtn = getByTestId('strike-btn');
        const ballsBtn = getByTestId('ball-btn');
        const foulBtn = getByTestId('foul-btn');
        const hitBtn = getByTestId('hit-btn');


        expect(strikeBtn).toHaveTextContent(/strike/i);
        expect(ballsBtn).toHaveTextContent(/ball/i);
        expect(foulBtn).toHaveTextContent(/foul/i);
        expect(hitBtn).toHaveTextContent(/hit/i);
    });

    it('should check if buttons were clicked', () => {
        const { getByTestId } = render(<Dashboard />);

        const strikeBtn = getByTestId('strike-btn');
        const ballsBtn = getByTestId('ball-btn');
        const foulBtn = getByTestId('foul-btn');
        const hitBtn = getByTestId('hit-btn');

        fireEvent.click(strikeBtn);
        fireEvent.click(ballsBtn);
        fireEvent.click(foulBtn);
        fireEvent.click(hitBtn);

    });
});