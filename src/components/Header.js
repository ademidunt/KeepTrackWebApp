import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  
    return ( 
        <header className= 'header'>
            <h1 > {title}</h1>
            <Button  onClick = {onAdd} color = {showAdd ? 'grey' :'SteelBlue'}  text ={showAdd ? 'Close' : 'Add'} />
            
        </header>
    )
}

Header.defaultProps = {

    title:'Keep Track!', 

}

export default Header
