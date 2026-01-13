// Ambil nama tamu dari URL
const params = new URLSearchParams(window.location.search);
const guestName = params.get('to');

if (guestName) {
  document.getElementById('guest').innerText = guestName;
} else {
  document.getElementById('guest').innerText = "Tamu Undangan";
}

function openInvite(){
  document.getElementById("cover").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
  document.getElementById("music").play();
}

document.addEventListener("DOMContentLoaded", function(){

  const form = document.getElementById("guestForm");
  const messages = document.getElementById("guestMessages");

  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();
      const name = document.getElementById("guestName").value;
      const msg = document.getElementById("guestMessage").value;

      const box = document.createElement("div");
      box.innerHTML = `<strong>${name}</strong><p>${msg}</p><hr>`;
      messages.prepend(box);

      form.reset();
    });
  }

});

const phone = "62895617703381"; // ganti dengan nomor WA kamu
const rsvpBtn = document.getElementById("rsvpBtn");
rsvpBtn.href = `https://wa.me/${phone}?text=Assalamualaikum,%20saya%20akan%20hadir%20di%20pernikahan%20Nadia%20dan%20Gunawan.`;

// Buku Tamu
const form = document.getElementById("guestForm");
const messages = document.getElementById("guestMessages");

form.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const msg = document.getElementById("message").value;

  const div = document.createElement("div");
  div.innerHTML = `<strong>${name}</strong><p>${msg}</p><hr>`;
  messages.prepend(div);

  form.reset();
});
