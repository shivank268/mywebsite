/*document.getElementById('h1').style.margin = '100px 2px 10px 2px';*/
document.getElementById('usr').style.margin = '10px';
document.getElementById('psd').style.margin = '5px';
document.getElementById('log').style.margin = '20px';
//document.getElementById('tw').style.margin = '25vh 50vw 1vh 1vw'

function check(form) {
    if (form.userid.value == "1902900310041" && form.pswrd.value == "12345") {
        window.open('home.html')
    }
    else if (form.userid.value == "1902900310042" && form.pswrd.value == "123456")
        window.open('studentlist/shivank.html')
    else {
        alert("Error Password or Username")
    }
}

/*Timer JS*/
let a;
let date;
let time;
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString();
    time = ' on ' + a.toLocaleTimeString();
document.getElementById('tw').innerHTML =  date + time;
}, 1000);

/* file upload JS 
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}*/