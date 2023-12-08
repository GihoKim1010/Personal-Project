/* 할일
1. HP상태창란 분리하여 텍스트 박스에 각각 따로 넣기.
2. 전투버튼 눌렀을 때 전투가 시작되도록 변경.
3. 전투 로그를 topArea에 뜨게 변경. */

window.onload = function () {

    //Monster와 Player안에 각각 객체 생성
    var orc = new Monster("오크", 100, 100, 10);
    var elf = new Player("엘프", 200, 200, 1, 0, 300, 30, 0);

    function hpInfo() {  //HP 상태창
        return " [ " + orc.name + " ( " + orc.hp + " / " + orc.maxhp + " ) ] "
            + " [ " + elf.name + " ( " + elf.hp + " / " + elf.maxhp + " ) ] "
    }

    document.getElementById('statLog').value = hpInfo();

    //전투시작 메세지 출력

    document.getElementById('fightLog').value = "전투시작"

    //전투 1회 + 상태창 띄우기
    function fight() {

        //실제로 가하는 데미지를 0~공격력 사잇값으로 별도 지정.
        function dmg(attack) {
            var random = Math.floor(Math.random() * attack) + 1;
            return random;
        }

        var orcDMG = dmg(orc.attack);
        var elfDMG = dmg(elf.attack);

        //오크와 엘프가 서로 한대씩 때림. HP가 음수로 가지않도록 설정.
        orc.hp = orc.hp - elfDMG;
        if (orc.hp < 0) {
            orc.hp = 0;
        }

        elf.hp = elf.hp - orcDMG;
        if (elf.hp < 0) {
            elf.hp = 0;
        }

        //전투결과 출력
        return "엘프가 오크에게 " + elfDMG + "만큼의 데미지를 입혔습니다."
        +"오크가 엘프에게 " + orcDMG + "만큼의 데미지를 입혔습니다."
    }

    document.getElementById('fightLog').value = fight();


    //몬스터 사냥시 얻는 경험치. 일단 100으로 지정. 돈도 일단 50원으로 지정.
    var gainExp = 100;
    var gainMoney = 50;

    elf.exp = elf.exp + gainExp;
    elf.money = elf.money + gainMoney;

    //승리시 알림창
    function win() {
        document.getElementById('resultLog').value = fight();
        return "전투종료" + 
        "경험치를 " + gainExp + "만큼 획득하셨습니다." +
        "골드를 " + gainMoney + "만큼 획득하셨습니다.";
    }
    
//     info(elf);
//     //패배시 알림창
//     function lose() {
//         dw("전투종료");
//         dw("플레이어가 사망하였습니다.");
//     }

//     while (true) {
//         fight();
//         if (orc.hp == 0) {
//             document.getElementById('resultLog').value = win();
//             break;
//         } else if (elf.hp == 0) {
//             document.getElementById('resultLog').value = lose();
//             break;
//         }
//     }
}