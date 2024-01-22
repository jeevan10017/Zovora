const asyncHandler = (fn) => (req, res, next) => //creating a function to handle the async functions                
    Promise.resolve(fn(req, res, next)).catch(next); //returning the promise
export default asyncHandler; //exporting the function