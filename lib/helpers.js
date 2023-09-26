export const fetchUsers = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const { first: firstName, last: lastName } = data.results[0].name;
  return { firstName, lastName };
};

export function checkIfValid(e, setError) {
  let inputAcceptable = /^\d+$/.test(e.target.value);
  if (!inputAcceptable && e.target.value) {
    let savedPos = e.target.selectionStart;
    e.target.value = e.target.value.replaceAll(/[^0-9]+/g, "");
    e.target.selectionStart = savedPos - 1;
    e.target.selectionEnd = savedPos - 1;
    setError("Only numbers are allowed.");
    return;
  } else if (inputAcceptable) {
    setError("");
  }
}

export function getFormValues() {
  const number1 = document.querySelector("#number-1").value;
  const number2 = document.querySelector("#number-2").value;
  const number3 = document.querySelector("#number-3").value;
  const number4 = document.querySelector("#number-4").value;
  const vendor = document.querySelector("#vendor").value;
  const ccv = document.querySelector("#ccv").value;
  const month = document.querySelector("#month").value;
  const year = document.querySelector("#year").value;
  const validThru = `${month}/${year}`;

  return { number1, number2, number3, number4, vendor, ccv, validThru };
}