export class Station {

    external_id: String;
    name: String;
    latitude: Number;
    longitude: Number;
    altitude: Number;

    constructor(external_id: String, name: String, latitude: Number, longitude: Number, altitude: Number) {
        this.external_id = external_id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
    }

}
