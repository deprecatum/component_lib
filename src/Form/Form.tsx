type FormProps = {
    action: () => void,
    children: React.ReactNode
}

export const Form = ({ action, children }: FormProps) => {
    <form action={action}>
        {children}
    </form>
}