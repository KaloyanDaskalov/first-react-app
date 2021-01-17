export function showErrorHandler(errorStatus, errorMessage, errorType) {
    return errorStatus && errorMessage.toLowerCase().includes(errorType.toLowerCase());
}
