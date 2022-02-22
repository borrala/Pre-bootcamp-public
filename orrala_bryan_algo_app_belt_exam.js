//NUMBER 1
for(x=1;x<=255;x++){
    console.log(x)
}

//NUMBER 2
for(x=1;x<=255;x+=2){
    if(x%2 !=0 ){
        console.log(x)
    }
}

//NUMBER 3
var sum=0
for(x=0;x<=255;x++){
    console.log(x)
    sum=sum+x
}
console.log(sum)

//NUMBER 4
function iterArr(arr){
    for(x=0;x<arr.length;x++){
        console.log(arr[x])
    }
}
iterArr([1,2,3,4,5,6,7,8,9])

//NUMBER 5
function maxArr(arr){
    var max=0
    for(x=0;x<arr.length;x++){
        if(arr[x]>max){
            max=arr[x]
        }
    }
    console.log(max)
}
maxArr([7,4,9,6,8])

//NUMBER 6
function averageArr(arr){
    var average=0
    for(x=0;x<arr.length;x++){
        average= average+arr[x]
    }
    average= average/arr.length
    console.log(average)
}
averageArr([6,8,2,7,9])

//NUMBER 7
function oddArr(arr){
    var arr=[]
    for(x=1;x<=255;x++){
        arr.push(x)
    }
    return arr
}
console.log(oddArr())

//NUMBER 8
function squareArr(arr){
    for(x=0;x<arr.length;x++){
        arr[x]=arr[x]*arr[x]
    }
    return arr
}
console.log(squareArr([3,3,3,3]))

//NUMBER 9
function greaterThanY(arr,y){
    for(x=0;x<arr.length;x++){
        if(arr[x]>y){
            console.log(arr[x])
        }
    }
}
greaterThanY([9,17,88,5,61],10)

//NUMBER 10 //Number 13 and 10 are almost the same exact code
function zeroNegative(arr){
    for(x=0;x<arr.length;x++){
        if(arr[x]< 0){
            arr[x]=0 //I just changed the value here
        }
    }
    console.log(arr)
}
zeroNegative([-1,-2,-3,5,9,17])

//NUMBER 11
function minMaxAverageArr(arr){
    var max=arr[0]
    var min=arr[0]
    var average=0
    for(x=0;x<arr.length;x++){
        if(arr[x]>max){
            max=arr[x]
        }
        else if(arr[x]<min){
            min=arr[x]
        }
        average = average+ arr[x]
    }
    average= average/arr.length
    console.log(min)
    console.log(max)
    console.log(average)
}
minMaxAverageArr([1,2,3,4,5])

//NUMBER 12
function shiftArr(arr){
    var shift=[]
    for(x=1;x<arr.length;x++){
        shift.push(arr[x])
    }
    shift.push(0)
    console.log(shift)
}

shiftArr([6,8,1,11])

//NUMBER 13
function negativeStringArr(arr){
    for(x=0;x<arr.length;x++){
        if(arr[x]< 0){
            arr[x]="Dojo"
        }
    }
    console.log(arr)
}
negativeStringArr([-1,-2,-3,6,1,9])