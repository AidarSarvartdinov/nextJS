import Technologies from "../Technologies/Technologies"

export default function AboutTextPart() {
    return (
        <div className="text-part">
            <div style={{"fontSize": "25px"}} className="main-text">
                <p>I am from <span className="red" style={{"textShadow": "10px 10px 30px"}}>Ufa</span></p>
                <p>I was born on November 2004</p>
                <p>Now, I live and study in <span className="red">Innopolis</span> in my first year</p>
                <p>I like doing workout and want to be able to do workout elements</p>
                <p>I want to be a <span className="red">software developer</span> and work with a big IT company</p>
                <Technologies></Technologies>
            </div>
        </div>
    )
}