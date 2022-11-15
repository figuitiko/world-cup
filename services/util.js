 const notFound = (status,msg) => {
  return Promise.resolve({status, msg});
};
const successResponse = (res, body) => {
  return  res.status(200).json(body);
};

module.exports = {notFound, successResponse};