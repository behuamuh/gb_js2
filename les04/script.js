$(function () {
    var btns = $('button');
    btns.each(function (ind, item) {
        $(item).on('click', function () {
            show(ind + 1);
        })
    })
});
function hideAll() {
    $('.mytabs').each(function (i, elem) {
        $(elem).hide();
    })
}
function show(id) {
    var showTab = $('#' + id);
    hideAll();
    showTab.removeClass('d-none').addClass('d-block');
}