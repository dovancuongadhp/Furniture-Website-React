import { memo } from 'react';
import '@styles/button.scss';
function Button({children,style,onClick}) {
  return (
    <button className='btn' style={style} onClick={onClick}>{children}</button>
  )
}
export default memo(Button)
