export function convertToReadableDate(utcDateString: string | undefined): string {
    if (utcDateString === undefined) return "";
    const utcDate = new Date(utcDateString);
    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };
    const readableDate: string = utcDate.toLocaleDateString('en-US', options);
    return readableDate;
}