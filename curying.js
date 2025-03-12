// 

var removeElement = function(nums, val) {
    let num=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            num.push(nums[i])
        }
    }

    return num;
};

console.log(removeElement([3,2,2,3],3))