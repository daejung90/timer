const input = process.argv.slice(2);

let interval = input
// console.log(input)
let alarm = function (){
    
    for (let i = 0; i < interval.length; i++){
        if(interval[i] < 0) {
            interval[i]++
        } else {
    setTimeout(() => {
        // console.log(interval)
        process.stdout.write('BEEP\n')
    },interval[i] * 1000)

    }
  }
}
alarm()

