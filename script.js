const generateBtn = document.querySelector("#generate");
const downloadBtn = document.querySelector("#download");
const grImage = document.querySelector("img");
const input = document.querySelector("input");

generateBtn.addEventListener("click", () => {
  const grCode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`;
  grImage.src = grCode;
});

downloadBtn.addEventListener("click", async () => {
  const response = await fetch(grImage.src);
  const blob = await response.blob();
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "grcode.jpg";
  downloadLink.click();
});
