let time = 3000
let maxRow = 5
let maxCol = 5
let itemShowingMap = {}

setInterval(() => {
    let indexes = randomHidedIndex()
    if (indexes === null) {
        return
    }
    let item = randomHidedItem(indexes)
    let text = $('<span style="display:none;">' + randomIndex(100) + '</span>')
    setItemShow(indexes[0], indexes[1], true)
    item.html(text)
    text.fadeIn(1000)
    setTimeout(() => {
        text.fadeOut(2000)
        setItemShow(indexes[0], indexes[1], false)
    }, 5000)
}, 1000)

function randomHidedIndex() {
    let count = 0
    let rowIndex, colIndex
    while (count < maxRow * maxCol) {
        rowIndex = randomIndex(maxRow)
        colIndex = randomIndex(maxCol)
        count++
        if (!getItemShow(rowIndex, colIndex)) {
            return [rowIndex, colIndex]
        }
        console.log('item is showing, r=' + rowIndex + ', c=' + colIndex)
    }
    return null
}

function randomHidedItem(indexes) {
    return $($($('div.row')[indexes[0]]).find('div.col')[indexes[1]])
}

function randomIndex(max) {
    return parseInt(Math.random() * max)
}

function getItemShow(rowIndex, colIndex) {
    return itemShowingMap['r' + rowIndex + 'c' + colIndex] || false
}

function setItemShow(rowIndex, colIndex, show) {
    itemShowingMap['r' + rowIndex + 'c' + colIndex] = show
}
