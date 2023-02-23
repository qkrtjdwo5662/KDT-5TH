let array = [1, 2, 3, 3, 3, 4];

console.log(solution(array));
function solution(array) {
    let answer = 0;
    let max = -1; 
    let check = new Array(); //배열 선언

    for(let i=0; i<1000; i++){
        check[i] =0; //배열 초기화 check[0]~check[999] = 0 넣기
    }
    
    for(let i=0; i<array.length; i++){
        check[array[i]]++; 
        //check[index]의 index값을 solution 함수의 인자 값인 array 원소로 접근
        //위와 같이 하면 check[1]++, check[2]++, check[3]++, check[3]++, check[3]++, check[4]++
        //check 배열로 array 배열의 각 원소의 값이 몇 개 인지 누적 체크 가능함
    }

    for(let i=0; i<check.length; i++){
        if(max<check[i]){ // max값 보다 check[i]가 크면 max에 check[i]값 넣고 
            max = check[i];
            answer = i; // 최빈값인 i 를 answer에 저장
        }else if(max==check[i]){ // max값 하고 같으면 answer =-1 넣고 도망 
            answer = -1;
        }
    }
    return answer;
}