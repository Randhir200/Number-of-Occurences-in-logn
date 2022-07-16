function runProgram(input) {
    input = input.trim().split("\n");
    let [n,k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let low = 0;
    let high = n-1;
    let count = 0;
    solve(arr,0,n-1,k)
    function solve(arr,low,high,k){
        let mid = Math.floor(low+(high-low)/2)//2,1,0
        //base case
        if(low===high){//true
            return
        }
        //counter condition
        if(arr[mid]===k){
            count++
        }
        solve(arr,low,mid,k)
        solve(arr,mid+1,high,k);//0,2,1
    }
    if(arr[n-1]==k){
        count++
    }
    console.log(count)
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  