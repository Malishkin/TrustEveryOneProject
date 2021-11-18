import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



const CustomTab = ({ title, popupMsg }) => {
  return (
   
      <Popup
        trigger={<span>{title}</span>}
        on={['hover', 'focus']}
        position='top center'>
        <div> {popupMsg} </div>
      </Popup>
   
  );
};

export default CustomTab;
