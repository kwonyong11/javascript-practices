// function 객체 메소드 call

global.name = 'nodejs';

f = function(s){
    console.log(s + ":" + this.name);
}


f('hello');

let o = {
    name: 'kwonyong'
}

f.call(o, "hi");