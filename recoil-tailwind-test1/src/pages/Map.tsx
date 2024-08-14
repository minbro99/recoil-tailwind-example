import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  useEffect(() => {
    let container = document.getElementById(`map`); // 지도를 담을 영역의 DOM 레퍼런스
    let options = {
      center: new window.kakao.maps.LatLng( 37.4977701899224,127.02754781234454 ), // 지도 중심 좌표
      level: 5, // 지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
  }, []);

  return <div id="map" style={{ width: "80vw", height: "80vh" }} />;
};

export default Map;