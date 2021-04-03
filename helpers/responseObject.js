exports.responseObj = (success, responseCode, results = {}, error = '') => {
  const defaultResponse = {
    success,
    responseCode
  }

  if (error !== '') {
    defaultResponse.error = error
  } else {
    defaultResponse.results = results
  };

  return defaultResponse;
}
