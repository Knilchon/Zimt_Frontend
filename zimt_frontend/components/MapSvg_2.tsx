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
    <svg width={1260}
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 1920 733"
    xmlSpace="preserve" >
    <style>
      {
        ".st1,.st2{stroke:#000;stroke-miterlimit:10}.st1{display:inline;fill:#bcbcbc}.st2{fill:#fff}.st2,.st3{display:inline}.st4,.st5{fill:#fff;stroke:#000;stroke-miterlimit:10}.st5{fill:none}.st9{font-family:&apos;ArialMT&apos;}.st10{font-size:61.6679px}.st11{<font-size:14></font-size:14>px}.st12{font-size:34.1556px}.st13{display:inline;fill:red}.st14{font-size:22.1902px}.st17{font-family:&apos;Arial&apos;}"
      }
    </style>
    <g id="Layer_2">
      <path
        id="floor"
        fill="#bcbcbc"
        stroke="#000"
        strokeMiterlimit={10}
        d="M1412.3 219L1412.3 196 1130.3 196 1130.3 289 799.3 289 786.3 289 666.3 289 666.3 199 66.3 199 66.3 609 666.3 609 666.3 418 799.3 418 799.3 404 1130.3 404 1130.3 425 1412.3 425 1412.3 403 1811.3 403 1811.3 219z"
      />
      <path className="st4" d="M631.3 343H666.3V371H631.3z" />
      <path
        transform="rotate(90 366.25 335.707)"
        className="st4"
        d="M328 319.7H404.5V351.7H328z"
      />
      <path className="st4" d="M66.3 447H158.3V609H66.3z" />
      <path className="st4" d="M158.3 447H247.3V609H158.3z" />
      <path
        className="st4"
        d="M332.3 443.5L247.3 443.5 247.3 609 332.3 609 332.3 470.3 332.3 470.3z"
      />
      <path className="st4" d="M332.3 535H376.3V609H332.3z" />
      <path className="st4" d="M376.3 535H399.3V609H376.3z" />
      <path className="st4" d="M409.3 419H591.3V514H409.3z" />
      <path
        className="st4"
        id = "2-4-22-b"
        d="M93.9 339.4L158.8 339.4 158.8 199.5 66.3 199.5 66.3 355 93.9 355z"
      />
      <path className="st4" d="M92.3 425H196.3V473H92.3z" />
      <g id="_x3C_Group_x3E_stairs_1_">
        <path
          opacity={0.7}
          fill="#fff"
          stroke="#000"
          strokeMiterlimit={10}
          d="M617.3 476H668.3V504H617.3z"
        />
        <path className="st4" d="M632 476.5H637V490H632z" />
        <path className="st4" d="M638 490H643V503.5H638z" />
        <path className="st4" d="M652 476.5H657V490H652z" />
        <path className="st4" d="M647 476.5H652V490H647z" />
        <path className="st4" d="M642 476.5H647V490H642z" />
        <path className="st4" d="M637 476.5H642V490H637z" />
        <path className="st4" d="M627 476.5H632V490H627z" />
        <path className="st4" d="M653 490H658V503.5H653z" />
        <path className="st4" d="M648 490H653V503.5H648z" />
        <path className="st4" d="M643 490H648V503.5H643z" />
        <path className="st4" d="M633 490H638V503.5H633z" />
        <path className="st4" d="M628 490H633V503.5H628z" />
      </g>
      <path
        className="st4"
        d="M385.8 511L355.4 511 332.3 511 332.3 492 332.3 431 385.8 431z"
      />
      <path className="st4" d="M350.3 340.2H367.8V345.4H350.3z" />
      <path className="st4" d="M350.3 330.2H366.8V335.2H350.3z" />
      <path className="st4" d="M350.3 345.2H366.8V350.2H350.3z" />
      <path className="st4" d="M350.3 335.2H366.8V340.2H350.3z" />
      <path className="st4" d="M350.3 325.2H366.8V330.2H350.3z" />
      <path className="st4" d="M350.3 320.2H366.8V325.2H350.3z" />
      <path className="st4" d="M409.3 338H508.3V390H409.3z" />
      <path className="st4" d="M508.3 338H607.3V390H508.3z" />
      <path
        className="st4"
        d="M659.8 367.5L638.3 367.5 638.3 346 659.8 346 659.8 348.3z"
      />
      <path className="st4" d="M638.3 367.5L659.8 346" />
      <path className="st4" d="M659.8 367.5L638.3 346" />
      <path
        className="st4"
        d="M21.8 300.5L21.8 389.7 23.5 391.5 65.8 391.5 65.8 300.5z"
      />
      <path className="st4" d="M44.8 337.5H65.8V342.5H44.8z" />
      <path className="st4" d="M44.8 357.5H65.8V362.5H44.8z" />
      <path className="st4" d="M44.8 352.5H65.8V357.5H44.8z" />
      <path className="st4" d="M44.8 347.5H65.8V352.5H44.8z" />
      <path className="st4" d="M44.8 342.5H65.8V347.5H44.8z" />
      <path className="st4" d="M44.8 332.5H65.8V337.5H44.8z" />
      <path className="st4" d="M22.1 347.5H44.8V352.5H22.1z" />
      <path className="st4" d="M22.1 362.5H44.8V367.5H22.1z" />
      <path className="st4" d="M22.1 357.5H44.8V362.5H22.1z" />
      <path className="st4" d="M22.1 352.5H44.8V357.5H22.1z" />
      <path className="st4" d="M22.1 342.5H44.8V347.5H22.1z" />
      <path className="st4" d="M22.1 337.5H44.8V342.5H22.1z" />
      <path className="st4" d="M399.3 535H444.3V609H399.3z" />
      <path className="st4" d="M444.3 535H478.3V609H444.3z" />
      <path className="st4" d="M478.3 535H515.3V609H478.3z" />
      <path className="st4" d="M515.3 535H546.3V609H515.3z" />
      <path className="st4" d="M546.3 535H587.3V609H546.3z" />
      <path className="st4" d="M607.3 418H671.3V476H607.3z" />
      <path className="st4" d="M607.3 462H638.3V478H607.3z" />
      <path id="r12_13_" className="st4" d="M799.3 336H889.3V428H799.3z" />
      <path
        className="st4"
        d="M791 437.3L791 418 799.3 418 799.3 361 754.3 361 754.3 440 788.5 439.9z"
      />
      <path
        className="st4"
        d="M711.8 421.3L711.8 336 754.3 336 754.3 426 716.1 426z"
      />
      <path className="st4" d="M711.8 384H733.0999999999999V389H711.8z" />
      <path className="st4" d="M733 378H754.3V383H733z" />
      <path className="st4" d="M711.8 364H733.0999999999999V369H711.8z" />
      <path className="st4" d="M711.8 369H733.0999999999999V374H711.8z" />
      <path className="st4" d="M711.8 374H733.0999999999999V379H711.8z" />
      <path className="st4" d="M711.8 379H733.0999999999999V384H711.8z" />
      <path className="st4" d="M711.8 389H733.0999999999999V394H711.8z" />
      <path className="st4" d="M733 363H754.3V368H733z" />
      <path className="st4" d="M733 368H754.3V373H733z" />
      <path className="st4" d="M733 373H754.3V378H733z" />
      <path className="st4" d="M733 383H754.3V388H733z" />
      <path className="st4" d="M733 388H754.3V393H733z" />
      <path
        className="st4"
        d="M1078.6 195.5L1073.7 200.3 1073.3 300 1125.8 299.5 1125.8 195.5z"
      />
      <path className="st4" d="M1074.3 244H1100.3V249H1074.3z" />
      <path className="st4" d="M1100.3 238H1126.3V243H1100.3z" />
      <path className="st4" d="M1074.3 224H1100.3V229H1074.3z" />
      <path className="st4" d="M1074.3 229H1100.3V234H1074.3z" />
      <path className="st4" d="M1074.3 234H1100.3V239H1074.3z" />
      <path className="st4" d="M1074.3 239H1100.3V244H1074.3z" />
      <path className="st4" d="M1074.3 249H1100.3V254H1074.3z" />
      <path className="st4" d="M1100.3 223H1126.3V228H1100.3z" />
      <path className="st4" d="M1100.3 228H1126.3V233H1100.3z" />
      <path className="st4" d="M1100.3 233H1126.3V238H1100.3z" />
      <path className="st4" d="M1100.3 243H1126.3V248H1100.3z" />
      <path className="st4" d="M1100.3 248H1126.3V253H1100.3z" />
      <path className="st4" d="M1125.3 143H1208.7V238H1125.3z" />
      <path className="st4" d="M1208.6 143H1267.1999999999998V227H1208.6z" />
      <path className="st4" d="M1266.9 143H1333.8000000000002V227H1266.9z" />
      <path className="st4" d="M1333.8 143H1418.2V238H1333.8z" />
      <path
        className="st4"
        d="M1125.8 238L1125.8 305.9 1140.5 321 1208.6 321 1208.6 238z"
      />
      <path
        className="st4"
        d="M1417.8 237.5L1417.8 305.4 1402.8 320.5 1333.8 320.5 1333.8 237.5z"
      />
      <path className="st4" d="M1559.3 219H1717.3V299H1559.3z" />
      <path
        className="st4"
        d="M1468.3 219L1467.3 291 1474.3 291 1474.3 300 1559.3 299 1559.3 219z"
      />
      <path
        className="st4"
        d="M1748.4 285L1811.8 285 1811.8 219 1717.3 219 1717.3 299 1748.4 299z"
      />
      <path id="r12_15_" className="st4" d="M1417.8 191H1467.8V291H1417.8z" />
      <path className="st4" d="M1417.8 219H1442.8V224H1417.8z" />
      <path className="st4" d="M1417.8 224H1442.8V229H1417.8z" />
      <path className="st4" d="M1417.8 229H1442.8V234H1417.8z" />
      <path className="st4" d="M1417.8 234H1442.8V239H1417.8z" />
      <path className="st4" d="M1417.8 239H1442.8V244H1417.8z" />
      <path className="st4" d="M1417.8 244H1442.8V249H1417.8z" />
      <path className="st4" d="M1443.3 223H1468.3V228H1443.3z" />
      <path className="st4" d="M1443.3 228H1468.3V233H1443.3z" />
      <path className="st4" d="M1443.3 233H1468.3V238H1443.3z" />
      <path className="st4" d="M1443.3 238H1468.3V243H1443.3z" />
      <path className="st4" d="M1443.3 243H1468.3V248H1443.3z" />
      <path className="st4" d="M1443.3 248H1468.3V253H1443.3z" />
      <path className="st4" d="M1461.3 330H1542.3V425H1461.3z" />
      <path className="st4" d="M1542.3 330H1620.3V425H1542.3z" />
      <path className="st4" d="M1620.3 330H1745.3V425H1620.3z" />
      <path
        className="st4"
        d="M1745.3 352L1745.3 406 1752.3 406 1752.3 430 1755.3 433 1790.3 433 1790.3 352z"
      />
      <path
        className="st4"
        d="M1831.3 410.8L1831.3 326 1790.8 326 1790.8 415.5 1827.1 415.5z"
      />
      <path className="st4" d="M1810.8 348H1830.8V353H1810.8z" />
      <path className="st4" d="M1810.8 353H1830.8V358H1810.8z" />
      <path className="st4" d="M1810.8 358H1830.8V363H1810.8z" />
      <path className="st4" d="M1810.8 363H1830.8V368H1810.8z" />
      <path className="st4" d="M1810.8 368H1830.8V373H1810.8z" />
      <path className="st4" d="M1810.8 373H1830.8V378H1810.8z" />
      <path className="st4" d="M1790.8 347H1810.8V352H1790.8z" />
      <path className="st4" d="M1790.8 352H1810.8V357H1790.8z" />
      <path className="st4" d="M1790.8 357H1810.8V362H1790.8z" />
      <path className="st4" d="M1790.8 362H1810.8V367H1790.8z" />
      <path className="st4" d="M1790.8 367H1810.8V372H1790.8z" />
      <path className="st4" d="M1790.8 372H1810.8V377H1790.8z" />
      <path className="st4" d="M1130.3 420H1261.3V483H1130.3z" />
      <path className="st4" d="M1261.3 420H1412.3V483H1261.3z" />
      <path className="st4" id="2-4-22-a" d="M158.3 199H238.3V340H158.3z" />
      <path
        className="st4"
        id ="2-4-22"
        d="M238.3 199.5L238.3 339.3 305.3 339.3 305.3 362.5 327.3 362.5 327.3 339.3 327.3 199.5z"
      />
      <path className="st4" id ="2-4-26" d="M94.3 340H193.3V388H94.3z" />
      <path className="st4" d="M225.3 340H305.3V388H225.3z" />
      <path className="st4" d="M193.3 340H238.3V388H193.3z" />
      <path className="st4" d="M366.7 334.2H381.7V339.4H366.7z" />
      <path className="st4" d="M366.7 324.2H381.7V329.2H366.7z" />
      <path className="st4" d="M366.7 339.2H381.7V344.2H366.7z" />
      <path className="st4" d="M366.7 329.2H381.7V334.2H366.7z" />
      <path className="st4" d="M366.7 319.2H381.7V324.2H366.7z" />
      <path className="st4" d="M366.7 314.2H381.7V319.2H366.7z" />
      <path className="st4" id ="2-4-21" d="M327.3 199H368.3V273H327.3z" />
      <path className="st4" id ="2-4-05" d="M368.3 199H409.3V273H368.3z" />
      <path className="st4" id ="2-4-03" d="M409.3 199H527.3V317H409.3z" />
      <path
        className="st4" id ="2-4-1"
        d="M528.3 199L528.3 317 631.3 317 631.3 344 666.3 344 666.3 317 666.3 315 666.3 199z"
      />
      <path
        className="st4"
        d="M607.3 474L607.3 535 587.3 535 587.3 609 671.3 609 671.3 548 671.3 535 671.3 474z"
      />
      <path id="r12_11_" className="st4" d="M889.3 336H999.3V428H889.3z" />
      <path id="r12_12_" className="st4" d="M999.3 336H1078.3V428H999.3z" />
      <path
        className="st4" id = "2-2-6"
        d="M735.7 227L729.3 233.4 729.3 302 800.3 302 800.3 313 834.3 313 834.3 302 834.3 227z"
      />
      <path className="st4" id = "2-2-4" d="M834.3 227H987.3V313H834.3z" />
      <path className="st4" id = "2-2-2" d="M987.3 227H1073.3V313H987.3z" />
      <path className="st4" d="M1233.3 228H1310.3V308H1233.3z" />
      <text transform="translate(64.323 190.918)" className="st17 st12">
        {"2.4"}
      </text>
      <text transform="translate(729.323 218.918)" className="st17 st12">
        {"2.2"}
      </text>
      <text transform="translate(1781.323 210.918)" className="st17 st12">
        {"2.3"}
      </text>
      <text
        transform="matrix(.7738 0 0 1 677.906 461.91)"
        className="st17 st14"
      >
        {"\xDCBERGANG"}
      </text>
      <text transform="translate(103.323 277.374)" className="st17 st11">
        {"22b"}
      </text>
      <text transform="translate(188.323 277.374)" className="st17 st11">
        {"22a"}
      </text>
      <text transform="translate(139.323 367.374)" className="st17 st11">
        {"26"}
      </text>
      <text transform="translate(209.323 367.374)" className="st17 st11">
        {"25"}
      </text>
      <text transform="translate(265.323 367.374)" className="st17 st11">
        {"23"}
      </text>
      <text transform="translate(138.323 453.374)" className="st17 st11">
        {"34"}
      </text>
      <text transform="translate(206.323 452.374)" className="st17 st11">
        {"33"}
      </text>
      <path className="st4" d="M228.3 425H308.3V473H228.3z" />
      <path className="st4" d="M196.3 425H241.3V473H196.3z" />
      <text transform="translate(212.323 453.374)" className="st17 st11">
        {"33"}
      </text>
      <text transform="translate(269.323 453.374)" className="st17 st11">
        {"31"}
      </text>
      <text transform="translate(103.323 538.374)" className="st17 st11">
        {"29"}
      </text>
      <text transform="translate(188.323 538.374)" className="st17 st11">
        {"29a"}
      </text>
      <text transform="translate(276.323 277.374)" className="st17 st11">
        {"22"}
      </text>
      <text transform="translate(280.323 538.374)" className="st17 st11">
        {"30"}
      </text>
      <text transform="translate(351.323 477.374)" className="st17 st11">
        {"WC"}
      </text>
      <text transform="translate(496.323 471.374)" className="st17 st11">
        {"08"}
      </text>
      <text transform="translate(458.323 263.374)" className="st17 st11">
        {"03"}
      </text>
      <text transform="translate(594.323 263.374)" className="st17 st11">
        {"01"}
      </text>
      <text transform="translate(343.323 239.374)" className="st17 st11">
        {"21"}
      </text>
      <text transform="translate(383.323 240.374)" className="st17 st11">
        {"05"}
      </text>
      <text transform="translate(347.323 572.374)" className="st17 st11">
        {"18"}
      </text>
      <text transform="translate(381.323 572.374)" className="st17 st11">
        {"17"}
      </text>
      <text transform="translate(415.323 573.374)" className="st17 st11">
        {"16"}
      </text>
      <text transform="translate(455.323 572.374)" className="st17 st11">
        {"15"}
      </text>
      <text transform="translate(491.323 572.374)" className="st17 st11">
        {"14"}
      </text>
      <text transform="translate(522.323 572.374)" className="st17 st11">
        {"13"}
      </text>
      <text transform="translate(561.323 572.374)" className="st17 st11">
        {"12"}
      </text>
      <text transform="translate(631.323 451.374)" className="st17 st11">
        {"WC"}
      </text>
      <path className="st4" d="M615 475.7H671.3V507.7H615z" />
      <path className="st4" d="M657.8 490.2H663V507.7H657.8z" />
      <g>
        <path className="st4" d="M647.8 491.2H652.8V507.7H647.8z" />
        <path className="st4" d="M662.8 491.2H667.8V507.7H662.8z" />
        <path className="st4" d="M652.8 491.2H657.8V507.7H652.8z" />
        <path className="st4" d="M642.8 491.2H647.8V507.7H642.8z" />
        <path className="st4" d="M637.8 491.2H642.8V507.7H637.8z" />
      </g>
      <g>
        <path className="st4" d="M651.8 476.2H657V491.2H651.8z" />
        <path className="st4" d="M641.8 476.2H646.8V491.2H641.8z" />
        <path className="st4" d="M656.8 476.2H661.8V491.2H656.8z" />
        <path className="st4" d="M646.8 476.2H651.8V491.2H646.8z" />
        <path className="st4" d="M636.8 476.2H641.8V491.2H636.8z" />
        <path className="st4" d="M631.8 476.2H636.8V491.2H631.8z" />
      </g>
      <text transform="translate(767.323 400.374)" className="st17 st11">
        {"WC"}
      </text>
      <text transform="translate(450.323 366.374)" className="st17 st11">
        {"07"}
      </text>
      <text transform="translate(551.323 365.374)" className="st17 st11">
        {"06"}
      </text>
      <text transform="translate(776.323 268.374)" className="st17 st11">
        {"06"}
      </text>
      <text transform="translate(903.323 268.374)" className="st17 st11">
        {"04"}
      </text>
      <text transform="translate(837.323 385.374)" className="st17 st11">
        {"05"}
      </text>
      <text transform="translate(938.323 385.374)" className="st17 st11">
        {"03"}
      </text>
      <text transform="translate(1022.323 271.374)" className="st17 st11">
        {"02"}
      </text>
      <text transform="translate(1035.323 385.374)" className="st17 st11">
        {"01"}
      </text>
      <text transform="translate(1160.323 199.374)" className="st17 st11">
        {"13"}
      </text>
      <text transform="translate(1231.323 188.374)" className="st17 st11">
        {"14"}
      </text>
      <text transform="translate(1369.323 192.374)" className="st17 st11">
        {"02"}
      </text>
      <text transform="translate(1258.323 131.918)" className="st17 st12">
        {"2.1"}
      </text>
      <text transform="translate(1294.323 188.374)" className="st17 st11">
        {"03"}
      </text>
      <text transform="translate(1366.323 279.374)" className="st17 st11">
        {"01"}
      </text>
      <text transform="translate(1160.323 283.374)" className="st17 st11">
        {"12"}
      </text>
      <text transform="translate(1264.323 273.374)" className="st17 st11">
        {"04"}
      </text>
      <text transform="translate(1187.323 453.374)" className="st17 st11">
        {"09"}
      </text>
      <text transform="translate(1331.323 453.374)" className="st17 st11">
        {"07"}
      </text>
      <text transform="translate(1507.323 261.374)" className="st17 st11">
        {"02"}
      </text>
      <text transform="translate(1631.323 261.374)" className="st17 st11">
        {"04"}
      </text>
      <text transform="translate(1759.323 261.374)" className="st17 st11">
        {"06"}
      </text>
      <text transform="translate(1760.323 391.374)" className="st17 st11">
        {"WC"}
      </text>
      <text transform="translate(1675.323 379.374)" className="st17 st11">
        {"05"}
      </text>
      <text transform="translate(1571.323 379.374)" className="st17 st11">
        {"03"}
      </text>
      <text transform="translate(1493.323 380.374)" className="st17 st11">
        {"01"}
      </text>
      <text
        transform="matrix(1.0343 0 0 1 1644.22 715.582)"
        className="st9 st10"
      >
        {"EBENE 2"}
      </text>
    </g>
  </svg>
)

}

export default MapSvg;