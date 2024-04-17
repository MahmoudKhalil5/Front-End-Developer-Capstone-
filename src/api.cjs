const seededGenerator = (date, hour) => {
  const m = 9;
  const d = date.getDate();
  const result = ((d + hour) % m ) / 10;
  return result;
}

const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    const result = [];
    result.push("--- Select a Time ---");

    for (let hour = 15; hour <= 23; hour++) {
      if (seededGenerator(date, hour) < 0.5) result.push(hour + ':00');
      if (seededGenerator(date, hour + 7) < 0.5) result.push(hour + ':30');
    }

    // Simulate delay with setTimeout
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
};

const submitAPI = (formData) => {
  // Simulate successful submission
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

  module.exports = { fetchAPI, submitAPI };