export function extractNumbers(text) {
    return text ? text.replace(/\D/g, '') : text
}

