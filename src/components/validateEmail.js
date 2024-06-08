export default (stringToTest) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(stringToTest);
};
