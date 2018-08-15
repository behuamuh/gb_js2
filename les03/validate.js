$(function () {
    $('button.btn').unbind('click');
    $('button.btn').click(function () {
        var namePtrn = '[a-zа-яё]';
        var phonePtrn = '';
        var emailPtrn = '';
        var valid = checkElement($('#name'), namePtrn);
        valid = checkElement($('#phone'), phonePtrn) && valid;
        valid = checkElement($('#email'), emailPtrn) && valid;
        if (valid) {
            $('form').submit();
        }

    });

});
function checkElement(elem,ptrn) {
    var str = elem.val();
    if (new RegExp(ptrn, 'igm').test(str)) {
        elem.removeClass("invalid-tooltip");
        return true;
    }else {
        elem.addClass("invalid-tooltip");
        return false;
    }

}