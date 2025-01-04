export const scrollToTop = (elementId?: string) => {
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };