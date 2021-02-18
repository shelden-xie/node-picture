const request = require('supertest');//node 接口测试http测试代理
const expect = require("chai").expect; //断言库


describe('GET /book/list', function () {
    it('node api json', function (done: () => void) {
        request("http://localhost:3000")
            .get("/api/getBooksList")
            .expect(200)
            .end((err, res) => {
                console.log(err,res)
            });
        done();
    })
})
