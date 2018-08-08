function Container() {
    this.id = "";
    this.className = "";
    this.htmlCode = "";
}
Container.prototype.render = function () {
    return this.htmlCode;
};
Container.prototype.remove = function () {
    var thatHtml = document.getElementById(this.id);
    thatHtml.parentNode.removeChild(thatHtml);
}

function Menu(my_id, my_class, my_items) {
    Container.call(this);
    this.id = my_id;
    this.className = my_class;
    this.items = my_items;
}
Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;
Menu.prototype.render = function () {};

var menu = new Menu("my_menu", "menu_class", {});
console.log(menu.render());

function MenuItem(my_href, my_name) {
    Container.call(this);
    this.className = "menu-item";
    this.href = my_href;
    this.name = my_name;
}
MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;
MenuItem.prototype.render = function () {
    return "<li class='" + this.className + "' href='" + this.href + "'>" + this.name + "</li>";
}
var m_item1 = new MenuItem("/", "Главная");
var m_item2 = new MenuItem("/catalogue/", "Каталог");
var m_item3 = new MenuItem("/gallery/", "Галерея");
var m_items = {
    0: m_item1
    , 1: m_item2
    , 2: m_item3
};
Menu.prototype.render = function () {
    var result = "<ul class='" + this.className + "' id='" + this.id + "'>";
    for (var item in this.items) {
        if (this.items[item] instanceof MenuItem) {
            result += this.items[item].render();
        }
    }
    result += "</ul>";
    return result;
}

function MenuRecursiv(my_id, my_class, my_items) {
    Container.call(this);
    this.id = my_id;
    this.className = my_class;
    this.items = my_items;
}
MenuRecursiv.prototype = Object.create(Container.prototype);
MenuRecursiv.prototype.constructor = MenuRecursiv;
MenuRecursiv.prototype.render = function () {
    var result = "<ul class='" + this.className + "' id='" + this.id + "'>";
    for (var item in this.items) {
        if (this.items[item] instanceof MenuItem || this.items[item] instanceof Menu) {
            result += this.items[item].render();
        }
    }
    result += "</ul>";
    return result;
}

var menu = new Menu("my_menu", "My_class", m_items);
m_items[3] = menu;
var menu2 = new MenuRecursiv("my_menu2", "My_class", m_items)
var div = document.write(menu.render() + menu2.render());

//menu.remove();

