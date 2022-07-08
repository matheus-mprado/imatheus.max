const date = new Date("Thu Jul 07 2022 22:12:06 GMT-0300");

const intervals = [
    { label: 'ano', seconds: 31536000 }, // 60*60*24*365 = 60 segundos * 60 minutos * 24 horas * 365 dias
    { label: 'mês', seconds: 2592000 }, // 60*60*24*30 = 60 segundos * 60 minutos * 24 horas * 30 dias
    { label: 'dia', seconds: 86400 }, // 60*60*24 =  60 segundos * 60 minutos * 24 horas
    { label: 'hora', seconds: 3600 }, // 60*60 =  60 segundos * 60 minutos
    { label: 'min', seconds: 60 }, // 60 =  60 segundos 
    { label: 'seg', seconds: 1 } // 1 segundo
];

function timeSince(date) {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const interval = intervals.find(i => i.seconds < seconds);
    const count = Math.floor(seconds / interval.seconds);
    return `${count} ${interval.label}${count !== 1 ? 's' : ''}`
}

console.log(timeSince(date)," diferença")