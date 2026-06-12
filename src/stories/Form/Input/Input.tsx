type InputProps = {
    name: string,
    className: string,
}

const Input = ({ name, className }: InputProps) => {
    return (
        <input name={name} className={className} />
    )
}