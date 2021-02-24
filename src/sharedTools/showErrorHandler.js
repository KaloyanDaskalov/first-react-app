export function showErrorHandler(errorStatus, errorMessage, errorType) {
    // console.log(errorStatus, errorMessage, errorType);
    return errorStatus && errorMessage.toLowerCase().includes(errorType.toLowerCase());
}
