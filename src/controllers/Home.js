import viewNav from '../views/navbar';

const Home = class Home {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  async render() {
    return `
    <div>${viewNav()}</div>
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
  }
};

export default Home;
