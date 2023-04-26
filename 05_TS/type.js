var myName = 'park';
var numArr = [1, 2, 3, 4];
var strArr = ['월', '화', '수', '목', '금', '토', '일'];
var comObj = {};
var parkObj = {
    name: 'park',
    age: 24,
    hobbies: ['playing', 'riding']
};
// null, undefined
var nullData = null;
var undefinedData = undefined;
// tuple 타입
var tupleOne = [1, 'park', { isMember: false }];
//enum
var MemberGrade;
(function (MemberGrade) {
    MemberGrade[MemberGrade["guest"] = 0] = "guest";
    MemberGrade[MemberGrade["user"] = 1] = "user";
    MemberGrade[MemberGrade["member"] = 2] = "member";
    MemberGrade[MemberGrade["admin"] = 3] = "admin";
})(MemberGrade || (MemberGrade = {}));
var userGrade = 1;
if (userGrade !== 3) {
    console.log('관리자 권한 X');
}
if (userGrade !== MemberGrade.admin) {
    console.log('관리자 권한 X');
}
//union
var unionType = 1;
unionType = 'park';
unionType = 23;
unionType = [1, 2, 3];
var gender = 'F';
//any
var anyType = 'park';
anyType = 3;
anyType = [1, 2, 3];
//return type function
function add1(num1, num2) {
    return num1 + num2;
}
var add2 = function (num1, num2) {
    return num1 + num2;
};
var add3 = function (num1, num2) { return num1 + num2; };
//void type function
function useConsole1(str) {
    console.log(str);
}
var useConsole2 = function (str) {
    console.log(str);
};
//never type function
function occurError(err) {
    throw new Error(err);
}
var dontKnow = 1;
var studentGrade = 'A';
var studentGradeArr = ['A', 'E', 'C'];
var parkInfo = {
    name: 'park',
    id: 'qkrtjdwo5662',
    age: 28,
    isMember: true,
    1: 'A',
    2: 'F',
};
var interfaceAdd = function (x, y) {
    return x + y;
};
