const requestForm = document.getElementById("requestForm");
const confirmation = document.getElementById("confirmation");

requestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(requestForm);
  const type = form.get("type");
  const room = form.get("room");
  confirmation.textContent = `Demo only: ${type} for ${room} is ready for an availability review. No data was sent.`;
  requestForm.reset();
});
