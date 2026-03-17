export function formatDate(date) {
    return date.toLocaleDateString("en-US", {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
}



// this code is to make the time stamp aprear month/day/year7