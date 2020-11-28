var twoSum = function(nums, target) {
   //create an empty cache
    const cache = {};
    const found = [];
    //loop through array
    for (let i = 0; i < nums.length; i++) {
      const difference = target - nums[i];
      if (cache[nums[i]]) return [i, nums.indexOf(difference)]
      cache[difference] = true;
    }
   return []
};
