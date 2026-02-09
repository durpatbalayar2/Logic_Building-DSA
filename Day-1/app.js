// ✅ JavaScript Interview Practice — Day 1

// Q1. Remove duplicates
// const arr = [4, 5, 4, 6, 7, 5, 8];
// Output: [4,5,6,7,8]


// Ans:
// Since it is unsorted array
// Using Set  -> new Set(arr)  => //Set(5) { 4, 5, 6, 7, 8 }
// Set-special object that stores only unique values 
//[... new Set(arr)] -->spread operator takes values from Set and puts them into an array

const arr = [4, 5, 4, 6, 7, 5, 8];
const new_arr = [... new Set(arr)]    
console.log(new_arr); //[ 4, 5, 6, 7, 8 ]



// includes - Checks whether a value exists in array.
let result =[]
for(let i=0;i<arr.length;i++){
    if(!result.includes(arr[i])){
        result.push(arr[i])
        
    }
}
console.log(result);


// using filter

const filter_arr = arr.filter((val,idx)=>{
    return arr.indexOf(val)===idx  //Keep element only when its first occurrence index matches current index
})
console.log(filter_arr); //[ 4, 5, 6, 7, 8 ] 




// Q2. Merge arrays without duplicates
// const a = [1,2,3];
// const b = [3,4,5];

const a = [1,2,3];
const b = [3,4,5];
// SET
let merge_arr = [...a,...b] // [1,2,3,3,4,5]
const fil_arr = [... new Set(merge_arr)]
console.log(fil_arr);

// OR


//Filter

let flt_arr = merge_arr.filter((val,idx)=>{
   return merge_arr.indexOf(val) === idx
})

console.log(flt_arr);


//Q3. Reverse words in string
// const str = "hello world";
// Output: "world hello"

const str = "hello world";
let n_str = str.split(" ").reverse().join(" ") //world hello
console.log(n_str);



// Q4. Count vowels
// const str = "javascript";
// Output: 3


const s = "javascript";
let count =0
let vowels = 'aeiou'

for(let i=0; i<s.length;i++){
    if(vowels.includes(s[i])){
        count++
    }
}

console.log(count); //3


// Q5. Find largest number
const arr1 = [10, 45, 2, 99, 23];

let max = arr1[0]

for(let i=1; i<arr1.length;i++){

    if(arr1[i]>max){
        max = arr1[i]
    }

}

console.log(max); // 99


// Q6. Logical operator output

// What will be output?

console.log(false || "" || 0 || "JS");  // JS













