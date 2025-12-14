import Qcontent from "../components/Qcontent";
import Qfooter from "../components/Qfooter";
import Qtimer from "../components/Qtimer";
import Qtitle from "../components/Qtitle";

export default function Q2(){
    return(
        <>
            <div className="quiz-container">
                <div className="quiz-header">
                    <Qtitle 
                        title="Which planet is known as red planet?"
                    />
                    <Qtimer />
                </div>
                <Qcontent 
                    opt1 = "Venus"
                    opt2 = "Mars"
                    opt3 = "Jupiter"
                    opt4 = "Saturn"
                />
                <Qfooter 
                    notone = {true}
                    page = '2'
                />
            </div>
        </>

    );
}