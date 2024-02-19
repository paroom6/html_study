const slime = {
    name:"슬라임"
}

const cuteslime = {
    name:"슬라임",
    attribute :"cute"
}


const purplecuteslime = {
    ...cuteslime, ///spread cuteslime의 키값들을 가져온다
    color : "purple",
    name : "slime"//아래있기에 name을 대체한다
}

console.log(purplecuteslime);

const nums =[1,2,3,4,5];
const nums2 =[...nums,6,7,8,9,10];
const nums3 = [...(nums2.filter(n => n%2 === 0)),11,12,13,14,15]//filter의 결과로 배열을 리턴
console.log(nums2);
console.log(nums3);

const users = [
    {
        id: 1,
        name:"조성민"
    },
    {
        id: 2,
        name:"조성이"
    },
    {
        id: 3,
        name:"조성삼"
    },
    {
        id: 4,
        name:"조성사"
    }
]

const evenUser = [
    ...users.filter(user => user.id % 2 === 0),
    {
        id:5,
        name:"조성오"
    }
]
console.log(evenUser);