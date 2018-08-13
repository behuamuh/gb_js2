//Container
function Container() {
    this.id = "";
    this.className = "";
    this.htmlCode = "";
}
Container.prototype.render = function () {
    return this.htmlCode;
};
Container.prototype.remove = function () {
    var thatHtml = document.querySelector(this.id);
    thatHtml.parentNode.removeChild(thatHtml);
}

//Menu
function Menu(my_id, my_class, my_items) {
    Container.call(this);
    this.id = my_id;
    this.className = my_class;
    this.items = my_items;
    this.render = function () {
    var result = "<ul class='" + this.className + "' id='" + this.id + "'>";
    for (var item in this.items) {
        if (this.items[item] instanceof MenuItem) {
            result += this.items[item].render();
        }
    }
    result += "</ul>";
    return result;
}
}
Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;

//SubMenu
function SubMenu(my_id, my_items) {
    Container.call(this);
    this.id = my_id;
    this.className = "submenu";
    this.items = my_items;
    this.render = function () {
    var result = "<ul class='" + this.className + " ' id='" + this.id + "'>";
    for (var item in this.items) {
        if (this.items[item] instanceof MenuItem) {
            result += this.items[item].render();
        }
    }
    result += "</ul>";
    return result;
}
}
SubMenu.prototype = Object.create(Container.prototype);
SubMenu.prototype.constructor = SubMenu;

//MenuItem
function MenuItem(my_href, my_name, my_submenu) {
    Container.call(this);
    this.className = "menu-item";
    this.href = my_href;
    this.name = my_name;
    this.submenu = my_submenu;
    this.render = function () {
        var result = "<li class='" + this.className + "' href='" + this.href + "'>" + this.name;
        if (this.submenu !== undefined) {
            result += this.submenu.render();
        }
        result += "</li>";
        return result;
    }
}
MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;

var menu = new Menu("my_menu", "menu_class", {});

var s_item1 = new MenuItem("dir1/", "Подменю1");
var s_item2 = new MenuItem("dir2/", "Подменю2");
var s_items = {
    0: s_item1
    , 1: s_item2
};
var subMemu = new SubMenu('sub1', s_items)
var m_item1 = new MenuItem("/", "Главная", subMemu);
var m_item2 = new MenuItem("/catalogue/", "Каталог", subMemu);
var m_item3 = new MenuItem("/gallery/", "Галерея", subMemu);
var m_items = {
    0: m_item1
    , 1: m_item2
    , 2: m_item3
};


var menu = new Menu("my_menu", "My_class", m_items);
var div = document.write(menu.render());
