
// 문제 번호 나타내는 num 변수
var num = 1;

// num 마다 질문 저장하는 js 객체 question
var question = {
    1: {"title" : "드디어 찾아 온 휴일,<br><br>친구와 카페를 가기로 했다.","type":"IE", "A":"휴일에는 집이 최고인데... <br>평소에는 쉬는 날 집 밖을<br>잘 나오지 않는다.", "B":"역시 휴일에는 집밖으로 나가야지! 집에 있으면 몸이 찌뿌둥하다."},
    2: {"title" : "어느 카페를 갈지 만나서 정하자고 할 때", "type":"JP","A":"어디 갈지 못 정해서 찝찝한<br>마음에 미리 어디갈지 찾아둔다.", "B":"그래! 일단 친구와 만난다."},
    3: {"title" : "카페 입구에 엄청 큰 그림이 걸려있다.<br><br>그림을 보고 드는 생각은?", "type":"SN", "A":"그림이 있는지도 몰랐는데...<br>진짜 크네.", "B" : "그림이 담고 있는 의미에<br>대해 생각해본다."},
    4: {"title" : "카페 이벤트에 당첨됐다.<br><br>기념으로 사진을 찍어준다고 한다.", "type":"IE","A":"친구의 도움으로<br>쭈뼛쭈뼛 사진을 찍는다.", "B":"누구보다 자신있는 멋쟁이<br>포즈로 사진을 찍는다."},
    5: {"title" : "이벤트로 해외 항공권을 얻었다.<br><br>친구가 당장 다음주에 가자고 한다면?", "type":"JP","A":"다음주? 그래도 해외인데...<br>갑작스러운 제안에 거절한다.", "B":"재밌겠다! 바로 숙소를 예약한다."},
    6: {"title" : "친구가 실수로 음료를 엎질렀다.", "type":"TF", "A":"조심하지~ <br>그래도 많이 안 엎었네. 다행이다.", "B":"괜찮아? 옷은 많이 안 버렸어?"},
    7: {"title" : "친구와 얘기를 나누던 중<br><br>카페에 있던 친구의 지인이 인사를 했다.", "type":"IE","A":"아...안녕하세요...<br>인사를 하니 받아는 준다.", "B":"안녕하세요~!ㅇㅇ이친구에요.<br>말씀 많이 들었습니다!!<br>하며 이야기를 이어나간다."},
    8: {"title" : "카페 직원이 진상에게 욕을 먹고 있다.", "type":"TF", "A":"알바가 불쌍하다 생각한다.","B": "사회생활하는 나같아서<br>내가 욱!하고 울컥한다.<br>대신 한 마디 해주고싶다."},
    9: {"title" : "친구가 본인도 회사에서<br><br>속상한 일이 있었다며<br><br>맛있는 걸 먹어야 겠다고 한다.", "type":"TF", "A":"맛있는 거 뭐 먹고싶어?", "B":"무슨 속상한 일?<br>너가 속상하니까 나도 속상해."},
    10: {"title" : "친구는 더 놀자고 하는데<br><br>집에 해야 할 일이 산더미이다.", "type":"JP", "A":"미루면 내일의 내가 힘들다.", "B":"내일의 내가 할 거니까 괜찮다."},
    11: {"title" : "집으로 돌아 가는 길<br><br>우연히 바라본 하늘이 너무 예쁘다.", "type":"SN", "A":"예쁜 하늘이다.", "B":"하늘을 바라보니 마음이 벅차오르고<br>많은 생각이 스쳐지나간다."},
    12: {"title" : "집에 와서 일기를 적으며<br><br>카페를 떠올려보았다.", "type":"SN", "A":"분위기도 음악도 너무 좋았던 카페였다.", "B":"내가 카페를 차리면 어떨까? 메뉴는? 위치는? 인테리어는? 카페 사장이된 나를 상상을 해본다."}
}

// MBTI 결과별 이미지 저장하는 js 객체 result
var result = {
    "ISTJ" : {"img":"/img/istj.png"},
    "ISFJ" : {"img":"/img/isfj.png"},
    "INTJ" : {"img":"/img/intj.png"},
    "INFJ" : {"img":"/img/infj.png"},

    "ISTP" : {"img":"/img/istp.png"},
    "ISFP" : {"img":"/img/isfp.png"},
    "INTP" : {"img":"/img/intp.png"},
    "INFP" : {"img":"/img/infp.png"},
    
    "ESTJ" : {"img":"/img/estj.png"},
    "ESFJ" : {"img":"/img/esfj.png"},
    "ENTJ" : {"img":"/img/entj.png"},
    "ENFJ" : {"img":"/img/enfj.png"},

    "ESTP" : {"img":"/img/estp.png"},
    "ESFP" : {"img":"/img/esfp.png"},
    "ENTP" : {"img":"/img/entp.png"},
    "ENFP" : {"img":"/img/enfp.png"}
}

function start() {
    document.querySelector('.start').style.display = 'none';
    document.querySelector('.question').style.display = 'block';
    next();
}

function next() {
    if (num > 12) {
        showResult();
        return;
    }

    var currentQuestion = question[num];
    document.getElementById('title').innerHTML = currentQuestion.title;
    document.getElementById('type').value = currentQuestion.type;
    document.getElementById('A').innerHTML = currentQuestion.A;
    document.getElementById('B').innerHTML = currentQuestion.B;

    var progress = (num - 1) * (100 / 12);
    document.querySelector('.progress-bar').style.width = progress + '%';
    num++;
}

function submitAnswer(answer) {
    var type = document.getElementById('type').value;
    var currentScore = parseInt(document.getElementById(type).value);

    document.getElementById(type).value = answer === 'A' ? currentScore + 1 : currentScore;
    next();
}

function showResult() {
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.result').style.display = 'block';

    var mbti = '';
    mbti += (parseInt(document.getElementById('IE').value) > 2) ? 'I' : 'E';
    mbti += (parseInt(document.getElementById('SN').value) > 2) ? 'S' : 'N';
    mbti += (parseInt(document.getElementById('TF').value) > 2) ? 'T' : 'F';
    mbti += (parseInt(document.getElementById('JP').value) > 2) ? 'J' : 'P';

    document.getElementById("img").src = result[mbti]["img"];
}



// // 시작 버튼을 클릭하면 시작화면 숨기고 질문화면 보여주기
// function start(){
//     document.querySelector(".start").style.display = "none";
//     document.querySelector(".question").style.display = "block";
//     next();
// }


// // A 버튼 클릭하면 1 증가하고 next()
// document.getElementById("A").addEventListener("click", function() {
//     var type = document.getElementById("type").value;
//     var preValue = document.getElementById(type).value;
//     document.getElementById(type).value = parseInt(preValue) + 1;
//     next(); 
// });

// // B 버튼 클릭하면 그대로 next()
// document.getElementById("B").addEventListener("click", function() {
//     next();
// });

// function next() {
//     // 마지막 문제에서 다음으로 넘어갈 때
//     if(num == 13) {
//         document.querySelector(".question").style.display = "none";
//         document.querySelector(".result").style.display = "block";

//         var mbti = "";

//         // 삼항연산자로 mbti 계산
//         mbti += (document.getElementById("IE").value < 2) ? "E" : "I";
//         mbti += (document.getElementById("SN").value < 2) ? "N" : "S";
//         mbti += (document.getElementById("TF").value < 2) ? "F" : "T";
//         mbti += (document.getElementById("JP").value < 2) ? "J" : "P";

//         // 계산된 mbti로 이미지 변경
//         document.getElementById("img").src = result[mbti]["img"];

//     } else {
//         // 진행 바 채워지게 하기
//         document.querySelector(".progress-bar").style.width = `calc(100/12*${num}%)`;

//         // 문제별 문제 & 선택지 출력
//         document.getElementById("title").innerHTML = question[num]["title"];
//         document.getElementById("type").value = question[num]["type"];
//         document.getElementById("A").innerHTML = question[num]["A"];
//         document.getElementById("B").innerHTML = question[num]["B"];
//         num++;
//     }

// }

// // 히든 인풋 요소 생성 -> 최종 MBTI 결과 결정
// ["IE", "SN", "TF", "JP"].forEach(type => {
//     var input = document.createElement("input");
//     input.type = "hidden";
//     input.id = type;
//     input.value = "0";
//     // body의 인풋요소 value 값에 저장  
//     document.body.appendChild(input);
// })