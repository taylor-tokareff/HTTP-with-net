module.exports = rawRequest => {


  return {
    body: rawRequest.split('\r\n\r\n')[1],
    method: rawRequest.split('\n')[0].split(' ')[0],
    path: rawRequest.split('\n')[0].split(' ')[1]
  };

};
