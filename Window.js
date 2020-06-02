
const setOutput = (body) => { window.document.body.innerHTML = body;}

const createCells = (dim) => {
    var array = [];
    for(var cl = 0; cl < dim * dim; cl++){ 
        array.push(cl);
    }
    console.log('array', array);
    return array;
}

const outputRow = (n, cells) => {
    var row = '<tr>';
    for(var td = n * dim; td < (n+1) * dim; td++)
        row = row + '<td>' + cells[td] + '</td>';
    return row + '</tr>'
}

const outputTable =  (cells) => {
    var tb = '<table>';
    for(var tr  = 0; tr < dim; tr++)
        tb = tb + outputRow(tr, cells);
    return tb + '</table>'
}