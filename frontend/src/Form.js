

export default function Form(props) {

        return (
            <form className="form">
                <label><b>Date: </b></label>
                <input 
                    onChange={(event) => props.addDate(event)} 
                    className="date" 
                    name="date" 
                    type="date" 
                />
                <label className="unrealistic-thought-label"><b>Unrealistic Thought: </b></label>
                <input  
                    onChange={(event) => props.addUnrealisticThoughts(event)} 
                    className="unrealistic-thought" 
                    name="unrealistic-thought" 
                    type="text" 
                />
                <fieldset className="fieldset">
                    <label><b>Cognitive Distortions: </b></label>
                    <input onChange={(event) => props.addCognitiveDistortions(event)} className="checkbox" type="checkbox" name="cognitive-distortions" value="All or Nothing Thinking" />All or Nothing Thinking
                    <input onChange={(event) => props.addCognitiveDistortions(event)} className="checkbox" type="checkbox" name="cognitive-distortions" value="Overgeneralization" />Overgeneralization
                    <input onChange={(event) => props.addCognitiveDistortions(event)} className="checkbox" type="checkbox" name="cognitive-distortions" value="Mental Filter" />Mental Filter
                    <input onChange={(event) => props.addCognitiveDistortions(event)} className="checkbox" type="checkbox" name="cognitive-distortions" value="Discounting the Positives" />Discounting the Positives
                    <input onChange={(event) => props.addCognitiveDistortions(event)} className="checkbox" type="checkbox" name="cognitive-distortions" value="Jumping to Conclusions - Mind Reading" />Jumping to Conclusions - Mind Reading
                    <input onChange={(event) => props.addCognitiveDistortions(event)} className="checkbox" type="checkbox" name="cognitive-distortions" value="Jumping to Conclusions - Future Telling" />Jumping to Conclusions - Future Telling
                    <input onChange={(event) => props.addCognitiveDistortions(event)} className="checkbox" type="checkbox" name="cognitive-distortions" value="Magnification/Minimazation" />Magnification/Minimization
                    <input onChange={(event) => props.addCognitiveDistortions(event)} className="checkbox" type="checkbox" name="cognitive-distortions" value="Emotional Reasoning" />Emotional Reasoning
                    <input onChange={(event) => props.addCognitiveDistortions(event)} className="checkbox" type="checkbox" name="cognitive-distortions" value="Should Statement" />"Should" Statement
                    <input onChange={(event) => props.addCognitiveDistortions(event)} className="checkbox" type="checkbox" name="cognitive-distortions" value="Labeling" />Labeling
                    <input onChange={(event) => props.addCognitiveDistortions(event)} className="checkbox" type="checkbox" name="cognitive-distortions" value="Personalization and Blame" />Personalization and Blame
                </fieldset>
                <label><b>Realistic Reframe: </b></label>
                <input 
                    onChange={(event) => props.addRealisticReframes(event)} 
                    className="realistic-reframe" 
                    name="realistic-reframe" 
                    type="text" 
                />
                <button type="submit" className="submit-button">Publish to Journal</button>
            </form>
        );
}
