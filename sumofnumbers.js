function sumFor(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

function sumWhile(nums) {
  let sum = 0;
  let count = 0;
  while (count < nums.length) {
    sum += nums[count];
    count++;
  }
  return sum;
}

const sumRecursion = (nums, index) => {
  if (index <= 0) {
    return 1;
  }
  return sumRecursion(nums, index - 1) + nums[index - 1];
};

function sumTheSimpleWay(nums) {
  return _.reduce(nums, (memo, num) => memo + num);
}

const nums = [1, 2, 3, 30];

console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums));
console.log((sumTheSimpleWay(nums)));
