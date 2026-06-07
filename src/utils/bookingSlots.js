const unavailableSlots = new Set(['10:30 AM', '1:30 PM', '5:00 PM']);

export const getNextWeekdays = (count = 10) => {
  const dates = [];
  const cursor = new Date();

  while (dates.length < count) {
    const day = cursor.getDay();
    if (day >= 1 && day <= 5) {
      dates.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return dates;
};

export const formatDateLabel = (date) =>
  new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(date);

export const formatDateValue = (date) => date.toISOString().slice(0, 10);

export const generateAppointmentSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 18; hour += 1) {
    ['00', '30'].forEach((minutes) => {
      const date = new Date();
      date.setHours(hour, Number(minutes), 0, 0);
      const label = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      });
      slots.push({
        label,
        available: !unavailableSlots.has(label),
      });
    });
  }
  return slots;
};
