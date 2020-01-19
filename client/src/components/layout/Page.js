import React,{useState} from "react";
import { Switch, Route } from "react-router-dom";
import { QuizzContainer } from "../QuizzContainer";
import { Roadmap } from "../Roadmap";

const Page = () => {
  const [quizzFilter, setQuizzFilter] = useState('')


  return (
    <div className="content">
      <Switch>
        <Route path="/quizz">
          <QuizzContainer quizzFilter={quizzFilter}/>
        </Route>
        <Route path="/roadmap">
          <Roadmap setQuizzFilter={setQuizzFilter}/>
        </Route>
      </Switch>
    </div>
  );
};

export default Page;
