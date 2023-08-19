// menu.js
function createMenu() {
    const menu = document.createElement('nav');
    menu.className = 'navbar navbar-expand-lg navbar-light bg-light';
  
    const navItems = [
      { text: 'Início', href: 'index.html' },
      { text: 'Sobre', href: 'sobre.html' },
      { text: 'Serviços', href: 'servicos.html' },
      { text: 'Blog', href: 'blog.html' },
      { text: 'FAQ', href: 'faq.html' },
      { text: 'Contato', href: 'contato.html' }
    ];
  
    const navList = document.createElement('ul');
    navList.className = 'navbar-nav ml-auto';
  
    navItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.className = 'nav-item';
      const link = document.createElement('a');
      link.className = 'nav-link';
      link.textContent = item.text;
      link.href = item.href;
      listItem.appendChild(link);
      navList.appendChild(listItem);
    });
  
    menu.appendChild(navList);
  
    const appContainer = document.getElementById('menu');
    appContainer.appendChild(menu);
  }
  
  createMenu();
  