const PassMatcher = () => {
    const [pass1, setPass1] = React.useState()
    const [pass2, setPass2] = React.useState()

    return (
        <div>
            {/* onKeyUp -> when we write something in the input field */}
            <input type='text' onKeyUp={(e) => {
                setPass1(e.target.value)
            }}></input>
            <input type='text' onKeyUp={(e) => {
                setPass2(e.target.value)
            }}></input>
            {/* if pass1 is equal to pass2 they match otherwise they dont */}
            <p>{pass1 === pass2 ? "passwords match" : "pass dont match" }</p>
        </div>
    );
}