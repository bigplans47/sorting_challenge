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

    // Recursively sort both sublists.
    left = mergeSort(left);
    right = mergeSort(right);

    // Then merge the now-sorted sublists.
    return merge(left, right)
}

function merge (left, right) {
    var result = [];

    while (left.length && right.length) {
        if first(left) ≤ first(right) then
            append first(left) to result
            left := rest(left) ==
        else
            append first(right) to result
            right := rest(right)
    }

    // Either left or right may have elements left; consume them.
    // (Only one of the following loops will actually be entered.)
    while left is not empty do
        append first(left) to result
        left := rest(left)
    while right is not empty do
        append first(right) to result
        right := rest(right)
    return result
}