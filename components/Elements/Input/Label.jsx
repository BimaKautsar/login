const Label = (props) => {
    const { htmlFor, teks } = props;
    return (
        <label
            htmlFor={htmlFor}
            className="block text-slate-700 text-sm font-bold mb-2"
        >
            {teks}
        </label>
    );
};

export default Label;