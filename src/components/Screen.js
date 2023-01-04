import "../styles/Screen.css"

const Screen = ({ text, result }) => {
    return (
        <div className="screen-wrapper">
            <div className="result">
                <h1>{result}</h1>
            </div>
            <div className="text">
                <h3>{text}</h3>
            </div>
        </div>
    )
}

export default Screen;