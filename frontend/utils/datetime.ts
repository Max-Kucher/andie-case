import phpFormatDate from 'php-date'

const prepareDateAndFormat = (date?: Date | string): { _date: Date } => {
    let _date: Date

    if (date === undefined) {
        _date = new Date()
    } else if (typeof date === 'string') {
        _date = new Date(date)
    } else {
        _date = date
    }

    return { _date }
}

export const formatDate = (format: string = 'd:m:Y', date?: Date | string): string => {
    const { _date } = prepareDateAndFormat(date)
    return phpFormatDate(format, _date)
}
