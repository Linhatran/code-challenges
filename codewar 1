  function list(names){
    let str = names.map(function(x) {return x.name}).join(', ')
    .replace(/, (?!.*, )/,' & ');
    return str;
}
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
