const createResponse = (code, message, data) => ({
    code,
    message,
    ...(data? {records: data}:{})
});

const CODE = {
    "SUCCESS" : 0,
    "FAIL" : 1,
    "INVALID_PARAM" : -1
};

module.exports = {createResponse, CODE};
