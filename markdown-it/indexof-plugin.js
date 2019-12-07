module.exports = function(arr, name) {
  for(let i = 0; i< arr.length; i++) {
    const v = arr[i];
    if (v && (v === name || v.name === name)) {
      return i;
    }
  }
  return -1;
}
