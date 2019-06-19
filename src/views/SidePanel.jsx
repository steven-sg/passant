import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import ScoreBoard from "./ScoreBoard";
import HighScoreBoard from "./HighScoreBoard"
import RecentScoreBoard from "./RecentScoreBoard"
import QuestionBoard from "./QuestionBoard";
import TimerBoard from "./TimerBoard";

function SidePanel ({question, stopGame, score, scoreHistory, started, mode}) {
    return (
        started ?
            <div style={{width: '16rem'}}>
                <QuestionBoard question={question}/>
                <TimerBoard score={score} stopGame={stopGame}/>
            </div> :
            <div style={{width: '16rem'}}>
                <ScoreBoard score={score} scoreHistory={scoreHistory}/>
                {(() => {
                    if (scoreHistory.length) {
                        return [
                            <HighScoreBoard scoreHistory={scoreHistory} mode={mode}/>,
                            <RecentScoreBoard scoreHistory={scoreHistory} mode={mode}/>
                        ];
                    }
                })()}
            </div>
    );
}

export default SidePanel;
