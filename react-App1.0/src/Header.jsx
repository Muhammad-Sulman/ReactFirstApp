import PropTypes from 'prop-types';

function Header(props) {
    // Example of using a derived value
    // const derivedName = `Hello, ${props.name}`;

    return (
        <div>
            <h1>Header: {props.name}, Age: {props.age}, Married: {props.isMarried.toString()}</h1>
            {/* {props.children && <div>Additional Content: {props.children}</div>} */}
            <h3>Friends: {props.arr.join(', ')}</h3>
        </div>
    );
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    arr: PropTypes.array,
    isMarried: PropTypes.bool,
};

Header.defaultProps = {
    isMarried: false,
    arr: ["Suleman"],
};

export default Header;
