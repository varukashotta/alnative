const objectChecker = (param: any) => {
  return typeof param === 'object' && param !== null;
};

module.exports = {objectChecker};
