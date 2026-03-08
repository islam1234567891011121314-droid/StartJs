const x1 = 11;
const x2 = 124;
const y1 = -151;
const y2 = 201;
console.log((((x2 - x1)**2) + ((y2 - y1)**2)) ** 0.5)

function distance(addressLat, addressLong,positionLat,positionLong){
    const x2x1 = (addressLong - positionLong)**2;
    const y2y1 = (addressLat - positionLat)**2;
    return (x2x1 + y2y1) ** 0.5
}
console.log(distance(11, 201, 124, -151))
//Провто проверка форка