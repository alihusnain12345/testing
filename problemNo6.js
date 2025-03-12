let nums=[1,2,2,2,3,4,5,6,6,6];
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; 
    let j = 1; 
    let i=1;
    for ( i ; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) { 
            nums[j] = nums[i]; 
            j++; 
        }
    }
console.log(nums.slice(0,j));
};
removeDuplicates(nums);


