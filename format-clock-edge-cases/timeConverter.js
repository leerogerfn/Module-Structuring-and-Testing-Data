function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(-2);

  if (hours > 24 || hours < 0 || time.includes("-")) {
    return "invalid input.";
  } else if (hours === 24 || hours === 0) {
    return `${12}:${minutes} am`;
  } else if (hours === 12) {
    return `${hours}:${minutes} pm`;
  } else if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  } else {
    return `${time.slice(0, 2)}:${minutes} am`;
  }
}

export { formatAs12HourClock };