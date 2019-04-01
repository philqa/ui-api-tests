import {Station} from "./model/Station";
import {Utils} from "./util/utils";
import 'mocha';

let chai = require('chai'),
    ex = chai.expect;
let request = require('request');
let utils = new Utils();

let API_BASE_URL = 'http://api.openweathermap.org/data/3.0';
let STATIONS_URL = API_BASE_URL + '/stations';
let API_TOKEN_HEADER_VALUE = 'cb4a78e231a3f04910d964b06b419e6c';

let createdStation1;
let createdStation2;

describe('Openweathermap /stations', () => {

    before(() => {
    });

    it('GET /stations - should return a 401 if appid auth header not set in request', (done) => {
        let options = {
            method: 'GET',
            url: STATIONS_URL,
            headers: {}
        };

        request.defaults({jar: true})(options, (err, res, body) => {
            if (err) throw new Error(err);
            const payload = JSON.parse(body);
            // confirm HTTP status code 401 returned
            ex(res.statusCode).to.equal(401);
            // confirm payload
            ex(payload.cod).to.equal(401);
            ex(payload.message).to.equal('Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.');
            done();
        });
    });

    it('POST /stations - should create 2 new stations and return 201', async () => {
        // create 1st station obj
        let station1 = new Station("DEMO_TEST001", "Team Demo Test Station 001", 33.33, -122.43, 222);
        // send request to create 1st station
        createdStation1 = await utils.createStation(station1);
        // confirm response contains our station
        ex(createdStation1).to.include(station1);
        // check additional properties
        ex(createdStation1).to.have.property('ID');
        ex(createdStation1).to.have.property('created_at');
        ex(createdStation1).to.have.property('updated_at');
        ex(createdStation1).to.have.property('source_type');
        ex(createdStation1).to.have.property('rank');
        let station2 = new Station("DEMO_TEST002", "Team Demo Test Station 002", 44.44, -122.44, 111);
        createdStation2 = await utils.createStation(station2);
        ex(createdStation2).to.include(station2);
        // check additional properties
        ex(createdStation2).to.have.property('ID');
        ex(createdStation2).to.have.property('created_at');
        ex(createdStation2).to.have.property('updated_at');
        ex(createdStation2).to.have.property('source_type');
        ex(createdStation2).to.have.property('rank');
    });

    it('GET /stations - should return all created stations and a 200', (done) => {
        // set request options (without headers)
        let options = {
            method: 'GET',
            url: STATIONS_URL,
            qs: {'APPID': API_TOKEN_HEADER_VALUE}
        };
        request.defaults({jar: true})(options, (err, res, body) => {
            if (err) throw new Error(err);
            // confirm HTTP status code 200 returned
            ex(res.statusCode).to.equal(200);
            // confirm our created stations are in the payload
            const payload = JSON.parse(body);
            ex(payload.filter(e=>e.id==createdStation1.ID).length > 0).to.be.true;
            ex(payload.filter(e=>e.id==createdStation2.ID).length > 0).to.be.true;
            done();
        });
    });

    it('DELETE /stations/{id} - should delete 2 stations and return 204', async () => {
        // send requests to delete stations by id
        let del1: any = await utils.deleteStation(createdStation1.ID);
        let del2: any = await utils.deleteStation(createdStation2.ID);
        // confirm 204 HTTP response codes returned
        ex(del1.statusCode).to.equal(204);
        ex(del2.statusCode).to.equal(204);
    });

    it('DELETE /stations - should return no station found message and a 404 if the station has been deleted', async () => {
        // send requests for deleted stations by id
        let del1: any = await utils.deleteStation(createdStation1.ID);
        let del2: any = await utils.deleteStation(createdStation2.ID);
        // confirm statusCode 404 and body for first request
        ex(del2.statusCode).to.equal(404);
        let body1 = JSON.parse(del1.body);
        ex(body1.code).to.equal(404001);
        ex(body1.message).to.equal('Station not found');
        // confirm statusCode 404 and body for second request
        ex(del2.statusCode).to.equal(404);
        let body2 = JSON.parse(del2.body);
        ex(body2.code).to.equal(404001);
        ex(body2.message).to.equal('Station not found');
    });

});
