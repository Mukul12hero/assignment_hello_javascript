function isBestFriend(friend1, friend2){
    if(typeof friend1 === 'object' && typeof friend2 === 'object'){
        if(friend1.name == friend2.friend && friend2.name == friend1.friend){
            return true;
           }
           else{
               return false;
           }
    }
    else{
        return 'please type object';
    }
}
const friendOne = {name: 'tom', friend: 'mukul'};
const friendTwo = {name: 'mukul', friend: 'tom'};

const check = isBestFriend(friendOne, friendTwo);
console.log(check);