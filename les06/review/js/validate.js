var sities = [];
$(function () {
    $.getJSON('http://89.108.65.123/cities',function(data){
                    $.each(data, function(key, val){
                        sities.push(val['name']);
        }
    )});
    //console.log(sities);
    //$( "#datepicker" ).datepicker();
    $('form').submit(function () {
        var namePtrn = '^[a-zа-яё ]{1,}$';
        var phonePtrn = '^\\+7\\(\\d{3}\\)\\d{3}\\-?\\d{4}';
        var emailPtrn = '^\\w+@\\w+\\.[a-z]+$';
        var txtPtrn = '.';
        var valid = checkElement($('#name'), namePtrn);
        valid = checkElement($('#phone'), phonePtrn) && valid;
        valid = checkElement($('#email'), emailPtrn) && valid;
        valid = checkElement($('#textarea'), txtPtrn) && valid;
        return valid;
    });
    $('#selectCity').keyup(function(){
        $('#dl').html('');
        var inpStr = $(this).val();
        if(inpStr.length > 2){
            sities.forEach(function(elem){
                if(elem.toLowerCase().indexOf(inpStr.toLowerCase()) == 0){
                    console.log(inpStr);
                    $('#dl').append('<option value="'+ elem +'">');
                }
            })
        }
    })
});

function checkElement(elem, ptrn) {
    var str = elem.val();
    if (new RegExp(ptrn, 'igm').test(str)) {
        elem.css('border', '');
        return true;
    }
    else {
        elem.css('border', '1px solid red');
        elem.effect( "bounce", {times:3}, 1000);
        //console.log('error');
        return false;
    }
}
