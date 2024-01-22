const notfound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`); //creating a new error
    res.status(404); //setting the status code
    next(error); //calling the next middleware
};
const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode; //setting the status code
    let message = err.message; //setting the message

// if (err.name === 'CastError' && err.kind === 'ObjectId') {
//     statusCode = 404;
//     message = 'Resource not found';
// }

res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
});
};
export { notfound, errorHandler }; //exporting the middlewares