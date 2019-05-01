const colors = ['#7CA57E', '#ACC2B5', '#BECED9', '#86968D', '#CBE4D5', '#aaa', '#DDD'];

function getColor(value, sum = undefined, price = 0) {
  if (!sum) {
    return colors[value % 7];
  }
  if (price === -1) {
    return '#EEE';
  }
  if (price !== 0) {
    const set = ((sum / price).toFixed(1) * 150).toString();

    return `rgb(255,${set},${set})`;
  }

  // default
  return 'rgb(255,255,255)';
}

export default getColor;
