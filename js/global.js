const existVerticalScroll = () => {
  return document.body.offsetHeight > window.innerHeight
}

const getBodyScrollTop = () => {
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
}
