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
  settingSelectors.forEach((elem) => {
    elem.addEventListener("input", keepOneSettingChecked);
  });
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

function keepOneSettingChecked() {
  let checkedSettings = document.querySelectorAll(
      "input[type=checkbox]:checked"
    ),
    disabledSettings = document.querySelectorAll(
      "input[type=checkbox]:disabled"
    );

  if (checkedSettings.length < 2) {
    checkedSettings[0].disabled = 1;
  } else if (checkedSettings.length > 1 && disabledSettings.length > 0) {
    disabledSettings[0].disabled = 0;
  }
}

function allowedSettings() {
  let response = {
    hasUpper: selectItem("doUpper").checked,
    hasLower: selectItem("doLower").checked,
    hasNum: selectItem("doNum").checked,
    hasSymbls: selectItem("doSym").checked,
  };
  return response;
}

function generateCharArray(type) {
  let start,
    end,
    responseArray = [];

  switch (type) {
    default:

    case "0-9":
      start = 48;
      end = 57;
      break;

    case "A-Z":
      start = 65;
      end = 90;
      break;

    case "a-z":
      start = 97;
      end = 122;
  }

  for (; start <= end; start++) {
    responseArray.push(String.fromCharCode(start));
  }

  return responseArray;
}
