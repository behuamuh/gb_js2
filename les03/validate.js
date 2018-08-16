$(function () {
    $('button.btn').off('click');
    $('button.btn').on('click', function () {
        var namePtrn = '[a-zа-яё]';
        var phonePtrn = '^\\+7\\(\\d{3}\\)\\d{3}\\-?\\d{4}';
        var emailPtrn = '^\\w+@\\w+\\.[a-z]+$';
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
        elem.css('border','');
        return true;
    }else {
        elem.css('border','1px solid red');
        console.log('error');
        return false;
    }

}