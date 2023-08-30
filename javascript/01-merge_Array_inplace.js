const merge = function (nums1, m, nums2, n) {
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
  while (n > 0) {
    nums1[m + n - 1] = nums2[n - 1];
    n--;
  }
};

const merge2 = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

// letcode solution

const merge3 = (nums1, m, nums2, n) => {
  let r1 = m - 1;
  let r2 = n - 1;
  for (let w = m + n - 1; w >= 0; w--) {
    if (r1 >= 0 && r2 >= 0) {
      nums1[w] = nums1[r1] > nums2[r2] ? nums1[r1--] : nums2[r2--];
    } else if (r1 >= 0) {
      nums1[w] = nums1[r1--];
    } else if (r2 >= 0) {
      nums1[w] = nums2[r2--];
    }
  }
  return;
};

nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;
merge3(nums1, m, nums2, n);
console.log(nums1);
