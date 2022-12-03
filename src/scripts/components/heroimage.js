class Heroimage extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div class="herobanner">
      <img src="/images/heros/jacek-dylag-kH3Sr9K8EBA-unsplash (1).jpg" alt="herobanner" />
    </div>
    `;
    }
  }
  
  customElements.define('hero-image', Heroimage);
  