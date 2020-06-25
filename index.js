// Your code here
const mapToNegativize = (arr) => {
    return arr.map(x => x * (-1))
}

const mapToNoChange = (arr) => {
    return arr
}

const mapToDouble = (arr) => {
    return arr.map(x => x * 2)
}

const mapToSquare = (arr) => {
    return arr.map(x => x * x)
}

function reduceToTotal(arr, start = 0) {
    return arr.reduce((e, total) => (total += e), start)
};

function reduceToAllTrue(arr) {
    return arr.reduce((acc, val) => {
        if (!val) {
            acc = false
        }
        return acc;
    }, true)
};

const reduceToAnyTrue = (arr) => {
    for (const ele of arr) {
        if (!!ele) {
            return true
        }
    }
    return false
}
