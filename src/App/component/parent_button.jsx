import CustomButton from './button';

const ParentButton = (props) => {
    const {increment, setIncrement} = props;

    return (
        <div>
            <CustomButton/>
        </div>
    )
}

export default ParentButton;