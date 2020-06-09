import React, { Component } from 'react';

export class Sudoku extends Component {
    static displayName = Sudoku.name;

    constructor(props) {
        super(props);
        this.state = { cells: this.populateCells(), loading: true };
    }

    static renderRow(rowIndex, cells) {
        return (
            <tr key={rowIndex}>
                {cells.map((cell) => <td key={cell.index}>{cell.value}</td>)}
            </tr>
        );
    }

    static renderRows(cells) {
        const dim = Math.sqrt(cells.length);
        const rows = [];
        for (var i = 0; i < dim; i++)
            rows.push(i);

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <tbody>
                    {rows.map(r =>
                        Sudoku.renderRow(r, cells.slice(r * dim, (r + 1) * dim))
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        return Sudoku.renderRows(this.state.cells);
    }

    populateCells() {
        const dim = 9;
        const result = [];
        for (var i = 0; i < dim * dim; i++)
            result.push({ index: i, value: Math.floor(Math.random() * Math.floor(dim)) });
        return result;
    }

}
