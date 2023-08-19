function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer bg-light';
  
    const container = document.createElement('div');
    container.className = 'container';
  
    const socialIcons = document.createElement('div');
    socialIcons.className = 'social-icons';
  
    const socialLinks = [
      { iconClass: 'fab fa-facebook-f', url: 'http://facebook.com/meunomede' },
      { iconClass: 'fab fa-twitter', url: 'http://twitter.com/andersonli34' },
      { iconClass: 'fab fa-instagram', url: 'http://instagram.com/andersonli34' }
    ];
  
    socialLinks.forEach(link => {
      const icon = document.createElement('a');
      icon.className = 'social-icon';
      icon.href = link.url;
      const iconElement = document.createElement('i');
      iconElement.className = link.iconClass;
      icon.appendChild(iconElement);
      socialIcons.appendChild(icon);
    });
  
    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    contactInfo.innerHTML = `
      <p><i class="fas fa-envelope"></i> msgli34@gmail.com</p>
      <p><i class="fas fa-phone"></i> (83) 99935-2228</p>
    `;
  
    container.appendChild(socialIcons);
    container.appendChild(contactInfo);
  
    footer.appendChild(container);
  
    const appContainer = document.getElementById('footer');
    appContainer.appendChild(footer);
  }
  
  createFooter();
  