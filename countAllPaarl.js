function countAllPaarl(number) {
    var x = number.split(',')
    var paarlCount = []
    
    for (var i=0;i<x.length;i++){
        if (x[i].trim().startsWith('CJ')) {
            paarlCount.push(x[i])
        }
    }
    return paarlCount.length;
}