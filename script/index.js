// nav-er -btn



  document.addEventListener("DOMContentLoaded", function () {
    const faqBtn = document.getElementById("faq");
    const header = document.getElementById("header");
    const lessonSection = document.getElementById("Lesson-section");

    let isHidden = false;

    faqBtn.addEventListener("click", function () {
      isHidden = !isHidden;

      if (isHidden) {
        header.style.display = "none";
        lessonSection.style.display = "none";
      } else {
        header.style.display = "flex"; 
        lessonSection.style.display = "block"; 
      }
    });
  });









    document.addEventListener("DOMContentLoaded", function () {
    const learnBtn = document.getElementById("learn");
    const header = document.getElementById("header");
    const frequently = document.getElementById("Frequently");
    const footer = document.getElementById("footer")

    let isHidden = false;

    learnBtn.addEventListener("click", function () {
      isHidden = !isHidden;

      // header এবং frequently কে hide/show করা হচ্ছে
      header.style.display = isHidden ? "none" : "flex";
      footer.style.display = isHidden ? "none" : "block";
      frequently.style.display = isHidden ? "none" : "block";
      
    });
  });









// active  btn





//

  // Wait for the DOM to load
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("#lesson button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove("bg-sky-700", "text-white"));

        // Add active class to the clicked button
        button.classList.add("bg-sky-700", "text-white");
      });
    });
  })






























// login input
 document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("input-name");
    const passwordInput = document.getElementById("input-pas");
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("Logout");
    const header = document.getElementById("header");

    loginBtn.addEventListener("click", function () {
      const name = nameInput.value.trim();
      const password = passwordInput.value;

      if (name !== "" && password === "123456") {
        header.style.display = "none"; // hide header
      } else {
        alert("Invalid name or password!");
      }
    });

    logoutBtn.addEventListener("click", function () {
      header.style.display = "block"; // show header again
    });
  });












  // Lesson-btn


  // Lesson-1




  const button = document.getElementById('Lesson-1');

button.addEventListener('click', async () => {
  // 1. সব কিছু hide করে দাও (nav আর lesson-section বাদে)
  const allElements = document.body.children;
  for (let i = 0; i < allElements.length; i++) {
    const el = allElements[i];
    if (el.id !== 'nav' && el.id !== 'Lesson-section') {
      el.style.display = 'none';
    }
  }

  // 2. lesson-section এর সব কিছু hide করো
  const lessonSection = document.getElementById('Lesson-section');
  lessonSection.style.display = 'block';

  const lessonChildren = lessonSection.children;
  for (let i = 0; i < lessonChildren.length; i++) {
    lessonChildren[i].style.display = 'none';
  }

  // ✅ "lesson" id ওয়ালা div (যেখানে সব Lesson button আছে) show করো
  const lessonButtonGroup = document.getElementById('lesson');
  lessonButtonGroup.style.display = 'flex';

  // আগের কার্ড থাকলে মুছে ফেলো
  const existing = document.getElementById('lesson-cards');
  if (existing) existing.remove();

  // 3. ডেটা আনো এবং প্রথম ৯টি কার্ড দেখাও
  try {
    const res = await fetch('https://openapi.programming-hero.com/api/level/5');
    const data = await res.json();

    const container = document.createElement('div');
    container.id = 'lesson-cards';
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10';

    data.data.slice(0, 9).forEach(item => {
      const card = document.createElement('div');
      card.className = 'bg-white shadow-lg rounded-xl p-6 border border-dashed border-blue-400';

      card.innerHTML = `
        <h3 class="text-xl font-bold mb-1 text-center">${item.word}</h3>
        <p class="text-sm text-center font-semibold text-gray-700 mb-2">Meaning /Pronounciation</p>
        <p class="text-center text-xl font-semibold mb-4">"${item.meaning}"</p>

  <div class="flex justify-between px-11">
          <button class="bg-blue-100 p-2 rounded-full">
            <img src="./assets/icons8-info-50.png" class="w-5 h-5" alt="info">
          </button>
          <button  class="bg-blue-100 p-2 rounded-full">
            <img src="./assets/icons8-sound-50.png" class="w-5 h-5" alt="play">
          </button>
        </div>
      `;

      container.appendChild(card);
    });

    lessonSection.appendChild(container);

  } catch (error) {
    console.error('API fetch error:', error);
  }
});

function playSound(audioUrl) {
  const audio = new Audio(audioUrl);
  audio.play();
}





// Lesson-2



const button_2 = document.getElementById('Lesson-2');

button_2.addEventListener('click', async () => {
  // 1. সব কিছু hide করে দাও (nav আর lesson-section বাদে)
  const allElements = document.body.children;
  for (let i = 0; i < allElements.length; i++) {
    const el = allElements[i];
    if (el.id !== 'nav' && el.id !== 'Lesson-section') {
      el.style.display = 'none';
    }
  }

  // 2. lesson-section দেখাও
  const lessonSection = document.getElementById('Lesson-section');
  lessonSection.style.display = 'block';

  // lesson-section এর সব children hide করো
  const lessonChildren = lessonSection.children;
  for (let i = 0; i < lessonChildren.length; i++) {
    lessonChildren[i].style.display = 'none';
  }

  // ✅ Lesson Button গুলো দেখাও (id="lesson" div)
  const lessonButtonGroup = document.getElementById('lesson');  // এই line টা নতুন
  lessonButtonGroup.style.display = 'flex';                     // এই line টা নতুন

  // আগের কার্ড থাকলে মুছে ফেলো
  const existing = document.getElementById('lesson-cards');
  if (existing) existing.remove();

  // 3. ডেটা আনো এবং ১০ থেকে ১৫ নম্বর কার্ড দেখাও
  try {
    const res = await fetch('https://openapi.programming-hero.com/api/level/5');
    const data = await res.json();

    const container = document.createElement('div');
    container.id = 'lesson-cards';
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10';

    data.data.slice(9, 15).forEach(item => {
      const card = document.createElement('div');
      card.className = 'bg-white shadow-lg rounded-xl p-6 border border-dashed border-blue-400';

      card.innerHTML = `
        <h3 class="text-xl font-bold mb-1 text-center">${item.word}</h3>
        <p class="text-sm text-center font-semibold text-gray-700 mb-2">Meaning /Pronounciation</p>
        <p class="text-center text-xl font-semibold mb-4">"${item.meaning}"</p>

       

        <div class="flex justify-between px-11">
          <button class="bg-blue-100 p-2 rounded-full">
            <img src="./assets/icons8-info-50.png" class="w-5 h-5" alt="info">
          </button>
          <button  class="bg-blue-100 p-2 rounded-full">
            <img src="./assets/icons8-sound-50.png" class="w-5 h-5" alt="play">
          </button>
        </div>
      `;

      container.appendChild(card);
    });

    lessonSection.appendChild(container);

  } catch (error) {
    console.error('API fetch error:', error);
  }
});

function playSound(audioUrl) {
  const audio = new Audio(audioUrl);
  audio.play();
}



// Lesson-3




const button_3 = document.getElementById('Lesson-3');

button_3.addEventListener('click', async () => {
  // 1. সব কিছু hide করে দাও (nav আর lesson-section বাদে)
  const allElements = document.body.children;
  for (let i = 0; i < allElements.length; i++) {
    const el = allElements[i];
    if (el.id !== 'nav' && el.id !== 'Lesson-section') {
      el.style.display = 'none';
    }
  }

  // 2. lesson-section দেখাও
  const lessonSection = document.getElementById('Lesson-section');
  lessonSection.style.display = 'block';

  // lesson-section এর সব children hide করো
  const lessonChildren = lessonSection.children;
  for (let i = 0; i < lessonChildren.length; i++) {
    lessonChildren[i].style.display = 'none';
  }

  // ✅ Lesson Button গুলো দেখাও (id="lesson" div)
  const lessonButtonGroup = document.getElementById('lesson');
  lessonButtonGroup.style.display = 'flex';

  // আগের কার্ড থাকলে মুছে ফেলো
  const existing = document.getElementById('lesson-cards');
  if (existing) existing.remove();

  // 3. ডেটা আনো এবং ১৬ থেকে ২৪ নম্বর কার্ড দেখাও (index 15 to 23)
  try {
    const res = await fetch('https://openapi.programming-hero.com/api/level/5');
    const data = await res.json();

    const container = document.createElement('div');
    container.id = 'lesson-cards';
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10';

    data.data.slice(15, 24).forEach(item => {
      const card = document.createElement('div');
      card.className = 'bg-white shadow-lg rounded-xl p-6 border border-dashed border-blue-400';

      card.innerHTML = `
        <h3 class="text-xl font-bold mb-1 text-center">${item.word}</h3>
        <p class="text-sm text-center font-semibold text-gray-700 mb-2">Meaning /Pronounciation</p>
        <p class="text-center text-xl font-semibold mb-4">"${item.meaning}"</p>

     



        
<div class="flex justify-between px-11">
          <button class="bg-blue-100 p-2 rounded-full">
            <img src="./assets/icons8-info-50.png" class="w-5 h-5" alt="info">
          </button>
          <button  class="bg-blue-100 p-2 rounded-full">
            <img src="./assets/icons8-sound-50.png" class="w-5 h-5" alt="play">
          </button>
        </div>
      `;

      container.appendChild(card);
    });

    lessonSection.appendChild(container);

  } catch (error) {
    console.error('API fetch error:', error);
  }
});

function playSound(audioUrl) {
  const audio = new Audio(audioUrl);
  audio.play();
}






// Lesson-4


document.getElementById("Lesson-4").addEventListener("click", function () {
  // Hide all the main sections
  document.getElementById("header").style.display = "none";

  document.getElementById("lest").style.display = "none";
  document.getElementById("Select").style.display = "none";
  document.getElementById("Frequently").style.display = "none";
  document.getElementById("footer").style.display = "none";

const existing = document.getElementById('lesson-cards');
  if (existing) existing.remove();

  // Remove any previously shown custom message (if exists)
  const existingMessage = document.getElementById("lesson-4-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create and show the error message block
  const messageDiv = document.createElement("div");
  messageDiv.id = "lesson-4-message"; // set an ID so we can remove it later if needed
  messageDiv.className = "pt-20 pb-20 bg-[#e3e4e9]";
  messageDiv.innerHTML = `
    <div class="flex justify-center">
      <img class="pt-5" src="./assets/alert-error.png" alt="">
    </div>
    <p class="text-xl flex justify-center pt-12">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
    <h1 class="text-4xl font-medium flex justify-center py-6">নেক্সট Lesson এ যান</h1>
  `;

  // Append the message block to the body
  document.body.appendChild(messageDiv);
});


 
// Lesson-5


const button_5 = document.getElementById('Lesson-5');

button_5.addEventListener('click', async () => {
  // 1. সব কিছু hide করে দাও (nav আর lesson-section বাদে)
  const allElements = document.body.children;
  for (let i = 0; i < allElements.length; i++) {
    const el = allElements[i];
    if (el.id !== 'nav' && el.id !== 'Lesson-section') {
      el.style.display = 'none';
    }
  }

  // 2. lesson-section দেখাও
  const lessonSection = document.getElementById('Lesson-section');
  lessonSection.style.display = 'block';

  // lesson-section এর সব children hide করো
  const lessonChildren = lessonSection.children;
  for (let i = 0; i < lessonChildren.length; i++) {
    lessonChildren[i].style.display = 'none';
  }

  // ✅ Lesson Button গুলো দেখাও (id="lesson" div)
  const lessonButtonGroup = document.getElementById('lesson');
  lessonButtonGroup.style.display = 'flex';

  // আগের কার্ড থাকলে মুছে ফেলো
  const existing = document.getElementById('lesson-cards');
  if (existing) existing.remove();

  // 3. নতুন API থেকে ডেটা আনো এবং index 0 থেকে 8 (1-9) কার্ড দেখাও
  try {
    const res = await fetch('https://openapi.programming-hero.com/api/words/all');
    const data = await res.json();

    const container = document.createElement('div');
    container.id = 'lesson-cards';
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10';

    data.data.slice(0, 9).forEach(item => {
      const card = document.createElement('div');
      card.className = 'bg-white shadow-lg rounded-xl p-6 border border-dashed border-blue-400';

      card.innerHTML = `
        <h3 class="text-xl font-bold mb-1 text-center">${item.word}</h3>
        <p class="text-sm text-center font-semibold text-gray-700 mb-2">Meaning /Pronunciation</p>
        <p class="text-center text-xl font-semibold mb-4">"${item.meaning}"</p>

        <div class="flex justify-between px-11">
          <button class="bg-blue-100 p-2 rounded-full">
            <img src="./assets/icons8-info-50.png" class="w-5 h-5" alt="info">
          </button>
          <button class="bg-blue-100 p-2 rounded-full" onclick="playSound('${item.audio}')">
            <img src="./assets/icons8-sound-50.png" class="w-5 h-5" alt="play">
          </button>
        </div>
      `;

      container.appendChild(card);
    });

    lessonSection.appendChild(container);

  } catch (error) {
    console.error('API fetch error:', error);
  }
});

// 🔊 শব্দ প্লে করার ফাংশন
function playSound(audioUrl) {
  const audio = new Audio(audioUrl);
  audio.play();
}







// Lesson-6





const button_6 = document.getElementById('Lesson-6');

button_6.addEventListener('click', async () => {
  // 1. সব কিছু hide করে দাও (nav আর lesson-section বাদে)
  const allElements = document.body.children;
  for (let i = 0; i < allElements.length; i++) {
    const el = allElements[i];
    if (el.id !== 'nav' && el.id !== 'Lesson-section') {
      el.style.display = 'none';
    }
  }

  // 2. lesson-section দেখাও
  const lessonSection = document.getElementById('Lesson-section');
  lessonSection.style.display = 'block';

  // lesson-section এর সব children hide করো
  const lessonChildren = lessonSection.children;
  for (let i = 0; i < lessonChildren.length; i++) {
    lessonChildren[i].style.display = 'none';
  }

  // ✅ Lesson Button গুলো দেখাও (id="lesson" div)
  const lessonButtonGroup = document.getElementById('lesson');
  lessonButtonGroup.style.display = 'flex';

  // আগের কার্ড থাকলে মুছে ফেলো
  const existing = document.getElementById('lesson-cards');
  if (existing) existing.remove();

  // 3. নতুন API থেকে ডেটা আনো এবং index 10 থেকে 15 (11-16) কার্ড দেখাও
  try {
    const res = await fetch('https://openapi.programming-hero.com/api/words/all');
    const data = await res.json();

    const container = document.createElement('div');
    container.id = 'lesson-cards';
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10';

    data.data.slice(10, 16).forEach(item => {
      const card = document.createElement('div');
      card.className = 'bg-white shadow-lg rounded-xl p-6 border border-dashed border-blue-400';

      card.innerHTML = `
        <h3 class="text-xl font-bold mb-1 text-center">${item.word}</h3>
        <p class="text-sm text-center font-semibold text-gray-700 mb-2">Meaning /Pronunciation</p>
        <p class="text-center text-xl font-semibold mb-4">"${item.meaning}"</p>

        <div class="flex justify-between px-11">
          <button class="bg-blue-100 p-2 rounded-full">
            <img src="./assets/icons8-info-50.png" class="w-5 h-5" alt="info">
          </button>
          <button class="bg-blue-100 p-2 rounded-full" onclick="playSound('${item.audio}')">
            <img src="./assets/icons8-sound-50.png" class="w-5 h-5" alt="play">
          </button>
        </div>
      `;

      container.appendChild(card);
    });

    lessonSection.appendChild(container);

  } catch (error) {
    console.error('API fetch error:', error);
  }
});

// 🔊 শব্দ প্লে করার ফাংশন
function playSound(audioUrl) {
  const audio = new Audio(audioUrl);
  audio.play();
}




// Lesson-7


document.getElementById("Lesson-7").addEventListener("click", function () {
  // Hide all the main sections
  document.getElementById("header").style.display = "none";

  document.getElementById("lest").style.display = "none";
  document.getElementById("Select").style.display = "none";
  document.getElementById("Frequently").style.display = "none";
  document.getElementById("footer").style.display = "none";
  
const existing = document.getElementById('lesson-cards');
  if (existing) existing.remove();

  // Remove any previously shown custom message (if exists)
  const existingMessage = document.getElementById("lesson-4-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create and show the error message block
  const messageDiv = document.createElement("div");
  messageDiv.id = "lesson-4-message"; // set an ID so we can remove it later if needed
  messageDiv.className = "pt-20 pb-20 bg-[#e3e4e9]";
  messageDiv.innerHTML = `
    <div class="flex justify-center">
      <img class="pt-5" src="./assets/alert-error.png" alt="">
    </div>
    <p class="text-xl flex justify-center pt-12">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
    <h1 class="text-4xl font-medium flex justify-center py-6">নেক্সট Lesson এ যান</h1>
  `;

  // Append the message block to the body
  document.body.appendChild(messageDiv);
});





