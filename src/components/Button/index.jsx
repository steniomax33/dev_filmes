import { ButtonRed, ButtonWhite } from './styless'

function Button({ children, red }) {
    return (
        <>
            {red ? (
                <ButtonRed>{children}</ButtonRed>
            ) : (
                <ButtonWhite>{children}</ButtonWhite>
            )}
        </>
    )
}

export default Button