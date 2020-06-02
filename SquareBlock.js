const dim = 16;

const getBlock = (seq) => 
{
    const blockDim = parseInt(Math.sqrt(dim), 10);
    if(blockDim * blockDim !== dim)
        throw('Please use exact squares for dim')
    
    const row = parseInt(seq / dim / blockDim);
    const column = parseInt(seq % dim / blockDim);
    return {row, column}        
}

const  getBlockFromCoordinates = (row, col) =>
{
    return getBlock(row * dim + col, dim);
}