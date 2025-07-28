import React from 'react';
import './Listrowodd.css';
import ActionColumnodd from './ActionColumnodd';

const Listrowodd = (props) => {

return(
  <div className="div-table-rowodd">
                  <div className="div-table-colodd1">
                  <div className="colodd1textspan">{props.nonya}
                    </div></div>
                <div className="div-table-colodd2">
                  <div className="colodd2textspan">{props.dataodd.nama}
                        </div></div>
                <div className="div-table-colodd3">
                     <div className="colodd3textspan">{props.dataodd.tempatlahir}
                     </div></div>
                  <div className="div-table-colodd4">
                     <div className="colodd4textspan">{props.dataodd.tgllahir}
                        </div></div>
                <div className="div-table-colodd5">
                   <div className="colodd5textspan">{props.dataodd.noktp}
                     </div></div>
                <div className="div-table-colodd6">
                   <div className="colodd6textspan">{props.dataodd.nohp}
                     </div></div>
                <div className="div-table-colodd7">
                   <div className="colodd7textspan">{props.dataodd.tower}
                     </div></div>
                <div className="div-table-colodd8">
                   <div className="colodd8textspan">{props.dataodd.unit}
                     </div></div>
                <div className="div-table-colodd9">
                   <div className="colodd9textspan">{props.dataodd.status}
                     </div></div>
                <div className="div-table-colodd10">
                   <div className="colodd10textspan">{props.dataodd.agen}
                     </div></div>
                <div className="div-table-colodd11">
                   <div className="colodd11textspan">{props.dataodd.pemilikunit}
                     </div></div>
                <ActionColumnodd actionodd={props.dataodd} />
    </div>
)
}

export default Listrowodd;
