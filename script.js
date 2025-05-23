const text = "Happyyy sweet seventeen sayangg, maaf aga tadi telat ucapin nyaa yaa, aga ulang lagi ucapin nya lewat codingan yang aga buat sekarang ni, aga ga bisa ngomong apa apa, intinyaa aga banyak bilang makasih sama renata karena renata dahh bertahan selama ini sama aga, banyak cobaan rintangan yang telah kita lalui sayangg, aga ga nyangka juga kita bakal sekuat ini, aga ga nyangka juga di hari kelahiran renata yang ini aga masih sama renata, semoga renata di beri kesabaran atas cobaan yang renata rasakan sekarang yaa, jangan pernah menganggap diri renata sendiri ya sayangg, disini ada aga yang selalu mensupport apapun yang renata lakukan, dan aga pasti selalu nemenin renata, semoga kedepan nya renata bisa capai semuaa impian renata yang pernah renata ceritain ke aga, aga bakal doain yang terbaik buat renata, aga bakal jadi orang pertama yang menunggu kabar baik maupun buruk dari renata, love youuu sayanggg💕💕;"
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 60);
  } else {
    launchConfetti();
  }
}

function launchConfetti() {
  const duration = 5 * 1000;
  const end = Date.now() + duration;
  
  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
    
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

document.getElementById("play-music").onclick = () => {
  document.getElementById("bg-music").play();
};

window.onload = () => {
  typeText();
};