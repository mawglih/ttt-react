
const Square = ({
    value,
    onClick,
}) => {
    console.log('value', value);
    return(
        <div 
            className = 'cell'
            onClick = {onClick}
        >
            {value}
        </div>
    )
}
export default Square;
