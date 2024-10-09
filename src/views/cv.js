const viewCv = () => `
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <!-- Image -->
        <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
          <img
            alt=""
            src="https://static.wixstatic.com/media/324d06_dbbe6af614f84c4f942e8f6fd2dca62b~mv2.jpg/v1/fill/w_560,h_352,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/orleans-centre-ville.jpg"
            class="absolute inset-0 h-full w-full object-cover border-none shadow-none"
          />
        </div>

        <div class="lg:py-24">
          <h2 class="text-3xl font-bold sm:text-4xl text-black">🎓 Formation</h2>
          <p class="mt-4 text-black">
            BACHELOR, DEVELOPPEUR CONCEPTEUR D’APPLICATION de sept. 2023 à août 2026 CODA, Orléans
          </p>

          <!-- Section Compétences en dessous de Formation -->
          <div class="mt-8">
            <h2 class="text-2xl font-bold sm:text-3xl text-black">Compétences</h2>
            <ul class="mt-4 grid grid-cols-2 gap-x-8 gap-y-4 text-lg text-black sm:grid-cols-3 lg:grid-cols-2 border-none">
              <li>PHP</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>WordPress</li>
              <li>MySQL</li>
              <li>HTML/CSS</li>
              <li>Bootstrap</li>
              <li>C</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

export default viewCv;
