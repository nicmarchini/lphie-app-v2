import { useRef, useState } from 'react';

const BinaryButton = (props) => {
    const inputRefTrue = useRef(null);
    const inputRefFalse = useRef(null);
    const [enabledState, setState] = useState(true);

    const handleClickTrue = () => {
        inputRefTrue.current.click();
    };

    const handleClickFalse = () => {
        inputRefFalse.current.click();
    };

    const handleChange = event => {
        console.log(event.target.value)
        setState(!enabledState)
    }

    return (
        <div>
        <input
            style={{display: 'none'}}
            ref={inputRefTrue}
            type="radio"
            value="enabled"
            name="status"
            onChange={handleChange}
        />
        <button type="button"
                className="h-10 px-6 mr-2 font-bold
                            rounded-md bg-black text-white text-md
                            border hover:text-white hover:bg-blue-700
                            hover:border-transparent focus:outline-none
                            disabled:opacity-25
                            "
                disabled={(props.editable && !enabledState) == false}
                onClick={handleClickTrue}>enable</button>
        <input
            style={{display: 'none'}}
            ref={inputRefFalse}
            type="radio"
            value="disabled"
            name="status"
            onChange={handleChange}
        />
        <button type="button"
                className="h-10 px-6 mr-2 font-bold
                            rounded-md bg-black text-white text-md
                            border hover:text-white hover:bg-blue-700
                            hover:border-transparent focus:outline-none
                            disabled:opacity-25
                            "
                disabled={(props.editable && enabledState) == false}
                onClick={handleClickFalse}>disable</button>
        </div>
    );
};

export default BinaryButton;