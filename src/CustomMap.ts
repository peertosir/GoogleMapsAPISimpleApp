export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(mapDivId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(mapDivId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }});
    }

    addMarker(target: Markable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: target.location
        });
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: target.markerContent()
            });
            infoWindow.open(this.googleMap, marker);
        })
    }

}


export interface Markable {
    location: {
        lat: number;
        lng: number;
    }
    markerContent(): string;
    color?: string;
}