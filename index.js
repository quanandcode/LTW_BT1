const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const button = document.querySelector(".button-sum");
const result = document.querySelector(".display-result");
console.log(typeof result.innerHTML);
const calculator = () => {
  let res = result.innerHTML;
  if (!isNaN(res[res.length - 1])) {
    result.innerHTML = res.substring(0, res.indexOf(":") + 1);
  }
  if (
    Number(input1.value) < 0 ||
    Number(input2.value) < 0 ||
    input1.value.length == 0 ||
    input2.value.length == 0
  ) {
    alert("Vui lòng nhập 2 số dương");
  } else if (isNaN(input1.value) || isNaN(input2.value)) {
    alert("Yêu cầu không được nhập kí tự chữ cái và kí hiệu");
  } else {
    let ans = Number(input1.value) + Number(input2.value);

    result.innerHTML += ans.toString();
    console.log(typeof ans);
  }
};
