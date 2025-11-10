function solution(nums) {
  const dataSize = new Set(nums).size;
  const k = nums.length / 2;
  return dataSize > k ? k : dataSize;
}