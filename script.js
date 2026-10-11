//your JS code here. If required.
let target = document.getElementById("level");
let count = 0;
while (target.parentElement.tagName !== "HTML") {
  count++;
  target = target.parentElement;
}
console.log(count+2);