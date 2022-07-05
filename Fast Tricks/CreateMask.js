function mask(value, pattern) {
    let i = 0;
    const v = value.toString();

    return pattern.replace(/#/g, () => v[i++] || '');
}

const maskedFone = mask('12999999999', '(##) # ####-####')
const maskedCpf = mask('11111111111', '###.###.###-##')

console.log(maskedFone) // (12) 9 9999-9999
console.log(maskedCpf) // 111.111.111-11