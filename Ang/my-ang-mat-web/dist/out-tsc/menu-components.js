// Import Material Design Web Components
import '@material/web/button/filled-button.js';
import '@material/web/divider/divider.js';
import '@material/web/icon/icon.js';
import '@material/web/menu/menu.js';
import '@material/web/menu/menu-item.js';
import '@material/web/menu/sub-menu.js';
// Shared styles
const sharedStyle = `
  #anchor {
    display: block;
    border: 1px solid var(--md-sys-color-on-background);
    color: var(--md-sys-color-on-background);
    width: 100px;
    padding: 16px;
    text-align: center;
  }
`;
// Example menu rendering function
export function renderMenu() {
    const menu = document.createElement('md-menu');
    menu.innerHTML = `
    <md-menu-item>Item 1</md-menu-item>
    <md-menu-item>Item 2</md-menu-item>
    <md-menu-item>Item 3</md-menu-item>
  `;
    return menu;
}
