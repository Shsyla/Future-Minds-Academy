import Qcontent from "../components/Qcontent";
import Qfooter from "../components/Qfooter";
import Qtimer from "../components/Qtimer";
import Qtitle from "../components/Qtitle";

export default function Q3() {
    return (
        <>
            <div className="quiz-container">
                <div className="quiz-header">
                    <Qtitle 
                        title="What is the largest mammal in the world?"
                    />
                    <Qtimer />
                </div>
                <Qcontent 
                    opt1="Elephant"
                    opt2="Blue Whale"
                    opt3="Giraffe"
                    opt4="Hippopotamus"
                />
                <Qfooter 
                    notone={true}
                    page="3"
                />
            </div>
        </>
    );
}
