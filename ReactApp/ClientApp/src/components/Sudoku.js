import React, { Component } from 'react';

export class Sudoku extends Component {
    static displayName = Sudoku.name;

    constructor(props) {
        super(props);
        this.state = { cells: this.populateCells(), loading: true };
    }

    render() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <tbody>
                    {this.state.cells.map(cell =>
                        <tr>{cell.value}</tr>
                    )}
                </tbody>
            </table>
        );
    }

    populateCells() {
        const dim = 9;
        const result = [];
        for (var i = 0; i < dim * dim; i++)
            result.push({ index: i, value: Math.floor(Math.random() * Math.floor(dim)) });
        return result;
    }

}
