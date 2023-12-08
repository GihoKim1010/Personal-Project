//Monster와 Player의 클래스 정의
function Monster(name,maxhp,hp,attack){     //몬스터 클래스
    this.name=name;         //몬스터 이름
    this.maxhp=maxhp;           //몬스터 최대체력
    this.hp=hp;         //몬스터 현재체력
    this.attack=attack;         //몬스터 공격력
}

function Player(name,maxhp,hp,level,exp,nextExp,attack,money){     //플레이어 클래스
    this.name=name;         //플레이어 이름
    this.maxhp=maxhp;           //플레이어 최대체력
    this.hp=hp;         //플레이어 체력
    this.level=level;           //플레이어 레벨
    this.exp=exp;           //플레이어 현재 경험치
    this.nextExp=nextExp;           //플레이어 레벨업에 필요한 경험치 총량
    this.attack=attack;         //플레이어 공격력
    this.money=money;    
}

//전투 종료시 띄울 이름, 레벨, 경험치 화면.
function info(x){ 
    dw("캐릭터명 : " + x.name); 
    br();
    dw("HP : " + " ( " + x.hp + " / " + x.maxhp + " ) ")       
    br();
    br();
    dw("현재 레벨 : " + x.level);
    br();
    dw("경험치 : " + " ( " + x.exp + " / " + x.nextExp + " ) ");
    br();
    br();
    dw("보유 골드 : " + x.money);
    br();
}