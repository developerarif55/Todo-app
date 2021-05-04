
const Button = ({color, text, onClick}) =>{

    return(
        
        <button 
        onClick ={onClick}
        style={{color:color}} 
        className="btn">
        {text}
        </button>
    
    )
}
Button.defaultProps = {
    color: 'steelblue'
}

export default Button
