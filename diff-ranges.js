module.exports = function getDiffIndexRanges(oldAr, newAr, comparator) {
    const newElemIndices = []
    const pairs = [];
    let lastIndex = -1, startRange = -1, endRange = -1;

    newAr.forEach((bi, index) => {
        if (oldAr.findIndex(ai => comparator(ai, bi)) == -1) newElemIndices.push(index);
    });

    newElemIndices.forEach(i => {
        if (lastIndex === -1) {
            startRange = i;
            endRange = i + 1;
        } else if (i === lastIndex + 1) {
            endRange++;
        } else {
            pairs.push({ startRow: startRange, endRow: endRange });
            startRange = i;
            endRange = i + 1;
        }
        lastIndex = i;
    });

    pairs.push({ startRow: startRange, endRow: endRange });
    return pairs;
}