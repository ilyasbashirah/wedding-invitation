import { useRef } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Card from "@/src/components/Card";
import { Wrapper } from "@googlemaps/react-wrapper";
export interface VenueMapsProps {}

export default function VenueMaps(props: VenueMapsProps) {
  const apiKey = "AIzaSyAtXBwKnb99HMV7eyA_nckUnTQjCzRXom8";
  const mapRef = useRef<any>(null);
  const onLoad = (map: any): void => {
    mapRef.current = map;
  };
  const onUnmount = (): void => {
    mapRef.current = null;
  };

  const latLng = {
    lat: -6.866577101840134,
    lng: 107.64194819735876,
  };
  return (
    <Card padding={false}>
      <Wrapper apiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={{
            width: 718,
            height: 534,
            borderRadius: 20,
          }}
          center={latLng}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            disableDefaultUI: true,
            keyboardShortcuts: false,
            gestureHandling: "cooperative",
          }}
          clickableIcons={false}
        >
          <Marker
            position={{
              lat: -6.866577101840134,
              lng: 107.64194819735876,
            }}
          />
        </GoogleMap>
      </Wrapper>
    </Card>
  );
}
