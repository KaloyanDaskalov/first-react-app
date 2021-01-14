export function checkLength(min, max, length) {
    return (min <= length) && (length <= max);
}