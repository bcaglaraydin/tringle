import request from "supertest";

import app from '../app';

describe('Acoount Tests', () => {
    it('POST /account', () => {
        return request(app).post("/account").send({
            accountNumber: "1",
            currencyCode: "TRY",
            ownerName: "Berdan Aydın",
            accountType: "individual"
        }).expect('Content-Type', /json/).expect(200)
    })
})
