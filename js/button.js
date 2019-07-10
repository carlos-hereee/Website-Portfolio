class ShowContent{
    constructor(element){
        this.element= element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector( `.btn-item[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => this.select());
    };
    select(){
        const links = document.querySelectorAll('.btns-link');
        Array.from(links).forEach(item => item.classList.remove('btn-link-selected'));
        this.element.classList.add('btns-link-selected');
        this.tabItem.select();
        console.log(this.tabItem)
    }

}
class TabItem{
    constructor(element){
        this.element=element;
    }
    select(){
        const items =document.querySelectorAll('.btn-item');
        Array.from(items).forEach(item => item.classList.remove('btn-item-selected'));
        this.element.classList.add('btn-item-selected');

    }
}




let buttons = document.querySelectorAll('.btns-link');
buttons.forEach(link => new ShowContent(link));
