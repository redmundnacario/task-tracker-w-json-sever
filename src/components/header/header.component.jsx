import Button from '../button/button';

// import PropTypes from 'prop-types'


const Header = ({showAddTask, onToggle}) => {

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button
                backgroundColor = {showAddTask ? "Red" : "Green"}
                text = {showAddTask ? "Close" : "Add"} 
                onClick={onToggle}/>
        </header>
    )
}

// Header.defaultProps = {
//     title : "margarette"
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }



export default Header
