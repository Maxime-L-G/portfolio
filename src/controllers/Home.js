import viewNav from '../views/navbar';
import viewPresentation from '../views/presentation';
import viewCv from '../views/cv';
import viewProjet1 from '../views/projet1';
import viewProjet2 from '../views/projet2';
import viewFooter from '../views/footer';

const Home = class Home {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  async render() {
    return ` 
    <section class="bg-image">
      <div>${viewNav()}</div>
      <div>${viewPresentation()}</div>
      <div>${viewCv()}</div>
      <div>${viewProjet1()}</div>
      <div>${viewProjet2()}</div>
      <div>${viewFooter()}</div>
    </section>
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
  }
};

export default Home;
