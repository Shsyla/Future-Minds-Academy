import Qcontent from "../components/Qcontent";
import Qfooter from "../components/Qfooter";
import Qtimer from "../components/Qtimer";
import Qtitle from "../components/Qtitle";

export default function Q5() {
    return (
        <>
            <div className="quiz-container">
                <div className="quiz-header">
                    <Qtitle 
                        title="What is the chemical symbol for gold?"
                    />
                    <Qtimer />
                </div>
                <Qcontent 
                    opt1="Ag"
                    opt2="Au"
                    opt3="Gd"
                    opt4="Pt"
                />
                <Qfooter 
                    notone={true}
                    page="5"
                />
            </div>
        </>
    );
}
