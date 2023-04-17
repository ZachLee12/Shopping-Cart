import React, { useEffect } from "react";
import LocationIcon from '../../assets/images/location.png'
import EmailIcon from '../../assets/images/email.png'
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

export default function Contact() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBLBpUcA5jen4Ov5iEFpk267kdLb3jPLpE',
    })

    const mockStoreLocation = {
        lat: 51.338960,
        lng: 12.375303
    }

    const googleMapsContainerStyle = {
        width: '100%',
        height: '100%',
    };

    return (
        <div id="Contact">
            <div className="contact-content">

                <div className="master-info-wrapper">
                    {/* <div className="contact-image"></div> */}
                    <div className="google-maps">
                        {isLoaded ? <GoogleMap
                            mapContainerStyle={googleMapsContainerStyle}
                            center={mockStoreLocation}
                            zoom={10}
                        >
                            <MarkerF position={mockStoreLocation} />
                        </GoogleMap> :
                            <div>
                                Google Maps should be here but I need money to buy Google Maps services
                            </div>
                        }
                    </div>
                    <div className="contact-info-wrapper">
                        <div className="linkedIn-info-wrapper info-wrapper medium">
                            <img src={EmailIcon} className="icon" />
                            <p className='info-paragraph'>
                                Zach Lee
                            </p>
                        </div>
                        <div className="location-info-wrapper info-wrapper">
                            <img src={LocationIcon} className="icon" />
                            <p className='info-paragraph'>
                                Strasse, 6006 Kanton
                            </p>
                        </div>
                        <div className="email-info-wrapper info-wrapper">
                            <img src={EmailIcon} className="icon" />
                            <p className='info-paragraph email'>
                                email@ email.com
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}