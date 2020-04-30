
//recursive solution
/*
function binarSearch(arr,num,i,start,end){
 end=arr.length-1;
  

   if(arr[i]===num){
     
      return i;
   }
  
  if(num>arr[i]){
    
    start=i+1;
     i=Math.floor((start+end)/2)
    return binarSearch(arr,num,i+1,start,end)
  }
  if(num<arr[i]){
    
    end=i-1;
   i=Math.floor((start+end)/2)
    return binarSearch(arr,num,i-1,start,end)
     
  }
  
}

console.log(binarSearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],8,0,0))
*/

//loop solution
/*
function binarySearch(value, list) {
  debugger
    let first = 0;    
    let last = list.length - 1;   
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
     debugger
        middle = Math.floor((first + last)/2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  
            last = middle - 1;
        } else {  
            first = middle + 1;
        }
    }
    return position;
}
 console.log(binarySearch(14,[1,5,8,14,15,18,20,26,30]))

*/


