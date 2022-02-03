const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const formatDate = (element: Date) => {
    
    let day = days[element.getDay()];
    let date = element.getDate();
    let month = months[element.getMonth()];
    let year = element.getFullYear();

    const newDate = {
        day:  `${day}`,
        month: `${month}`,
        date: `${date}`,
        year: `${year}`,
    }

    return newDate;
}