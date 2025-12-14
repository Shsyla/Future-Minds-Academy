import Qcontent from "../components/Qcontent";
import Qfooter from "../components/Qfooter";
import Qtimer from "../components/Qtimer";
import Qtitle from "../components/Qtitle";

export default function Q4() {
    return (
        <>
            <div className="quiz-container">
                <div className="quiz-header">
                    <Qtitle 
                        title="Who painted the Mona Lisa?"
                    />
                    <Qtimer />
                </div>
                <Qcontent 
                    opt1="Leonardo da Vinci"
                    opt2="Pablo Picasso"
                    opt3="Vincent van Gogh"
                    opt4="Michelangelo"
                />
                <Qfooter 
                    notone={true}
                    page="4"
                />
            </div>
        </>
    );
}
