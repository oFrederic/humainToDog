function humainToDog(age) {
  return Math.round(16 * Math.log(age) + 31);
}

module.exports = { humainToDog };
