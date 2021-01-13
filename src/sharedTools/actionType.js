export function actionType(e) {
    return e.target.placeholder.toUpperCase().replace(/ /g, '_');
}