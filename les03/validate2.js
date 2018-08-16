function checkForm(){
        var namePtrn = '^[a-zа-яё ]{1,}$';
        var phonePtrn = '^\\+7\\(\\d{3}\\)\\d{3}\\-?\\d{4}';
        var emailPtrn = '^\\w+@\\w+\\.[a-z]+$';
        var txtPtrn = '.';
        var valid = checkElement(document.querySelector('#name'), namePtrn);
        valid = checkElement(document.querySelector('#phone'), phonePtrn) && valid;
        valid = checkElement(document.querySelector('#email'), emailPtrn) && valid;
        valid = checkElement(document.querySelector('#textarea'), txtPtrn) && valid;
        return valid;
}
function checkElement(elem,ptrn) {
    var str = elem.value;
    if (new RegExp(ptrn, 'igm').test(str)) {
        elem.style.border = '';
        return true;
    }else {
        elem.style.border = '1px solid red';
        //console.log('error');
        return false;
    }

}
