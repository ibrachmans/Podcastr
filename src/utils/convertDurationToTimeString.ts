export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':')

        return timeString;
}

// A função do .map é pegar o resultado de horas, minutos e segundos e colocar um 0 na frente caso ele esteja com apenas 1 unidade.