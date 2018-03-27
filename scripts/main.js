function getIdPw(){
    var id = prompt('ID 입력:','');
    var ps = prompt('PS 입력:','');
    if(id==='choi' && ps === '940208')
    {
    alert('안녕하세요 최현규님 환영합니다.')
    alert(id + '가 로그인함.');
    var myHeading = document.querySelector('h1');
    myHeading.innerHTML = 'Cloude Service<br> Hello Choi';
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
getIdPw();   