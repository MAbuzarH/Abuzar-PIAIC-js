function getInfo(
  manufacturerName,
  modelName,
  arbitraryNumber,
  color,
  optionalFeature
) {
  let car = {
    manufacturerN: manufacturerName,
    modelN: modelName,
    arbitraryNumber: arbitraryNumber,
    colorC: color,
    optionalF: optionalFeature,
  };
  return car;
}
getInfo("hunda", "2018", "123457", "white", "seatbelt");
