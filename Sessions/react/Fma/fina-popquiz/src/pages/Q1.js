import Qcontent from "../components/Qcontent";
import Qfooter from "../components/Qfooter";
import Qtimer from "../components/Qtimer";
import Qtitle from "../components/Qtitle";

export default function Q1(){
    return(
        <>
            <div className="quiz-container">
                <div className="quiz-header">
                    <Qtitle 
                        title = "What is the capital of France?"
                    />
                    <Qtimer />
                </div>
                <Qcontent 
                    opt1 = "Berlin"
                    opt2 = "Madrid"
                    opt3 = "Paris"
                    opt4 = "Rome"
                />
                <Qfooter 
                    notone = {false}
                    page = '1'
                />
            </div>
        </>

    );
}