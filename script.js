function windowLoaded(e) {
  // addEventListener setups a function (closeForm) to run on "click" event
  // document.getElementById("popupForm").addEventListener("click", closeForm);
  document.getElementById("ticketForm").addEventListener("click", closeTicket);
}

// run windowLoaded on window load
window.onload = windowLoaded;

function openTicket() {
  document.getElementById("ticketForm").style.display = "block";
}

function closeTicket(e) {
  if (e.target === e.currentTarget) {
    document.getElementById("ticketForm").style.display = "none";
  }
}
function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

document.getElementById("contactsubmit").addEventListener("click", closeForm);

function closeForm(e) {
  document.getElementById("popupForm").style.display = "none";
  // e contains data about the click event
  // e.target is what the eventlistener is on (popupForm)
  // e.currentTarget is what we actually clicked!
  // We gotta check that cause this also runs on popupForm's children, but we ONLY want the background
}
