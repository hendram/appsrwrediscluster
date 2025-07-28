import React from 'react';
import './Listroweven.css';
import ActionColumneven from './ActionColumneven';

const Listroweven = (props) => {


return(
  <div className="div-table-roweven">
                  <div className="div-table-coleven1">
                   <div className="coleven1textspan">{props.nonya}
                           </div></div>
                <div className="div-table-coleven2">
                   <div className="coleven2textspan">{props.dataeven.nama}
                          </div></div>
                <div className="div-table-coleven3">
                       <div className="coleven3textspan">{props.dataeven.tempatlahir}
                       </div></div>
                  <div className="div-table-coleven4">
                        <div className="coleven4textspan">{props.dataeven.tgllahir}
                       </div></div>
                <div className="div-table-coleven5">
                    <div className="coleven5textspan">{props.dataeven.noktp}
                       </div></div>
                <div className="div-table-coleven6">
                    <div className="coleven6textspan">{props.dataeven.nohp}
                       </div></div>
                <div className="div-table-coleven7">
                    <div className="coleven7textspan">{props.dataeven.tower}
                       </div></div>
                <div className="div-table-coleven8">
                    <div className="coleven8textspan">{props.dataeven.unit}
                       </div></div>
                <div className="div-table-coleven9">
                    <div className="coleven9textspan">{props.dataeven.status}
                       </div></div>
                <div className="div-table-coleven10">
                    <div className="coleven10textspan">{props.dataeven.agen}
                       </div></div>
                <div className="div-table-coleven11">
                    <div className="coleven11textspan">{props.dataeven.pemilikunit}
                       </div></div>

                  <ActionColumneven actioneven={props.dataeven} />
    </div>
)
}

export default Listroweven;
