var sinon=require('sinon');
var chai=require('chai');
var expect=chai.expect;
var Student=require('../controllers/studentCntrl');
var student=new Student;

describe('----Mock----',function(){
    it('count function',function(){
        var mock=sinon.mock(student)

        var expt=mock.expects('getExternal');
        expt.exactly(1);
        expt.withArgs(40);
        student.finalMarks(40);

        mock.verify();
    })
})
