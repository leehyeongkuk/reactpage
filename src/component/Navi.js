import naviDBlink from '../json/navi.json';
import Scrollspy from "react-scrollspy";

function Navi(props){
    const naviDb = naviDBlink.naviDB;
    return(
        <Scrollspy className={ 'd-md-flex mb-0 gnb_ul ' + props.cls + ' ' + props.toggle } items={[naviDb[0].naviLink,naviDb[1].naviLink,naviDb[2].naviLink]}currentClassName="is-current">
     
        {
          naviDb.map((item, index) =>{
            return(
              <li id={ 'naviID'+index } key={ 'naviID'+index } ><a href={item.naviLink} className="text-decoration-none ps-md-3 pe-md-0 px-3">{item.naviText}</a></li>
            )
          }
          )
            
        }
      </Scrollspy>
    )
  }
  
  export default Navi;