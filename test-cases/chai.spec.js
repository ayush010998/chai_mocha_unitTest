var chai=require('chai');
var assert=chai.assert;
var should=chai.should;
var expect=chai.expect;



//assert
describe('aspect chai check',function(){
    let userName='ayush';
    it('check string',function(){
        assert.typeOf(userName,'string')
    })

    it('check equality',function(){
        assert.equal(userName,'ayush')
    })
})

//should
describe('should check',function(){
    let user='ayush'
    let myList={
        item:[
            {id:1,name:'demo'}
        ],
        title:'user list'
    }
    it('check string',function(){
        user.should.be.a('string')
    });
    it('equal check',function(){
        user.should.equal('ayush')
    })
    it('check length',function(){
        user.should.have.property('item')
    })
});

//expect

describe("check expect test cases",function(){
    let user="Ayush";

    it("string match",function(){
        expect(user).to.be.a('string')
    })
    it("string eqaultiy",function(){
        expect(user).to.equal('Ayush')
    })
    it("string match",function(){
        expect(user).to.lengthOf(5)
    })
})