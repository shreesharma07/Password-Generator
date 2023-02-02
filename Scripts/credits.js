// * // Get Current Year Function //
function getCurrentYear() {
    const date = new Date();
    const year = new Intl.DateTimeFormat('en-US', {
        year: 'numeric', timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }).format(date);
    return parseInt(year)
}