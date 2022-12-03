const ContainerInitiator = {
    init({ button, drawer, content }) {
      button.addEventListener('click', (event) => {
        this.toggleSwitch(event, drawer);
      });
  
      content.addEventListener('click', (event) => {
        this.closeDrawer(event, drawer);
      });
    },
  
    toggleSwitch(event, drawer) {
      event.stopPropagation();
      drawer.classList.toggle('active');
    },
  
    closeDrawer(event, drawer) {
      event.stopPropagation();
      drawer.classList.remove('active');
    },
  };
  
  export default ContainerInitiator;
  