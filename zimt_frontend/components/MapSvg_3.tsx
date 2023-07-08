import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import { BasicRoomDetails } from "../functions/fetchRooms";
import getRoomId from "../functions/fetchId";

type SvgComponentProps = {
  setSelectedRoom: Dispatch<SetStateAction<BasicRoomDetails | undefined>>
  roomArray: BasicRoomDetails[]
  selectedRoom: BasicRoomDetails | undefined
};

const MapSvg_3: React.FC<SvgComponentProps> = ({ setSelectedRoom, roomArray, selectedRoom }) => {
  const handleSelectChange = () => {
    var list = document.getElementsByClassName("selected");
    // @ts-ignore
    for (let item of list) {
        item.style.fill = ""
        item.classList.remove("selected")
    }
}

const handleClick = (event: React.MouseEvent<SVGPathElement>) => {

    handleSelectChange();

    event.currentTarget.style.fill = "tomato"
    event.currentTarget.classList.add("selected")
    getRoomId(event.currentTarget.id).then(data => {
        data?.id && setSelectedRoom(roomArray.find(room => room.id === data.id));
    })
};

const convertroom2Name = (room : BasicRoomDetails) => {
 return `${room.floor}-${room.building_section}-${room.room}${room.subroom_description && "-" + room.subroom_description}`
}

useEffect(() => { 
    handleSelectChange();
    if(selectedRoom){

    const element =document.getElementById(convertroom2Name(selectedRoom)) 

    // @ts-ignore
    element?.classList.add("selected")
    element && element.setAttribute("style","fill:tomato;")
    }
},[selectedRoom, setSelectedRoom])

  return (

      <svg
        id="ebene_3"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
       
    
        xmlSpace="preserve"
      width={1260}
      x="0px"
      y="0px"
      viewBox="0 0 1920 900"
      
      >
        <style type="text/css">
          {
            "\n\t.st0{fill:#BCBCBC;stroke:#000000;stroke-miterlimit:10;}\n\t.selected{fill:tomato}.st1{fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;}\n\t.st1:hover{fill:tomato}\n\t.st2{opacity:1;fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;}\n\t.st3{font-family:'MyriadPro-Regular';}\n\t.st4{font-size:24px;}\n\t.st5{font-size:34.1556px;}\n\t.st6{font-family:'Arial';}\n\t.st7{font-size:61.6679px;}\n"
          }
        </style>
        <polygon
          id="grundlage"
          className="st0"
          points="1732.5,495.5 1732.5,444.5 750.5,441.5 750.5,411.5 663.5,411.5 663.5,402.5  81.5,402.5 81.5,709.5 178.5,709.5 178.5,693.5 195.5,693.5 195.5,709.5 663.5,709.5 663.5,677.5 754.5,677.5 754.5,705.5  1211.5,705.5 1211.5,674.5 1294.5,674.5 1294.5,705.5 1738.5,705.5 1738.5,593.5 1830.5,593.5 1830.5,495.5 "
        />
        <rect x={665.5} y={352.5} className="st1" width={85} height={157} />
        <polygon
          id="3-2-9"
          className="st1"
          points="81.5,402.5 81.5,507.5 200.5,507.5 200.5,529.5 294.5,529.5 294.5,507.5 294.5,424.5  294.5,402.5 "
          onClick={handleClick}
        />
        <rect
          id="3-2-5"
          x={294.5}
          y={402.5}
          className="st1"
          width={78}
          height={127}
          onClick={handleClick}
        />
        <rect
          id="3-2-3"
          x={372.5}
          y={402.5}
          className="st1"
          width={149}
          height={127}
          onClick={handleClick}
        />
        <rect
          id="3-2-1"
          x={521.5}
          y={402.5}
          className="st1"
          width={144}
          height={127}
          onClick={handleClick}
        />
        <rect
          id="3-1-13"
          x={750.5}
          y={279.5}
          className="st1"
          width={116}
          height={162}
          onClick={handleClick}
        />
        <polygon
          className="st1"
          points="1081,565.4 1081,278.5 866.5,278.5 866.5,563.3 884.1,580.5 1065.9,580.5 "
        />
        <polygon
          id="3-1-2"
          className="st1"
          points="1195.2,560.5 1211.5,544.2 1211.5,293.5 1211.5,278.5 1080.5,278.5 1080.5,545.5  1102.5,545.5 1102.5,560.5 "
          onClick={handleClick}
        />
        <polygon
          id="3-3-2"
          className="st1"
          points="1291.5,401.5 1291.5,509.5 1304.5,509.5 1304.5,525.5 1485.5,525.5 1485.5,401.5 "
          onClick={handleClick}
        />
        <rect
          id="3-3-4"
          x={1485.5}
          y={401.5}
          className="st1"
          width={86}
          height={124}
          onClick={handleClick}
        />
        <rect
          id="3-3-6"
          x={1571.5}
          y={401.5}
          className="st1"
          width={136}
          height={124}
          onClick={handleClick}
        />
        <rect
          id="3-3-8"
          x={1707.5}
          y={401.5}
          className="st1"
          width={123}
          height={110}
          onClick={handleClick}
        />
        <rect
          id="3-3-1"
          x={1294.5}
          y={560.5}
          className="st1"
          width={108}
          height={145}
          onClick={handleClick}
        />
        <rect
          id="3-3-3"
          x={1401.5}
          y={560.5}
          className="st1"
          width={122}
          height={145}
          onClick={handleClick}
        />
        <rect
          id="3-3-5"
          x={1523.5}
          y={560.5}
          className="st1"
          width={88}
          height={145}
          onClick={handleClick}
        />
        <rect
          id="3-3-7"
          x={1612.5}
          y={560.5}
          className="st1"
          width={126}
          height={145}
          onClick={handleClick}
        />
        <polygon
          id="3-3-toilette"
          className="st1"
          points="1811.5,714.9 1811.5,677.5 1811.5,666.5 1811.5,593.5 1738.5,593.5 1738.5,677.5  1758.5,677.5 1758.5,714.7 1763.3,719.5 1806.9,719.5 "
          onClick={handleClick}
        />
        <rect
          id="3-1-9"
          x={754.5}
          y={705.5}
          className="st2"
          width={240}
          height={97}
          onClick={handleClick}
        />
        <rect
          id="3-1-7"
          x={994.5}
          y={705.5}
          className="st2"
          width={217}
          height={97}
          onClick={handleClick}
        />
        <polygon
          className="st1"
          points="1061,632.5 1010.5,632.5 1010.5,638.1 973.5,638.1 973.5,632.5 911,632.5 905.5,638 905.5,705  973.5,705 1010.5,705 1066.5,705 1066.5,638 "
        />
        <rect
          id="3-2-8"
          x={195.5}
          y={564.5}
          className="st1"
          width={134}
          height={145}
          onClick={handleClick}
        />
        <rect
          id="3-2-6"
          x={329.5}
          y={564.5}
          className="st1"
          width={169}
          height={145}
          onClick={handleClick}
        />
        <rect
          id="3-2-2"
          x={498.5}
          y={564.5}
          className="st1"
          width={169}
          height={145}
          onClick={handleClick}
        />
        <polygon
          id="3-2-toilette"
          className="st1"
          points="178.4,727.6 178.5,693.5 195.5,693.5 195.5,603.5 169.3,603.5 155.1,603.5  106,603.5 106,726.9 112.6,733.5 172.5,733.5 "
        />
        <polygon
          className="st1"
          points="47,567 47.5,695.5 59.5,710.5 106,710 106,567 "
        />
        <g>
          <rect x={77.8} y={628.1} className="st1" width={28.2} height={7.6} />
          <rect x={77.8} y={658.4} className="st1" width={28.2} height={7.6} />
          <rect x={77.8} y={650.9} className="st1" width={28.2} height={7.6} />
          <rect x={77.8} y={643.3} className="st1" width={28.2} height={7.6} />
          <rect x={77.8} y={635.7} className="st1" width={28.2} height={7.6} />
          <rect x={77.8} y={620.5} className="st1" width={28.2} height={7.6} />
        </g>
        <g>
          <rect x={47.4} y={643.3} className="st1" width={30.4} height={7.6} />
          <rect x={47.4} y={666} className="st1" width={30.4} height={7.6} />
          <rect x={47.4} y={658.4} className="st1" width={30.4} height={7.6} />
          <rect x={47.4} y={650.9} className="st1" width={30.4} height={7.6} />
          <rect x={47.4} y={635.7} className="st1" width={30.4} height={7.6} />
          <rect x={47.4} y={628.1} className="st1" width={30.4} height={7.6} />
        </g>
        <g>
          <rect x={707.8} y={406.3} className="st1" width={42.2} height={8.3} />
          <rect x={707.8} y={439.7} className="st1" width={42.2} height={8.3} />
          <rect x={707.8} y={431.3} className="st1" width={42.2} height={8.3} />
          <rect x={707.8} y={423} className="st1" width={42.2} height={8.3} />
          <rect x={707.8} y={414.7} className="st1" width={42.2} height={8.3} />
          <rect x={707.8} y={398} className="st1" width={42.2} height={8.3} />
        </g>
        <rect x={666.4} y={406.8} className="st1" width={41.6} height={10.1} />
        <rect x={666.4} y={436.9} className="st1" width={41.6} height={10.1} />
        <rect x={666.4} y={426.9} className="st1" width={41.6} height={10.1} />
        <rect x={666.4} y={416.8} className="st1" width={41.6} height={10.1} />
        <rect x={666.4} y={396.7} className="st1" width={41.6} height={10.1} />
        <rect x={1211} y={353.5} className="st1" width={80.5} height={157} />
        <g>
          <rect x={1251.1} y={407.3} className="st1" width={39.9} height={8.3} />
          <rect x={1251.1} y={440.7} className="st1" width={39.9} height={8.3} />
          <rect x={1251.1} y={432.3} className="st1" width={39.9} height={8.3} />
          <rect x={1251.1} y={424} className="st1" width={39.9} height={8.3} />
          <rect x={1251.1} y={415.7} className="st1" width={39.9} height={8.3} />
          <rect x={1251.1} y={399} className="st1" width={39.9} height={8.3} />
        </g>
        <rect x={1211.9} y={407.8} className="st1" width={39.4} height={10.1} />
        <rect x={1211.9} y={437.9} className="st1" width={39.4} height={10.1} />
        <rect x={1211.9} y={427.9} className="st1" width={39.4} height={10.1} />
        <rect x={1211.9} y={417.8} className="st1" width={39.4} height={10.1} />
        <rect x={1211.9} y={397.7} className="st1" width={39.4} height={10.1} />
        <polygon
          className="st1"
          points="1873,673.7 1873,555.5 1812,555.5 1812,690 1859.4,690 "
        />
        <g>
          <rect x={1842.3} y={605.3} className="st1" width={30.8} height={8.3} />
          <rect x={1842.3} y={638.7} className="st1" width={30.8} height={8.3} />
          <rect x={1842.3} y={630.3} className="st1" width={30.8} height={8.3} />
          <rect x={1842.3} y={622} className="st1" width={30.8} height={8.3} />
          <rect x={1842.3} y={613.7} className="st1" width={30.8} height={8.3} />
          <rect x={1842.3} y={597} className="st1" width={30.8} height={8.3} />
        </g>
        <rect x={1812} y={605.8} className="st1" width={30.4} height={10.1} />
        <rect x={1812} y={635.9} className="st1" width={30.4} height={10.1} />
        <rect x={1812} y={625.9} className="st1" width={30.4} height={10.1} />
        <rect x={1812} y={615.8} className="st1" width={30.4} height={10.1} />
        <rect x={1812} y={595.8} className="st1" width={30.4} height={10.1} />
        <text transform="matrix(1 0 0 1 183.5732 465.917)" className="st3 st4">
          {"09"}
        </text>
        <text transform="matrix(1 0 0 1 77.5732 389.4609)" className="st3 st5">
          {"3.2"}
        </text>
        <text transform="matrix(1 0 0 1 321.5732 465.917)" className="st3 st4">
          {"05"}
        </text>
        <text transform="matrix(1 0 0 1 429.5732 465.917)" className="st3 st4">
          {"03"}
        </text>
        <text transform="matrix(1 0 0 1 579.5732 466.917)" className="st3 st4">
          {"01"}
        </text>
        <polygon
          id="r3-1-12"
          className="st1"
          points="750.5,441.5 750.5,546.9 768.8,564.5 850,564.5 850,441.5 "
        />
        <text transform="matrix(1 0 0 1 130.5732 668.917)" className="st3 st4">
          {"WC"}
        </text>
        <text transform="matrix(1 0 0 1 246.5732 642.917)" className="st3 st4">
          {"08"}
        </text>
        <text transform="matrix(1 0 0 1 404.5732 642.917)" className="st3 st4">
          {"06"}
        </text>
        <text transform="matrix(1 0 0 1 571.5732 642.917)" className="st3 st4">
          {"02"}
        </text>
        <text transform="matrix(1 0 0 1 786.5732 509.917)" className="st3 st4">
          {"12"}
        </text>
        <text transform="matrix(1 0 0 1 790.5732 370.917)" className="st3 st4">
          {"13"}
        </text>
        <text transform="matrix(1 0 0 1 919.5732 429.917)" className="st3 st4">
          {"BIBLIOTHEK"}
        </text>
        <text transform="matrix(1 0 0 1 1129.5732 411.917)" className="st3 st4">
          {"02"}
        </text>
        <text transform="matrix(1 0 0 1 1375.5732 465.917)" className="st3 st4">
          {"02"}
        </text>
        <text transform="matrix(1 0 0 1 1515.5732 465.917)" className="st3 st4">
          {"04"}
        </text>
        <text transform="matrix(1 0 0 1 1624.5732 465.917)" className="st3 st4">
          {"06"}
        </text>
        <text transform="matrix(1 0 0 1 1758.5732 465.917)" className="st3 st4">
          {"08"}
        </text>
        <text transform="matrix(1 0 0 1 1333.5732 638.917)" className="st3 st4">
          {"01"}
        </text>
        <text transform="matrix(1 0 0 1 1450.5732 638.917)" className="st3 st4">
          {"03"}
        </text>
        <text transform="matrix(1 0 0 1 1556.5732 638.917)" className="st3 st4">
          {"05"}
        </text>
        <text transform="matrix(1 0 0 1 1664.5732 638.917)" className="st3 st4">
          {"07"}
        </text>
        <text transform="matrix(1 0 0 1 1758.5732 656.917)" className="st3 st4">
          {"WC"}
        </text>
        <text transform="matrix(1 0 0 1 922.5732 680.917)" className="st3 st4">
          {"WC"}
        </text>
        <text transform="matrix(1 0 0 1 1022.5732 679.917)" className="st3 st4">
          {"WC"}
        </text>
        <text transform="matrix(1 0 0 1 866.5732 768.917)" className="st3 st4">
          {"09"}
        </text>
        <text transform="matrix(1 0 0 1 1096.5732 768.917)" className="st3 st4">
          {"07"}
        </text>
        <path className="st0" d="M850,495.5" />
        <g>
          <polygon
            className="st1"
            points="1009,689 974.5,689 974.5,654.5 1009,654.5 1009,658.2  "
          />
          <line className="st1" x1={974.5} y1={689} x2={1009} y2={654.5} />
          <line className="st1" x1={1009} y1={689} x2={974.5} y2={654.5} />
        </g>
        <text transform="matrix(1 0 0 1 944.5732 258.4609)" className="st3 st5">
          {"3.1"}
        </text>
        <text transform="matrix(1 0 0 1 1784.5732 376.4609)" className="st3 st5">
          {"3.3"}
        </text>
        <text
          transform="matrix(1.0343 0 0 1 1591.2207 888.582)"
          className="st6 st7"
        >
          {"EBENE 3"}
        </text>
      </svg>

)
  }

export default MapSvg_3;