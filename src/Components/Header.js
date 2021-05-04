import PropTypes from 'prop-types'
import Button from './Button'
function Header({title}) {
    const onClick = () =>{
        console.log('cliked')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
           <Button text='Add' color="White" onClick={onClick} />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
  }
  
// how to make a default props

// Header.defaultProps = {
//     titles: 'Todo app',
// }
// css in js how to style
// const headerStyle ={
//     color:'red',
//     backgroundColor:'black'
// }
export default Header
