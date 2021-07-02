 def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}
        for index, num in enumerate(nums):
            if num not in dict:
                dict[target-num] = True
            else: 
                return [index, nums.index(target-num)]
