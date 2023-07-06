import React, {useState} from "react";

type SvgComponentProps = {
  handlePathClick: (id: string) => void;
};

const MapSvg: React.FC<SvgComponentProps> = ({ handlePathClick }) => {
  const handleClick = (event: React.MouseEvent<SVGPathElement>) => {
    const pathId = event.currentTarget.id;
    handlePathClick(pathId);
  };

  return (
  <svg
    width={1260}
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 1920 733"
    xmlSpace="preserve"

  >
    <style>
    {`.st0,.st1,.st2{fill:#bcbcbc;stroke:#000;stroke-miterlimit:10}.st0:hover,.st1:hover,.st2:hover{fill:tomato}.st1,.st2{fill:#fff}.st2{opacity:.7}.st4{font-family:'MyriadPro-Regular'}.st6{font-size:12px}.st7{font-size:34.1556px}.st8{fill:red}.st9{font-size:22.1902px}`}
    </style>
    <path
      id="back_x5F_print"
      className="st0"
      d="M67.5 201.5H680.5V605.5H67.5z"
    />
    <path
      id="ground-1"
      className="st0"
      d="M1820 291.5L1820 42.5 1469 42.5 1469 281.5 1091.5 281.5 1091.5 69.5 753.5 69.5 753.5 302.5 758.5 302.5 758.5 331.5 753.5 331.5 753.5 407.5 1091.5 407.5 1820.5 407.5 1820.5 322.5 1808.5 322.5 1808.5 291.5z"
    />
    <path id="1-2-12" className="st1" d="M753.5 68.5H848.5V141.5H753.5z" onClick={handleClick} />
    <path id="1-2-13" className="st1" d="M848.5 68.5H926.5V141.5H848.5z" onClick={handleClick}/>
    <path id="1-2-15" className="st1" d="M925.5 68.5H1002.5V141.5H925.5z" onClick={handleClick}/>
    <path id="1-2-11" className="st1" d="M753.5 141.5H826.5V227.5H753.5z" onClick={handleClick}/>
    <path id="1-2-10" className="st1" d="M743.5 227.5H826.5V302.5H743.5z" onClick={handleClick}/>
    <path id="1-2-14" className="st1" d="M848.5 174.5H981.5V218.5H848.5z" onClick={handleClick}/>
    <path id="1-2-3" className="st1" d="M848.5 218.5H981.5V298.5H848.5z" onClick={handleClick}/>
    <path
      id="1-2-17"
      className="st1"
      d="M1002.5 161.5L1002.5 298 1068.5 298 1068.5 286.9 1091.5 286.9 1091.5 161.5z" onClick={handleClick}
    />
    <path
      id="1-1-stairs"
      className="st1"
      d="M1091.5 194.5H1141.5V293.5H1091.5z"
    />
    <path className="st1" d="M1091.5 222.5H1116.5V227.5H1091.5z" />
    <path className="st1" d="M1091.5 227.5H1116.5V232.5H1091.5z" />
    <path className="st1" d="M1091.5 232.5H1116.5V237.5H1091.5z" />
    <path className="st1" d="M1091.5 237.5H1116.5V242.5H1091.5z" />
    <path className="st1" d="M1091.5 242.5H1116.5V247.5H1091.5z" />
    <path className="st1" d="M1091.5 247.5H1116.5V252.5H1091.5z" />
    <path className="st1" d="M1116.5 221.5H1141.5V226.5H1116.5z" />
    <path className="st1" d="M1116.5 226.5H1141.5V231.5H1116.5z" />
    <path className="st1" d="M1116.5 231.5H1141.5V236.5H1116.5z" />
    <path className="st1" d="M1116.5 236.5H1141.5V241.5H1116.5z" />
    <path className="st1" d="M1116.5 241.5H1141.5V246.5H1116.5z" />
    <path className="st1" d="M1116.5 246.5H1141.5V251.5H1116.5z" />
    <path className="st1" d="M1141.5 237.5H1175.5V282.5H1141.5z" />
    <path
      id="1-1-cafetaria"
      className="st1"
      d="M1335.5 260L1335.5 191.5 1278.5 191.5 1278.5 179.9 1267.1 168.5 1189 168.5 1175.5 182 1175.5 282.5 1190.5 282.5 1190.5 293.1 1201.9 304.5 1311.5 304.5 1311.5 271.5 1324 271.5z" onClick={handleClick}
    />
    <path
      id="1-1-16"
      className="st1"
      d="M1378.5 191.5L1335.5 191.5 1335.5 248.5 1392.5 248.5 1392.5 205.5z"
      onClick={handleClick}
    />
    <path
      id="1-1-15"
      className="st1"
      d="M1335.5 248.5L1335.5 260.5 1323.5 271.5 1311.5 271.5 1311.5 304.5 1322.5 314.5 1380.3 314.5 1392.5 302.3 1392.5 247.5z" 
      onClick={handleClick}
    />
    <path className="st1" d="M1392.5 233.5H1425.5V281.5H1392.5z" />
    <path
      id="1-3-2"
      className="st1"
      d="M1469.5 168.5H1574.5V279.5H1469.5z"
      onClick={handleClick}
    />
    <path
      id="1-3-15"
      className="st1"
      d="M1469.5 42.5H1551.7V144.5H1469.5z"
      onClick={handleClick}
    />
    <path
      id="1-3-14"
      className="st1"
      d="M1551.7 42.5H1641.1000000000001V144.5H1551.7z"
      onClick={handleClick}
    />
    <path
      id="1-3-13"
      className="st1"
      d="M1641.2 42.5H1730.6000000000001V144.5H1641.2z"
      onClick={handleClick}
    />
    <path id="1-3-12" className="st1" d="M1730.6 42.5H1820V144.5H1730.6z" onClick={handleClick} />
    <path
      id="1-3-4"
      className="st1"
      d="M1574.5 178.5H1629.5V268.5H1574.5z"
      onClick={handleClick}
    />
    <path
      id="1-3-6"
      className="st1"
      d="M1681.5 176.5H1736.5V265.5H1681.5z"
      onClick={handleClick}
    />
    <path
      id="1-3-8"
      className="st1"
      d="M1746.5 144.5v32h-10v96h83v-128h-73z"
      onClick={handleClick}
    />
    <path className="st1" d="M1709.5 265.5H1736.5V272.5H1709.5z" />
    <path className="st1" d="M1574.5 268.5H1601.5V275.5H1574.5z" />
    <path
      id="1-3-1"
      className="st1"
      d="M1509.5 319.5H1567.5V406.5H1509.5z"
      onClick={handleClick}
    />
    <path
      id="1-3-3"
      className="st1"
      d="M1567.5 319.5H1625.5V406.5H1567.5z"
      onClick={handleClick}
    />
    <path
      id="1-3-5"
      className="st1"
      d="M1622.5 319.5H1699.5V406.5H1622.5z"
      onClick={handleClick}
    />
    <path
      id="1-3-7"
      className="st1"
      d="M1699.5 319.5H1754.5V406.5H1699.5z"
      onClick={handleClick}
    />
    <path
      className="st1"
      d="M1509.5 406.5L1480.5 406.5 1479.5 373.5 1488.5 372.5 1487.5 340.5 1477.5 327.5 1487.5 319.5 1509.5 319.5z"
    />
    <path
      id="1-3-toilette"
      className="st1"
      d="M1754.5 349.5L1754.5 406.5 1768.5 406.5 1768.5 424.5 1803 424.5 1803 349.5z"
    />
    <path
      className="st1"
      d="M1843.5 405L1843.5 322 1803 322 1803 409.5 1839.3 409.5z"
    />
    <path
      id="1-1-mensa"
      className="st1"
      d="M1417.4 587.5L1435.8 587.5 1446 577.5 1446 483.2 1435.2 470.5 1417.4 470.5 1417.4 406.5 1179.5 406.5 1179.5 525.5 1203 525.5 1203 543.5 1229.5 543.5 1229.5 587.5z"
    />
    <path
      className="st1"
      d="M1228.5 587.5L1228.5 543.5 1202.5 543.5 1202.5 525.5 1179.5 525.5 1179.5 406.5 1147.5 406.5 1147.5 446.5 1138 446.5 1126.5 458 1126.5 625.5 1232.5 625.5 1232.5 587.5z"
    />
    <path id="1-2-5" className="st1" d="M814.5 329.5H895.5V406.5H814.5z" onClick={handleClick}/>
    <path
      id="1-2-2"
      className="st1"
      d="M895.5 329.5H1046.5V406.5H895.5z"
      onClick={handleClick}
    />
    <path
      id="1-2-1"
      className="st1"
      d="M1080.1 373.5L1080.1 329.5 1046 329.5 1046 406.5 1057.4 406.5 1080.1 406.5 1093.5 406.5 1093.5 373.5z"
      onClick={handleClick}
    />
    <path
      id="1-1-toilette_1"
      className="st1"
      d="M1162.3 371.5L1147 387.7 1147 406.5 1203.5 406.5 1203.5 371.5z"
    />
    <path
      className="st1"
      d="M1306.5 362.5L1306.5 367.5 1268.5 367.5 1268.5 362.5 1237.5 362.5 1237.5 406.5 1335.5 406.5 1335.5 362.5z"
    />
    <path
      id="1-1-toilette"
      className="st1"
      d="M1402.2 372.5L1417.5 388.7 1417.5 407.5 1361 407.5 1361 372.5z"
    />
    <path id="r12_8_" className="st1" d="M1425.5 192.5H1469V291.5H1425.5z" />
    <path className="st1" d="M1425.5 220.5H1447.3V225.5H1425.5z" />
    <path className="st1" d="M1425.5 225.5H1447.3V230.5H1425.5z" />
    <path className="st1" d="M1425.5 230.5H1447.3V235.5H1425.5z" />
    <path className="st1" d="M1425.5 235.5H1447.3V240.5H1425.5z" />
    <path className="st1" d="M1425.5 240.5H1447.3V245.5H1425.5z" />
    <path className="st1" d="M1425.5 245.5H1447.3V250.5H1425.5z" />
    <path className="st1" d="M1447.3 219.5H1469.1V224.5H1447.3z" />
    <path className="st1" d="M1447.3 224.5H1469.1V229.5H1447.3z" />
    <path className="st1" d="M1447.3 229.5H1469.1V234.5H1447.3z" />
    <path className="st1" d="M1447.3 234.5H1469.1V239.5H1447.3z" />
    <path className="st1" d="M1447.3 239.5H1469.1V244.5H1447.3z" />
    <path className="st1" d="M1447.3 244.5H1469.1V249.5H1447.3z" />
    <path className="st1" d="M804.5 263.5H826.5V302.5H804.5z" />
    <path
      className="st1"
      d="M806.8 427.8L806.8 408.5 814.5 408.5 814 351.5 769 351.5 769 428.3 770.6 430 804.3 430.5z"
    />
    <path className="st1" d="M727 412.5L727 331 769 331 769 417 731.3 417z" />
    <path className="st1" d="M1823 346.5H1843V351.5H1823z" />
    <path className="st1" d="M1823 351.5H1843V356.5H1823z" />
    <path className="st1" d="M1823 356.5H1843V361.5H1823z" />
    <path className="st1" d="M1823 361.5H1843V366.5H1823z" />
    <path className="st1" d="M1823 366.5H1843V371.5H1823z" />
    <path className="st1" d="M1823 371.5H1843V376.5H1823z" />
    <path className="st1" d="M1803 345.5H1823V350.5H1803z" />
    <path className="st1" d="M1803 350.5H1823V355.5H1803z" />
    <path className="st1" d="M1803 355.5H1823V360.5H1803z" />
    <path className="st1" d="M1803 360.5H1823V365.5H1803z" />
    <path className="st1" d="M1803 365.5H1823V370.5H1803z" />
    <path className="st1" d="M1803 370.5H1823V375.5H1803z" />
    <path className="st1" d="M727 377.5H747.8V382.5H727z" />
    <path className="st1" d="M747.8 371.5H768.5999999999999V376.5H747.8z" />
    <path className="st1" d="M727 357.5H747.8V362.5H727z" />
    <path className="st1" d="M727 362.5H747.8V367.5H727z" />
    <path className="st1" d="M727 367.5H747.8V372.5H727z" />
    <path className="st1" d="M727 372.5H747.8V377.5H727z" />
    <path className="st1" d="M727 382.5H747.8V387.5H727z" />
    <path className="st1" d="M747.8 356.5H768.5999999999999V361.5H747.8z" />
    <path className="st1" d="M747.8 361.5H768.5999999999999V366.5H747.8z" />
    <path className="st1" d="M747.8 366.5H768.5999999999999V371.5H747.8z" />
    <path className="st1" d="M747.8 376.5H768.5999999999999V381.5H747.8z" />
    <path className="st1" d="M747.8 381.5H768.5999999999999V386.5H747.8z" />
    <path
      id="1-2-16"
      className="st1"
      d="M1002.5 68.5H1091.5V141.5H1002.5z"
      onClick={handleClick}
    />
    <path
      className="st1"
      d="M1299 398L1276.5 398 1276.5 375.5 1299 375.5 1299 377.9z"
    />
    <path className="st1" d="M1276.5 398L1299 375.5" />
    <path className="st1" d="M1299 398L1276.5 375.5" />
    <path id="1-4-29" className="st1" d="M67.5 488.5H159.5V605.5H67.5z" onClick={handleClick} />
    <path id="1-4-28" className="st1" d="M159.5 488.5H248.5V605.5H159.5z" onClick={handleClick}/>
    <path
      id="1-4-27"
      className="st1"
      d="M337.5 488.5L248.5 488.5 248.5 605.5 337.5 605.5 337.5 507.5 359.5 507.5 359.5 488.5z"
      onClick={handleClick}
    />
    <path id="1-4-17" className="st1" d="M337.5 507.5H377.5V605.5H337.5z" 
    onClick={handleClick}/>
    <path
      id="1-4-15"
      className="st1"
      d="M415.5 462.5L415.5 521.5 427.5 521.5 427.5 605.5 516.5 605.5 516.5 462.5z"
      onClick={handleClick}
    />
    <path id="1-4-16" className="st1" d="M377.5 521.5H427.5V605.5H377.5z" onClick={handleClick} />
    <path id="1-4-12" className="st1" d="M415.5 413.5H499.5V461.5H415.5z" onClick={handleClick} />
    <path className="st1" d="M499.5 413.5H516.5V461.5H499.5z" />
    <path
      id="1-4-11"
      className="st1"
      d="M516.5 413L516.5 489.8 585.5 489.8 585.5 605.5 680.5 605.5 680.5 413z"
      onClick={handleClick}
    />
    <path id="1-4-1" className="st2" d="M642.5 556.5H680.5V605.5H642.5z" onClick={handleClick}/>
    <path
      id="1-4-19"
      className="st1"
      d="M92.5 336.5L140.5 336.5 140.5 201.5 67.5 201.5 67.5 351.5 92.5 351.5z"
      onClick={handleClick}
    />
    <path
      id="1-4-19-a"
      className="st1"
      d="M140.5 201.5L140.5 336.5 310.5 336.5 310.5 351.5 364 351.5 364 201.5z"
      onClick={handleClick}
    />
    <path
      id="1-4-23"
      className="st1"
      d="M92.5 336.5H195.5V388.5H92.5z"
      onClick={handleClick}
    />
    <path
      id="1-4-20-22"
      className="st1"
      d="M195.5 336.5H310.5V388.5H195.5z"
      onClick={handleClick}
    />
    <path
      id="1-4-30"
      className="st1"
      d="M93.5 417.5H193.5V469.5H93.5z"
      onClick={handleClick}
    />
    <path id="1-4-26" className="st1" d="M193.5 417.5H310.5V469.5H193.5z" onClick={handleClick} />
    <g id="_x3C_Group_x3E_stairs">
      <path className="st2" d="M629.5 466.5H680.5V494.5H629.5z" />
      <path className="st1" d="M644.3 467H649.3V480.5H644.3z" />
      <path className="st1" d="M650.3 480.5H655.3V494H650.3z" />
      <path className="st1" d="M664.3 467H669.3V480.5H664.3z" />
      <path className="st1" d="M659.3 467H664.3V480.5H659.3z" />
      <path className="st1" d="M654.3 467H659.3V480.5H654.3z" />
      <path className="st1" d="M649.3 467H654.3V480.5H649.3z" />
      <path className="st1" d="M639.3 467H644.3V480.5H639.3z" />
      <path className="st1" d="M665.3 480.5H670.3V494H665.3z" />
      <path className="st1" d="M660.3 480.5H665.3V494H660.3z" />
      <path className="st1" d="M655.3 480.5H660.3V494H655.3z" />
      <path className="st1" d="M645.3 480.5H650.3V494H645.3z" />
      <path className="st1" d="M640.3 480.5H645.3V494H640.3z" />
    </g>
    <path
      id="1-4-2-a"
      className="st1"
      d="M416 348.5L416 335.5 516.5 335.5 553.5 335.5 553.5 201.5 383.5 201.5 383.5 294 391 294 391 348.5z" onClick={handleClick}
    />
    <path
      id="1-4-toilette"
      className="st1"
      d="M393.5 507.5L359.5 507.5 359.5 488.5 333.5 488.5 333.5 427.5 393.5 427.5z"
    />
    <path className="st1" d="M377 321.8H390.5V326.8H377z" />
    <path className="st1" d="M363.5 314.8H377V319.8H363.5z" />
    <path className="st1" d="M377 341.8H390.5V346.8H377z" />
    <path className="st1" d="M377 336.8H390.5V341.8H377z" />
    <path className="st1" d="M377 331.8H390.5V336.8H377z" />
    <path className="st1" d="M642.5 336.5H680.5V368.5H642.5z" />
    <path className="st1" d="M377 326.8H390.5V331.8H377z" />
    <path className="st1" d="M377 316.8H390.5V321.8H377z" />
    <path className="st1" d="M363.5 329.8H377V334.8H363.5z" />
    <path className="st1" d="M363.5 324.8H377V329.8H363.5z" />
    <path className="st1" d="M363.5 319.8H377V324.8H363.5z" />
    <path className="st1" d="M363.5 309.8H377V314.8H363.5z" />
    <path className="st1" d="M363.5 304.8H377V309.8H363.5z" />
    <path className="st1" d="M363.5 201.5H383.5V293.5H363.5z" />
    <path id="1-4-4" className="st1" d="M383.5 201.5H428.5V270.5H383.5z" onClick={handleClick} />
    <path
      transform="rotate(90 377.25 332.25)"
      className="st1"
      d="M339 318.5H415.5V346H339z"
    />
    <path id="1-4-10" className="st1" d="M415.5 334.5H519.5V386.5H415.5z" onClick={handleClick} />
    <path id="1-4-5" className="st1" d="M519.5 334.5H621.5V386.5H519.5z" onClick={handleClick}/>
    <path
      id="1-4-2"
      className="st1"
      d="M553.5 201.5L553.5 334.5 621.5 334.5 621.5 355.5 642.5 355.5 642.5 309.5 680.5 309.5 680.5 201.5z" onClick={handleClick}
    />
    <path
      opacity={0.3}
      fill="#fff"
      stroke="#000"
      strokeMiterlimit={10}
      d="M642.5 309.5H680.5V336.5H642.5z"
    />
    <path
      className="st1"
      d="M672 362L650.5 362 650.5 340.5 672 340.5 672 342.8z"
    />
    <path className="st1" d="M650.5 362L672 340.5" />
    <path className="st1" d="M672 362L650.5 340.5" />
    <path className="st1" d="M642.5 309.5H680.5V336.5H642.5z" />
    <path className="st1" d="M23 297L23 386.2 24.8 388 67 388 67 297z" />
    <path className="st1" d="M46 334H67V339H46z" />
    <path className="st1" d="M46 354H67V359H46z" />
    <path className="st1" d="M46 349H67V354H46z" />
    <path className="st1" d="M46 344H67V349H46z" />
    <path className="st1" d="M46 339H67V344H46z" />
    <path className="st1" d="M46 329H67V334H46z" />
    <path className="st1" d="M23.3 344H46V349H23.3z" />
    <path className="st1" d="M23.3 359H46V364H23.3z" />
    <path className="st1" d="M23.3 354H46V359H23.3z" />
    <path className="st1" d="M23.3 349H46V354H23.3z" />
    <path className="st1" d="M23.3 339H46V344H23.3z" />
    <path className="st1" d="M23.3 334H46V339H23.3z" />
    <text
      transform="matrix(1.0343 0 0 1 1644.22 715.582)"
      className="st4"
      fontSize="61.6679px"
    >
      {"EBENE 1"}
    </text>
    <path
      id="1-4-11-a"
      className="st1"
      d="M516.5 488.5H585.5V605.5H516.5z"
      onClick={handleClick}
    />
    <text transform="translate(847.37 367.14)" className="st4 st6">
      {"05"}
    </text>
    <text transform="translate(963.37 367.14)" className="st4 st6">
      {"02"}
    </text>
    <text transform="translate(1058.37 367.14)" className="st4 st6">
      {"01"}
    </text>
    <text transform="translate(774.37 263.14)" className="st4 st6">
      {"10"}
    </text>
    <text transform="translate(783.37 199.14)" className="st4 st6">
      {"11"}
    </text>
    <text transform="translate(790.37 119.14)" className="st4 st6">
      {"12"}
    </text>
    <text transform="translate(878.37 119.14)" className="st4 st6">
      {"13"}
    </text>
    <text transform="translate(953.37 119.14)" className="st4 st6">
      {"15"}
    </text>
    <text transform="translate(1035.37 119.14)" className="st4 st6">
      {"16"}
    </text>
    <text transform="translate(904.37 207.14)" className="st4 st6">
      {"14"}
    </text>
    <text transform="translate(907.37 265.14)" className="st4 st6">
      {"03"}
    </text>
    <text transform="translate(1033.37 234.14)" className="st4 st6">
      {"17"}
    </text>
    <text transform="translate(1219.446 247.904)" className="st4 st6">
      {"CAFETARIA"}
    </text>
    <text transform="translate(1353.37 225.14)" className="st4 st6">
      {"16"}
    </text>
    <text transform="translate(1353.37 281.14)" className="st4 st6">
      {"15"}
    </text>
    <text transform="translate(1501.025 100.541)" className="st4 st6">
      {"15"}
    </text>
    <text transform="translate(1584.025 100.541)" className="st4 st6">
      {"14"}
    </text>
    <text transform="translate(1677.025 100.541)" className="st4 st6">
      {"13"}
    </text>
    <text transform="translate(1768.025 100.541)" className="st4 st6">
      {"12"}
    </text>
    <text transform="translate(1512.395 229.892)" className="st4 st6">
      {"02"}
    </text>
    <text transform="translate(1593.395 230.892)" className="st4 st6">
      {"04"}
    </text>
    <text transform="translate(1705.395 230.892)" className="st4 st6">
      {"06"}
    </text>
    <text transform="translate(1769.395 230.892)" className="st4 st6">
      {"08"}
    </text>
    <text transform="translate(1484.503 385.484)" className="st4 st6">
      {"HM"}
    </text>
    <text transform="translate(1529.904 366.3)" className="st4 st6">
      {"01"}
    </text>
    <text transform="translate(1587.904 365.3)" className="st4 st6">
      {"03"}
    </text>
    <text transform="translate(1652.904 365.3)" className="st4 st6">
      {"05"}
    </text>
    <text transform="translate(1719.904 365.3)" className="st4 st6">
      {"07"}
    </text>
    <text transform="translate(1770.79 374.644)" className="st4 st6">
      {"WC"}
    </text>
    <text transform="translate(1373.79 394.644)" className="st4 st6">
      {"WC"}
    </text>
    <text transform="translate(1167.79 390.644)" className="st4 st6">
      {"WC"}
    </text>
    <text transform="translate(1274.446 492.904)" className="st4 st6">
      {"MENSA"}
    </text>
    <text transform="translate(1147.446 575.904)" className="st4 st6">
      {"K\xDCCHE"}
    </text>
    <text transform="translate(779.79 382.644)" className="st4 st6">
      {"WC"}
    </text>
    <text transform="translate(95.573 276.917)" className="st4 st6">
      {"19"}
    </text>
    <text transform="translate(229.573 276.917)" className="st4 st6">
      {"19a"}
    </text>
    <text transform="translate(475.573 276.917)" className="st4 st6">
      {"02a"}
    </text>
    <text transform="translate(598.573 276.917)" className="st4 st6">
      {"02"}
    </text>
    <text transform="translate(130.42 366.554)" className="st4 st6">
      {"23-25"}
    </text>
    <text transform="translate(239.42 367.554)" className="st4 st6">
      {"20-22"}
    </text>
    <text transform="translate(125.42 447.554)" className="st4 st6">
      {"30-32"}
    </text>
    <text transform="translate(243.573 447.917)" className="st4 st6">
      {"26"}
    </text>
    <text transform="translate(104.573 552.917)" className="st4 st6">
      {"29"}
    </text>
    <text transform="translate(197.573 552.917)" className="st4 st6">
      {"28"}
    </text>
    <text transform="translate(280.573 552.917)" className="st4 st6">
      {"27"}
    </text>
    <text transform="translate(351.573 563.917)" className="st4 st6">
      {"17"}
    </text>
    <text transform="translate(394.573 568.917)" className="st4 st6">
      {"16"}
    </text>
    <text transform="translate(457.573 546.917)" className="st4 st6">
      {"15"}
    </text>
    <text transform="translate(451.573 443.917)" className="st4 st6">
      {"12"}
    </text>
    <text transform="translate(563.573 462.917)" className="st4 st6">
      {"11"}
    </text>
    <text transform="translate(460.573 364.917)" className="st4 st6">
      {"10"}
    </text>
    <text transform="translate(563.573 364.917)" className="st4 st6">
      {"05"}
    </text>
    <text transform="translate(537.573 546.917)" className="st4 st6">
      {"11a"}
    </text>
    <text transform="translate(656.573 580.917)" className="st4 st6">
      {"01"}
    </text>
    <text transform="translate(349.637 452.898)" className="st4 st6">
      {"WC"}
    </text>
    <text transform="translate(399.573 241.917)" className="st4 st6">
      {"04"}
    </text>
    <text transform="translate(67.573 193.46)" className="st4 st7">
      {"1.4"}
    </text>
    <text transform="translate(747.573 60.46)" className="st4 st7">
      {"1.2"}
    </text>
    <text transform="translate(1260.573 65.46)" className="st4 st7">
      {"1.1"}
    </text>
    <text transform="translate(1770.573 38.46)" className="st4 st7">
      {"1.3"}
    </text>
    <path className="st8" d="M686.4 399.6L703 383 703.3 416.6z" />
    <text transform="matrix(.7738 0 0 1 686.156 452.452)" className="st4 st9">
      {"EINGANG"}
    </text>
    <path className="st8" d="M1453.8 416L1470.9 432.2 1437.4 433.4z" />
    <text transform="matrix(.7738 0 0 1 1425.156 458.452)" className="st4 st9">
      {"EINGANG"}
    </text>
  </svg>

)
  }

export default MapSvg;