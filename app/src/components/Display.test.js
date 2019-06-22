import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; // keeps the test from adding a new app everytime - cleans up the tests

import 'jest-dom/extend-expect';
import Display from './Display.js';

describe('<Display /> tests', () => {
    it('should display balls and strikes for the at-bat', () => {
        const { getByText } = render(<Display />);
        
        const balls = getByText(/Balls:/i);
        const strikes = getByText(/Strikes:/i);

        expect(balls).toBeInTheDocument();
        expect(strikes).toBeInTheDocument();
        
    });

    it('should display balls and strikes reset to 0 when press the hit button', () => {
        const { getByText, getByTestId } = render(<Display />);

        const balls = getByText(/Balls:/i);
        const strikes = getByText(/Strikes:/i);
        const hitBtn = getByTestId('hit-btn');

        fireEvent.click(hitBtn);

        expect(balls).toHaveTextContent(/0/i);
        expect(strikes).toHaveTextContent(/0/i);
    })

    it('should reset balls and strikes to 0 when press the STRIKE button 3 times', () => {
        const { getByText, getByTestId } = render(<Display />);

        const strikes = getByText(/Strikes/i);
        const strikeBtn = getByTestId('strike-btn');

        fireEvent.click(strikeBtn);
        fireEvent.click(strikeBtn);
        fireEvent.click(strikeBtn);

        expect(strikes).toHaveTextContent(/0/i);
    })

    it('should reset balls and strikes to 0 when press the BALL button 4 times', () => {
        const { getByText, getByTestId } = render(<Display />);

        const balls = getByText(/Balls:/i);
        const ballsBtn = getByTestId('ball-btn');

        fireEvent.click(ballsBtn);
        fireEvent.click(ballsBtn);
        fireEvent.click(ballsBtn);
        fireEvent.click(ballsBtn);

        expect(balls).toHaveTextContent(/0/i);
    })

    it('should display no more than 2 strikes for fouls', () => {
        const { getByText, getByTestId } = render(<Display />);

        const strikes = getByText(/Strikes/i);
        const foulBtn = getByTestId('foul-btn');

        fireEvent.click(foulBtn);
        fireEvent.click(foulBtn);
        fireEvent.click(foulBtn);

        expect(strikes).toHaveTextContent(/2/i);
    })

    it('should reset balls, strikes and outs to 0 when 3 outs', () => {
        const { getByText, getByTestId } = render(<Display />);

        const outs = getByText(/Outs/i);
        const strikeBtn = getByTestId('strike-btn');

        fireEvent.click(strikeBtn);
        fireEvent.click(strikeBtn);
        fireEvent.click(strikeBtn);

        fireEvent.click(strikeBtn);
        fireEvent.click(strikeBtn);
        fireEvent.click(strikeBtn);

        fireEvent.click(strikeBtn);
        fireEvent.click(strikeBtn);
        fireEvent.click(strikeBtn);

        expect(outs).toHaveTextContent(/0/i);
    })
});