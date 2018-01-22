export function getData(passages) {  
  let guide = [];

  passages.forEach((passage, index) => {
    const parts = passage.split('#');
    const date = parts[0];
    const book = parts[1];
    const coords = parts[2];

    const dateParts = date.split('-');
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);

    if (!guide[month]) {
      guide[month] = [];
    }
    guide[month][day] = { book, coords };
  })

  return guide;
}

export default {
  getData
}
