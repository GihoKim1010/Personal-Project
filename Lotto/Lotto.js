function buttonClick() {         //버튼을 눌렀을 때 체크박스의 데이터들을 수집하여 처리하기 위해 만든 함수.
    var checkboxes = document.getElementsByClassName("check");
    var checkedValues = []; //체크된 체크박스의 값을 저장한 배열

    for (var i = 0; i < checkboxes.length; i++) {
        console.log(checkboxes[i].value);
        if (checkboxes[i].checked) {      // checkboxes[i] 이 체크되어있다면.
            checkedValues.push(checkboxes[i].value);
        }
    }

    if (checkedValues.length !== 6) {     //숫자를 6개 선택한 것이 아닌 경우 결과값이 출력되지 않고 경고창만 출력.
        alert("6개를 선택하세요.");
    } else{
        //뽑힌 7개의 숫자. (7번째가 보너스 숫자)
        var r = [0, 0, 0, 0, 0, 0, 0];

        //1번째 숫자뽑기
        r[0] = Math.floor(Math.random() * 45) + 1;

        //2번째 숫자뽑기. 중복되면 다시 추첨
        while (true) {
            r[1] = Math.floor(Math.random() * 45) + 1;
            if (r[1] != r[0]) {
                break;
            }
        }

        //3번째 숫자뽑기. 중복되면 다시 추첨
        while (true) {
            r[2] = Math.floor(Math.random() * 45) + 1;
            if (r[2] != r[0] && r[2] != r[1]) {
                break;
            }
        }

        //4번째 숫자뽑기. 중복되면 다시 추첨
        while (true) {
            r[3] = Math.floor(Math.random() * 45) + 1;
            if (r[3] != r[0] && r[3] != r[1] && r[3] != r[2]) {
                break;
            }
        }

        //5번째 숫자뽑기. 중복되면 다시 추첨
        while (true) {
            r[4] = Math.floor(Math.random() * 45) + 1;
            if (r[4] != r[0] && r[4] != r[1] && r[4] != r[2] && r[4] != r[3]) {
                break;
            }
        }

        //6번째 숫자뽑기. 중복되면 다시 추첨
        while (true) {
            r[5] = Math.floor(Math.random() * 45) + 1;
            if (r[5] != r[0] && r[5] != r[1] && r[5] != r[2] && r[5] != r[3] && r[5] != r[4]) {
                break;
            }
        }

        //보너스 숫자뽑기. 중복되면 다시 추첨
        while (true) {
            r[6] = Math.floor(Math.random() * 45) + 1;
            if (r[6] != r[0] && r[6] != r[1] && r[6] != r[2] && r[6] != r[3] && r[6] != r[4] && r[6] != r[5]) {
                break;
            }
        }

        // 맞춘 숫자 수를 변수지정
        var same = 0;
        var bonus = 0;

        //컴퓨터의 7개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세는 작업을 반복문으로 처리
        for (var i = 0; i <= 5; i = i + 1) {
            for (var j = 0; j <= 5; j = j + 1) {
                if (parseInt(checkedValues[i]) === r[j]) {
                    same = same + 1;
                }
            }
            if (parseInt(checkedValues[i] === r[6])) {
                bonus = bonus + 1;
            }
        }

        // 맞춘 숫자에 따라 등수매기기
        if (same == 0 || same == 1 || same == 2) {
            var rank = "꽝입니다.";
        } else if (same == 3) {
            var rank = "5등입니다.";
        } else if (same == 4) {
            var rank = "4등입니다.";
        } else if (same == 5) {
            var rank = "3등입니다.";
            if (bonus == 1) {
                var rank = "2등입니다.";
            }
        } else if (same == 6) {
            var rank = "1등입니다.";
        }

        //출력될 화면
        var myNumIndex = "내 숫자" + "<br>" + "<br>" +
            "1) " + parseInt(checkedValues[0]) + "<br>" +
            "2) " + parseInt(checkedValues[1]) + "<br>" +
            "3) " + parseInt(checkedValues[2]) + "<br>" +
            "4) " + parseInt(checkedValues[3]) + "<br>" +
            "5) " + parseInt(checkedValues[4]) + "<br>" +
            "6) " + parseInt(checkedValues[5]);

        var myNum = document.getElementById("myNum");
        myNum.innerHTML = myNumIndex;

        var ranNumIndex = "뽑힌 숫자" + "<br>" + "<br>" + "1) " + r[0] + "<br>" + "2) " + r[1] + "<br>" + "3) " + r[2] + "<br>" + "4) " + r[3] +
            "<br>" + "5) " + r[4] + "<br>" + "6) " + r[5] + "<br><br>" + "보너스) " + r[6];
        var ranNum = document.getElementById("ranNum");
        ranNum.innerHTML = ranNumIndex;

        var resultIndex = "결과" + "<br>" + "<br>" + rank;
        var result = document.getElementById("result");
        result.innerHTML = resultIndex;
    }
}