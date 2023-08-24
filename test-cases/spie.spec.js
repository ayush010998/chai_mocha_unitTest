var sinon =require('sinon');
var chai=require('chai');
var expect=chai.expect;
var Student=require('../controllers/studentCntrl');
var student=new Student();


describe("new test cases",function(){
    it("test user function",function(){
        expect(student.userId()).to.be.equal(12)
    })

    it("function count",function(){
        var spyObj=sinon.spy(student,'getInfo')
        spyObj.home(5);
        expect(spyObj.calledOnce).to.be.true;

    })
})
