 const notFound = (status,msg) => {
  return Promise.reject({status, msg});
};
const successResponse = (res, body) => {
  return  res.status(200).json(body);
};
const errorResponse = (res, body) => {
  return  res.status(500).json(body);
};

module.exports = {notFound, successResponse,errorResponse};