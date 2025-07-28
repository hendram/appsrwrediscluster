import React, {useState, useRef, useEffect} from 'react';
import './TableContent.css';
import Listrowodd from './Listrowodd';
import Listroweven from './Listroweven';

function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (typeof a !== 'object' || a == null || b == null) return false;

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;

  for (let key of aKeys) {
    if (!b.hasOwnProperty(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

export function useDeepCompareEffect(callback, dependencies) {
  const previousDepsRef = useRef();
  const cleanupRef = useRef();

  const hasChanged = !deepEqual(previousDepsRef.current, dependencies);

  useEffect(() => {
    if (hasChanged) {
      previousDepsRef.current = dependencies;
      if (typeof cleanupRef.current === 'function') {
        cleanupRef.current(); // cleanup old effect
      }
      const maybeCleanup = callback();
      if (typeof maybeCleanup === 'function') {
        cleanupRef.current = maybeCleanup;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasChanged]); // only depend on result of deep compare
}


const TableContent = ({dataget, limitbawah}) => {

const [listrow, setListrow]  = useState([]);

 useDeepCompareEffect(() => {
    const newlistrow = dataget.map((item, a) => {
      const tampilkeno = a === 0 ? limitbawah : a + limitbawah;

      return a % 2 === 0
        ? <Listroweven key={a} nonya={tampilkeno} dataeven={item} />
        : <Listrowodd key={a} nonya={tampilkeno} dataodd={item} />;
    });

    setListrow(newlistrow);
  }, [dataget]);


return(
 <div className="div-table">
             <div className="div-table-rowfirst">
                <div className="div-table-colfirst1">
                 <div className="colfirst1textspan">No
                       </div></div>
                <div  className="div-table-colfirst2">
                    <div className="colfirst2textspan">Nama
                          </div></div>
                <div  className="div-table-colfirst3">
                      <div className="colfirst3textspan">Tempat Lahir
                    </div></div>
                <div  className="div-table-colfirst4">
                   <div className="colfirst4textspan">Tgl Lahir
                          </div></div>
                <div  className="div-table-colfirst5">
                    <div className="colfirst5textspan">No ktp
                         </div></div>
                <div  className="div-table-colfirst6">
                    <div className="colfirst6textspan">No hp
                         </div></div>

                <div  className="div-table-colfirst7">
                    <div className="colfirst7textspan">Twr
                         </div></div>
                <div  className="div-table-colfirst8">
                    <div className="colfirst8textspan">Unit
                         </div></div>

                <div  className="div-table-colfirst9">
                    <div className="colfirst9textspan">Status
                         </div></div>

                <div  className="div-table-colfirst10">
                    <div className="colfirst10textspan">Agen
                         </div></div>

                <div  className="div-table-colfirst11">
                    <div className="colfirst11textspan">Pemilik unit
                         </div></div>
                <div  className="div-table-colfirst12">
                     <div className="colfirst12textspan">Action
                        </div></div>
             </div>
        {listrow}
</div>
);

}

export default TableContent;
