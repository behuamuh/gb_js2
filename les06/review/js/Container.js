//Container
function Container() {
    this.id = "";
    this.className = "";
    this.htmlCode = "";
}
Container.prototype.render = function () {
    return this.htmlCode;
};