const length = selectItem("lengthRange"),
  lengthPrev = selectItem("lengthPreview"),
  generateBtn = selectItem("generateBtn"),
  passwdOutput = selectItem("passwdOutput"),
  outputDisplay = selectItem("outputDisplay"),
  settingSelectors = document.querySelectorAll("[type='checkbox']");

window.addEventListener("load", () => {
  length.addEventListener("input", updateLengthPrev);
  updateLengthPrev();
  outputDisplay.addEventListener("click", copyToClipboard);
});

function selectItem(id) {
  return document.getElementById(id);
}

function updateLengthPrev() {
  lengthPrev.innerHTML = length.value;
}

function copyToClipboard() {
  const elem = document.createElement("textarea"),
    txtValue = passwdOutput.innerText;

  elem.style.cssText = "position: absolute; left:-9999px";
  elem.value = txtValue;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}
