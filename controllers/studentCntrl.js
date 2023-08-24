class Student{
    constructor(){

    }
    home(type){
        let data=this.getInfo(type,1)
        return data+5;


    }
    userId(){
        return 21;
    }
    getInfo(){
        return 10;
    }
    finalMarks(total){
        let external=this.getExternal(total);
        let internal=this.getInternal(total);
        let finalSum=external+internal+10;
        return finalSum;
    }
    getExternal(total){
        return total+1;
    }
    getInternal(total){
        return total-1;
    }
}
module.exports=Student