$(function () {
    $('form').submit(function() {
        var namePtrn = '[a-zа-яё]';
        var phonePtrn = '^\\+7\\(\\d{3}\\)\\d{3}\\-?\\d{4}';
        var emailPtrn = '^\\w+@\\w+\\.[a-z]+$';
        var txtPtrn = '.';
        var valid = checkElement($('#name'), namePtrn);
        valid = checkElement($('#phone'), phonePtrn) && valid;
        valid = checkElement($('#email'), emailPtrn) && valid;
        valid = checkElement($('#textarea'), txtPtrn) && valid;
        if (valid) {
            return true;
        }
        return false;

    });


});
function checkElement(elem,ptrn) {
    var str = elem.val();
    if (new RegExp(ptrn, 'igm').test(str)) {
        elem.css('border','');
        return true;
    }else {
        elem.css('border','1px solid red');
        //console.log('error');
        return false;
    }

}
