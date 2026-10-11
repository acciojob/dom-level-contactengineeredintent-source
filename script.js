//your JS code here. If required.
let target = document.getElementById("level");
let count = 0;
while (target.tagName !== "HTML") {
  count++;
  target = target.parentElement;
}
alert(count+2);