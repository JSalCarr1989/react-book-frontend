/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { PrimaryButton } from './Styles';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './QuestionData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { useEffect, useState } from 'react';

// const renderQuestion = (question: QuestionData) => <div>{question.title}</div>;

export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);
  const [questionLoading, setQuestionLoading] = useState(true);

  useEffect(() => {
    // const questions = await getUnansweredQuestions();
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions); //<---- seteamos las preguntas
      setQuestionLoading(false); // <--- seteamos el state de isFetching
    };
    doGetUnansweredQuestions();
  }, []);

  // console.log('rendered');

  const handleAskQuestionClick = () => {
    console.log('TODO.- Move to the ask page');
  };

  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Unanswered Questions</PageTitle>

        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a question
        </PrimaryButton>
      </div>

      {questionLoading ? (
        <div
          css={css`
            font-size: 16px;
            font-size: italic;
          `}
        >
          Loading...
        </div>
      ) : (
        <QuestionList data={questions || []} />
      )}
    </Page>
  );
};
