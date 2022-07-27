window.onload = function(){
    var hw = document.getElementById('hw');
    hw.addEventListener('click', function(){
        alert('Hello world');
    })
}

// onload는 현재 이 웹페이지에 모든 코드가 다 읽이고
//이미지나 스크립트등 전부 다운로드 후 완성되었을때 
//웹브라우저는 윈도우 객체의 온로드를 호출하도록 약속되어있다.
//따라서 head태그에 위치 시킬때에는
// window.onload = function(){
//                            <--에 위치 시켜야한다. 
// }
