export const dateFormater = (date, param) => {
    const dateObj = new Date(date);
    const options = {
      date: {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      },
      time: {
        hour: 'numeric',
        minute: 'numeric'
      }
    }

    if (!date) {
      return
    }

    return dateObj.toLocaleString('en-GB', options[param])
}