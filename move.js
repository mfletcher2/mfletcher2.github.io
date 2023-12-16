function mouseEnter(e) {
    e.children[0].height += 20;
    console.log(e.children[0].height)
}

function mouseLeave(e) {
    e.children[0].height -= 20;
    console.log(e.children[0].height)
}