//async api
export const fetchCount =(amount = 1) => {
    return new Promise((resolve)=> 
    setTimeout(()=> resolve({data:amount}), 500));
}