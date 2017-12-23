// / calculates the number of required tiles

exports.tileNumber = (lng, lat, nTiles) => {
  const xlength = Math.sqrt(nTiles / 2) * 2;
  const dim = 180 / Math.sqrt(nTiles / 2);
  const posLng = 180 + lng;
  const posLat = 90 + lat;
  return nTiles - (xlength - 1 - Math.floor(posLng / dim) + Math.floor(posLat / dim) * xlength);
};

// console.log(tileNumber(-83, 9.2, 512));
