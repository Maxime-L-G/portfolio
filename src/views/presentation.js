const viewPresentation = () => `
<div class="relative isolate overflow-hidden py-24 sm:py-32">
  <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  
  <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-wrap items-start gap-8 relative">
    <div class="flex flex-col items-start justify-between w-full lg:w-auto">
      <h2 class="text-4xl font-bold tracking-tight text-black sm:text-6xl">Présentation</h2>
      <p class="mt-6 text-lg leading-8 text-black">Je m'appelle Maxime, étudiant en deuxième année dans une école d'informatique, et je suis passionné par le développement logiciel. Depuis toujours, l'univers du code me fascine, et je consacre une grande partie de mon temps à explorer de nouveaux langages et technologies. Que ce soit en back-end ou en front-end, j'aime relever des défis techniques et chercher des solutions innovantes.</p>
      <div class="mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
          <!-- Ajout de l'ancre pour lier à la section des projets -->
          <a class="text-[#3498db]" href="#projet1-section">Projets <span aria-hidden="true">&rarr;</span></a>
          <a class="text-[#3498db]" href="https://drive.google.com/file/d/1W_2BDy4GFVxXn18efJZn-eg6bSUtL3jc/view?usp=drive_link">Curriculum Vitae <span aria-hidden="true">&rarr;</span></a>
          <a class="text-[#3498db]" href="https://www.linkedin.com/in/maxime-lecourt-guerin-4384412a6/">Linkedin <span aria-hidden="true">&rarr;</span></a>
          <a class="text-[#3498db]" href="https://github.com/Maxime-L-G">Github <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </div>
    
    <div class="relative mt-10 lg:mt-0 mx-auto flex justify-center"> <!-- Changement en 'mx-auto flex justify-center' pour centrer l'image -->
      <div class="absolute -top-10 -left-10 w-96 h-96"></div>
      <a href="https://ibb.co/KXLXfHq">
        <img src="https://i.ibb.co/NSwvFdd/Moi-removebg-preview-1.png" alt="Moi-removebg-preview" border="0" class="relative z-10 filter brightness-110 saturate-150" style="width: 600px; height: auto;">
      </a>  
    </div>
  </div>
  <div class="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
    <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4" id="projets-section">
      <div class="flex flex-col-reverse">
        <dt class="text-base leading-7 text-black">🏠 Application de colocation</dt>
        <dd class="text-2xl font-bold leading-9 tracking-tight text-black">Projets</dd>
      </div>
      <div class="flex flex-col-reverse">
        <dt class="text-base leading-7 text-black">🤖 Chatbot</dt>
        <dd class="text-2xl font-bold leading-9 tracking-tight text-black"></dd>
      </div>
      <div class="flex flex-col-reverse">
        <dt class="text-base leading-7 text-black">📔 Memento</dt>
        <dd class="text-2xl font-bold leading-9 tracking-tight text-black"></dd>
      </div>
      <div class="flex flex-col-reverse">
        <dt class="text-base leading-7 text-black">🎯 Jeu de tir</dt>
        <dd class="text-2xl font-bold leading-9 tracking-tight text-black"></dd>
      </div>
    </dl>
  </div>
</div>
`;

export default viewPresentation;
