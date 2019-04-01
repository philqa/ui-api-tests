import request = require("request-promise");
import {Station} from "../model/Station";

let API_BASE_URL = 'http://api.openweathermap.org/data/3.0';
let STATIONS_URL = API_BASE_URL + '/stations';
let API_TOKEN_HEADER_VALUE = 'cb4a78e231a3f04910d964b06b419e6c';

export class Utils {

    /**
     * Utility method to create a station
     * @param station to create (required)
     */
    createStation(station: Station) {
        return new Promise(function (resolve, reject) {
            let options = {
                method: 'POST',
                qs: {'APPID': API_TOKEN_HEADER_VALUE},
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(station)
            };
            // send post request to register new station
            request.defaults(options)(STATIONS_URL, (err, res, body) => {
                if (!err && res.statusCode == 201) {
                    const payload = JSON.parse(body);
                    resolve(payload);
                } else {
                    reject(err);
                }
            }).catch(() => {
                // handled by mocha
            });
        });
    }

    /**
     * Urility method to delete a station
     * @param stationId id of station to delete (required)
     */
    deleteStation(stationId: string) {
        return new Promise(function (resolve, reject) {
            let url = STATIONS_URL + '/' + stationId;
            let options = {
                method: 'DELETE',
                qs: {'APPID': API_TOKEN_HEADER_VALUE}
            };
            // send delete request to delete station by id
            request.defaults(options)(url, (err, res, body) => {
                if (!err) {
                    resolve(res);
                } else {
                    reject(err);
                }
            }).catch(() => {
                // handled by mocha
            });
        });
    }


}
