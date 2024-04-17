const availableTimesByDate = {};

const startDate = new Date();
const endDate = new Date('2025-12-31');

for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    const formattedDate = date.toISOString().split('T')[0];
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    availableTimesByDate[formattedDate] = availableTimes;
}


const fetchAPI = async () => {
    try {
        const response = await fetch(`http://localhost:3000/`);
        if (!response.ok) {
            throw new Error('Failed to fetch available times.');
        }
        const data = await response.json();
        return data.availableTimes;
    } catch (error) {
        throw new Error(`Error fetching available times: ${error.message}`);
    }
};

const submitAPI = (formData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (formData.date && availableTimesByDate[formData.date]) {
                availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);
                resolve(true); // Simulate successful submission
            } else {
                reject(new Error('Invalid date or no available times for the selected date.'));
            }
        }, 1000); // Simulate API delay
    });
};

export { fetchAPI, submitAPI };