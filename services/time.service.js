const parseDate = (dateString) => {
  let date;

  // Case 1: Empty input -> Current time
  if (!dateString) {
    date = new Date();
  }
  // Case 2: Unix Timestamp (Numeric String) -> Parse as Int first
  else if (/^\d+$/.test(dateString)) {
    date = new Date(parseInt(dateString));
  }
  // Case 3: Date String (ISO, etc) -> Standard Constructor
  else {
    date = new Date(dateString);
  }

  // Validator: Check if the date is valid
  if (isNaN(date.getTime())) {
    return { error: "Invalid Date" };
  }

  // Formatting: Return the required JSON structure
  return {
    unix: date.getTime(),
    utc: date.toUTCString(),
  };
};

module.exports = { parseDate };
