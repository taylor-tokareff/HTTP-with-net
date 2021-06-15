module.exports = rawRequest => {

  return {
    body: rawRequest.split('\n')[4],
    method: rawRequest.split('\n')[0].split(' ')[0],
    path: rawRequest.split('\n')[0].split(' ')[1],
  };

};
