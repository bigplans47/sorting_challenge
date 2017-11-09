function mergeSort (list = []) {
    // Base case. A list of zero or one elements is sorted, by definition.
    if (list.length <= 1) {
        return list;
    }

    // Recursive case. First, divide the list into equal-sized sublists
    // consisting of the first half and second half of the list.
    // This assumes lists start at index 0.
    const halfWay = Math.floor(list.length / 2);
    let left = list.splice(0, halfWay);
    let right = list.splice(halfWay);

    // TODO: This is a terrible potential source of a stack overflow
    // TODO: Is there a tail optimized way to right this so we can switch over to setTimeout(mergeSort, 0)?
    // Recursively sort both sublists.
    left = mergeSort(left);
    right = mergeSort(right);

    // Then merge the now-sorted sublists.
    return merge(left, right)
}

function merge (left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    // Either left or right may have elements left; consume them.
    // (Only one of the following loops will actually be entered.)
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }

    return result
}