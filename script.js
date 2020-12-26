const length = selectItem("lengthRange"),
  lengthPrev = selectItem("lengthPreview"),
  generateBtn = selectItem("generateBtn"),
  passwdOutput = selectItem("pass-output"),
  settingSelectors = document.querySelectorAll("[type='checkbox']");

window.addEventListener("load", () => {
  length.addEventListener("input", updateLengthPrev);
  updateLengthPrev();
});

function selectItem(id) {
  return document.getElementById(id);
}

function updateLengthPrev() {
  lengthPrev.innerHTML = length.value;
}
