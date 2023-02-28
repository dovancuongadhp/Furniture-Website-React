import { memo } from 'react'
import '../../assets/style/button.scss'
function Button({children,style}) {
    console.log("button mounted")
  return (
    <button className='btn' style={style}>{children}</button>
  )
}
export default memo(Button)
