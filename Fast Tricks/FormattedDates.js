const date = new Date();

function formattedDate(data, style) {
    const dateFormatted = data.toLocaleDateString(
        'pt-BR', { dateStyle: style }
    )

    return dateFormatted;
}

console.log(formattedDate(date, 'full'),"full")
console.log(formattedDate(date, 'long'),"long")
console.log(formattedDate(date, 'short'),"short")