var sinon=require('sinon');
var chai=require('chai');
var expect=chai.expect;
var Student=require('../controllers/studentCntrl');
var student=new Student;

describe('----stub----',function(){
    it('function args check',function(){
        var stub=sinon.stub(student,'getExternal')
        stub.withArgs(40).return(5);
        expect(student.finalMarks(40)).to.be.equal(55);
    })
})
