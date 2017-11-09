function transformRiderArrays (riders) {
    return rider.map(r => {
        return {
            id: r[0],
            firstName: r[1],
            lastName: r[2],
            weight: r[3],
            age: r[4],
        }
    })
}

module.exports = {
    transformRiderArrays,
}