function kangaroo(x1, v1, x2, v2) {
    return ((x2-x1)%(v2-v1)=== 0 && (v1-v2) > 0) ? 'YES' : 'NO'
}
//return yes if they reach same destination at the same time

console.log(kangaroo(0,2,5,3))
