class ShowContent {
    constructor(tabElement) {
        this.tabElement = tabElement;
        
        this.tabData = this.tabElement.dataset.tab;
        console.log('this.tabData');

        this.itemElement = document.querySelector(`.mainContent[data-tab="${this.data}"]`);

        this.tabItem = new TabItem(this.itemElement);

        this.element.addEventListener('click', () => this.select());
    }
    select() {
        const btnLinks = document.querySelectorAll('.btn');
        Array.from(btnLinks).forEach( item => item.classList.remove('btn-link-selected'));
        this.element.classList.add('btn-link-selected');
        this.tabItem.select();
      }
    }
class TabItem {
    constructor(element) {
        this.element = element;
    }
    select() {
    const items = document.querySelectorAll('.btn');
    Array.from(items).forEach(item => item.classList.remove('btn-item-selected'));
    this.element.classList.add('btn-item-selected');
    }
}
let btns = document.getElementsByClassName('btn')
// //.forEach(btn =>{
//     console.log(btn,'btn')
//     new ShowContent(btn)

// } );
console.log('btns', btns)
