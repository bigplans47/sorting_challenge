function transformRiderArrays (riders) {
    // return riders.map(function (r) {
    return riders.map(rider => {
        const hasGender = rider.length === 6;
        const baseRider = {
            id: rider[0],
            firstName: rider[1],
            lastName: rider[2],
        };
        if (hasGender) {
            baseRider.gender = rider[3];
            baseRider.weight = rider[4];
            baseRider.age = rider[5];
        } else {
            baseRider.weight = rider[3];
            baseRider.age = rider[4];
        }
        return baseRider;
    })
}

module.exports = {
    transformRiderArrays,
}