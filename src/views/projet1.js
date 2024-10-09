const viewProjet1 = () => `
<div id="projet1-section" class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
    </svg>
  </div>
  <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
        <div class="lg:max-w-lg">
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">🏠 Application de Gestion de Colocation</h1>
          <p class="mt-6 text-xl leading-8 text-black">La gestion d'une colocation peut souvent être chaotique, notamment en ce qui concerne le partage des dépenses, la répartition des tâches ménagères ou encore la communication entre colocataires. Cette application a pour objectif de faciliter la vie en colocation en centralisant toutes ces fonctionnalités sur une plateforme unique et intuitive.</p>
        </div>
      </div>
    </div>
    <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
      <img class="w-[30rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem]" src="https://i.ibb.co/G0XkPTj/appcolo.png" alt="">
      <img class="mt-8 w-[30rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem]" src="https://i.ibb.co/zSHPxj2/appcolo2.png" alt="chatbot second image" border="0">
    </div>
    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
          <h3 class="text-2xl font-bold text-black">Technologie utilisée</h3>
          <ul role="list" class="mt-8 space-y-8 text-black">
            <li class="flex gap-x-3">
              <span><strong class="font-semibold text-black">MySql : Base de donnée </strong>J'ai utilisé MySQL pour structurer et gérer la base de données, ce qui m'a permis de stocker les informations des utilisateurs, les tâches, les dépenses, et d'autres données liées à la colocation de manière efficace et sécurisée.</span>
            </li>
            <li class="flex gap-x-3">
              <span><strong class="font-semibold text-black">Back-end : PHP </strong>J'ai utilisé PHP pour la gestion des requêtes à la base de données, la validation des données et le traitement des formulaires.</span>
            </li>
            <li class="flex gap-x-3">
              <span><strong class="font-semibold text-black">Front-end </strong> Le front-end a été construit avec JavaScript pour rendre l'application interactive et responsive.</span>
            </li>
            <li class="flex gap-x-3">
              <span><strong class="font-semibold text-black">Bootstrap : </strong>Pour le design, j'ai utilisé Bootstrap pour obtenir une interface moderne, réactive, et facile à utiliser sur différents appareils (ordinateurs, tablettes, smartphones).</span>
            </li>
            <li class="flex gap-x-3">
              <span><strong class="font-semibold text-black">Axios : </strong> Pour les appels API, j'ai utilisé Axios depuis le front-end. L'application envoie des requêtes HTTP (GET, POST, PUT, DELETE) pour interagir avec les données sur le serveur.</span>
            </li>
            <li class="flex gap-x-3">
              <span><strong class="font-semibold text-black">Webpack : Ngx </strong> J'ai utilisé Webpack pour optimiser et gérer les ressources du projet afin d'améliorer les performances et la modularité du code.</span>
            </li>
          </ul>
          <h2 class="mt-16 text-2xl font-bold tracking-tight text-black">Conclusion</h2>
          <p class="mt-6 text-black">Ce projet m'a permis d'acquérir une expérience approfondie dans le développement full-stack, en manipulant différentes technologies pour créer une solution fonctionnelle, intuitive et adaptable. Grâce à ce projet, j'ai pu développer mes compétences en gestion de projet, en structuration d'API, ainsi qu'en conception d'interfaces utilisateur.
          L’application est aujourd’hui prête à être déployée et utilisée par des colocataires pour simplifier leur gestion au quotidien.</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export default viewProjet1;
