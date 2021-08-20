import React from 'react';
import { css } from '@emotion/react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { useGlobalContext } from '../context';

const MiniLoading = () => {
  const { miniLoading } = useGlobalContext();
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: 'hsl(200, 15%, 8%)';
  `;

  const color = 'currentColor';

  return (
    miniLoading && (
      <div className="mx-auto my-2">
        <ScaleLoader
          color={color}
          loading={miniLoading}
          css={override}
          size={150}
        />
      </div>
    )
  );
};

export default MiniLoading;
