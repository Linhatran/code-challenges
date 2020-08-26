const modifyArray = (arr) => {
     let newArr = [];
  for (let i = 0; i< arr.length;i++) {
    if (arr[i]%2 === 0) {
      arr[i] = arr[i]*2;
      newArr.push(arr[i])
    }
    if (arr[i]%2 === 1) {
      arr[i] = arr[i]*3;
      newArr.push(arr[i]);
    }
  } return newArr;
}
