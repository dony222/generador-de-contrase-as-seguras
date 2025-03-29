function generarContrasena() {
  const length = parseInt(document.getElementById('length').value);
  const useMayus = document.getElementById('mayus').checked;
  const useMinus = document.getElementById('minus').checked;
  const useNums = document.getElementById('nums').checked;
  const useSimb = document.getElementById('simb').checked;

  const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minus = "abcdefghijklmnopqrstuvwxyz";
  const nums = "0123456789";
  const simb = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

  let allChars = "";
  if (useMayus) allChars += mayus;
  if (useMinus) allChars += minus;
  if (useNums) allChars += nums;
  if (useSimb) allChars += simb;

  if (!allChars) {
    document.getElementById('resultado').innerText = "Selecciona al menos una opción.";
    return;
  }

  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  document.getElementById('resultado').innerText = pass;
}
