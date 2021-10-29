import {getDay, format} from "date-fns";

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getDayAsString(day: number): string {
    switch (day){
        case 0: return "Sunday"
        case 1: return "Monday"
        case 2: return "Tuesday"
        case 3: return "Wednesday"
        case 4: return "Thursday"
        case 5: return "Friday"
        case 6: return "Saturday"
        default: return ""
    }
}

export function getDayAndTime(date: Date): string {
    const day = getDay(date)
    return `${getDayAsString(day)} ${format(date, 'H:mm')}`
}
