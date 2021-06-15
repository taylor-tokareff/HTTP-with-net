module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  // `HTTP/1.1 200 OK
  // Accept-Ranges: bytes
  // Content-Length: 17
  // Content-Type: text/html\r
  // \r
  // <h1>hi there</h1>`;

  return (
    'HTTP/1.1 ' + status + '\n' + 'Accept-Ranges: bytes' + '\n' + 'Content-Length: ' + body.length + '\n' + 'Content-Type: ' + contentType + '\r' + '\n' + '\r' + '\n' + body
  );
};
