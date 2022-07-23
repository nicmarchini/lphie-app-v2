import { useRef } from 'react';

const UploadButton = (props) => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = event => {
        const file = event.target.files && event.target.files[0];
        if (!file) {
            return;
        }

        console.log('fileObj is', file);
        event.target.value = null;
    };

    return (
        <div>
        <input
            style={{display: 'none'}}
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
        />
        <button type="button"
                className="h-10 px-6 mr-2 font-bold
                            rounded-md bg-black text-white text-md
                            border hover:text-white hover:bg-blue-700
                            hover:border-transparent focus:outline-none
                            disabled:opacity-25
                            "
                disabled={props.editable==false}
                onClick={handleClick}>upload</button>
        </div>
    );
};

export default UploadButton;