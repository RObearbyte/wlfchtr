import React, { Component } from 'react'
import L from 'leaflet';

import './chatmap.css'

class ChatMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 46.7712,
            lng: 23.6236,
            zoom: 5
        }
    }

    componentDidMount() {
        let map = L.map('mapid', {
            center: [46.7712, 23.6236],
            zoom: 5
        });
        L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png').addTo(map);
    }

    render() {
        return (
            <div id="mapid" className="leaflet-container"></div>);
    }
}

export default ChatMap;