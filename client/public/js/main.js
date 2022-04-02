const siteBackdropId = 'siteBackdrop';
let openSideDrawerId = null;

const openSideDrawer = (id) => {
  const sideDrawer = document.getElementById(id);

  if (!!sideDrawer) {
    sideDrawer.classList.add('open');
    openSideDrawerId = id;
    document.getElementById(siteBackdropId).classList.add('visible');
  }
};

const closeSideDrawer = () => {
  if (openSideDrawerId !== null) {
    document.getElementById(openSideDrawerId).classList.remove('open');
    openSideDrawerId = null;
    document.getElementById(siteBackdropId).classList.remove('visible');
  }
};
