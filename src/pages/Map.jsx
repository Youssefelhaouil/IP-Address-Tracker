import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'

function Map() {
  return (
    <>
      <div className='-mt-[30px] '>
        <MapContainer className='h-[100vh] w-full ' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup >
              BROOKLYN, NY 10001
            </Popup>
          </Marker>
        </MapContainer>
      </div>

    </>
  )
}

export default Map
