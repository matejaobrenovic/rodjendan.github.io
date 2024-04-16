function sledecaStrana() {
  window.location.href = "yes.html";
}

function pomeriDugme() {
  var x =
    Math.random() *
      (window.innerWidth - document.getElementById("odbijeno").offsetWidth) -
    85;
  var y =
    Math.random() *
      (window.innerHeight - document.getElementById("odbijeno").offsetHeight) -
    22;
  document.getElementById("odbijeno").style.left = `${x}px`;
  document.getElementById("odbijeno").style.top = `${y}px`;
}
