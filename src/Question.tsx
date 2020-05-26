/** @jsx jsx */
import { FC } from 'react';
import { css, jsx } from '@emotion/core';
import { QuestionData } from './QuestionData';
import { gray2, gray3 } from './Styles';

interface Props {
  data: QuestionData;
  showContent?: boolean;
}

export const Question: FC<Props> = ({ data, showContent = true }) => (
  <div
    css={css`
      padding: 10px 0px;
    `}
  >
    <div
      css={css`
        padding: 10px 0px;
        font-size: 19px;
      `}
    >
      {data.title}
    </div>
    {showContent && (
      <div
        css={css`
          padding-bottom: 10px;
          font-size: 15px;
          color: ${gray2};
        `}
      >
        {data.content.length > 50
          ? `${data.content.substring(0, 50)}...`
          : data.content}
      </div>
    )}

    <div
      css={css`
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
      `}
    >
      {`Asked By ${data.userName} on
             ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}
        `}
    </div>
  </div>
);

// Question.defaultProps = {
//   showContent: true,
// };
