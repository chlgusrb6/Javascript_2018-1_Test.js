function getIdPw(){
var id = prompt('ID:입력','');
var ps = prompt(id + '가 사용할 초기 비밀번호 입력','');


var password = localStorage.getItem('password');
if(ps === '12345'){
    alert('안녕하세요 최현규님 환영합니다.')
    localStorage.setItem('id',id);
    var id = localStorage.getItem('id');
    var myHeading = document.querySelector('h1');
    myHeading.innerHTML = id + '<br>Homepage';

}
else if(password === ''){
    alert('아이디 또는 비밀번호를 입력하세요.');
    getIdPw();
}
else{
    alert('비밀번호가 잘못 입력되었습니다.');
    getIdPw();
    }
}
var myButton = document.querySelector('button');
myButton.onclick = function (){
    getIdPw();
}


/*function getIdPw(){
    var id = prompt('ID 입력:','');
    var ps = prompt('PS 입력:','');
    if(id==='choi' && ps === '940208')
    {
    alert('안녕하세요 최현규님 환영합니다.')
    alert(id + '가 로그인함.');
    localStorage.setItem('id',id);
    var myHeading = document.querySelector('h1');
    var id = localStorage.getItem('id');
    myHeading.innerHTML = id +'<br>Homepage';
    }
    else if(id==='' && ps==='')
    {
    alert('아이디 또는 비밀번호를 입력하세요.');
    getIdPw();
    }
    else{
    alert('아이디 또는 비밀번호가 틀렸습니다.');
    getIdPw();
    }
}

var myImage = document.querySelector('img');
myImage.onclick = function (){
    var src = myImage.getAttribute('src');
    if(src === 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/mokwon.png');
    }
    else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
myButton.onclick = function (){
    getIdPw();
}*/
