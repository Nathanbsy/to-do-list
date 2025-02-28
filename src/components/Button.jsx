function Button(props) {
    return (
        <button {...props} className="bg-slate-400 text-white rounded-md p-2 shadow outline-slate-400">{props.children}</button>
    );
}

export default Button;