$(function () {
    hideAll();
    var btns = $('button');
    btns.each(function (ind, item) {
        $(item).on('click', function () {
            show(ind + 1);
            $(this).addClass('btn-ligth').removeClass('btn-dark');
        })
    });
    $(btns.eq(0)).click();
});
function hideAll() {
    $('.mytabs').each(function (i, elem) {
        $(elem).hide();
    })
    $('button').each(function(){
    		$(this).addClass('btn-dark').removeClass('btn-ligth');
    })
}
function show(id) {
    var showTab = $('#' + id);
    hideAll();
    showTab.show(1000);
}
