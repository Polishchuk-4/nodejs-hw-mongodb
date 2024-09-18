const notFoundHandler = (err, req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Route not found',
    error: err.message,
  });
};

export default notFoundHandler;
