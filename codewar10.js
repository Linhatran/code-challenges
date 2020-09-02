function seven() {return 7}

function multiply (x) {
    function five () {return 5}
    function times(a,b) {return a*b}
    return times(five(),x)
}
console.log(multiply(seven()))
