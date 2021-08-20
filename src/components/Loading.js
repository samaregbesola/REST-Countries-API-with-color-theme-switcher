import React, { useState } from 'react';
import { css } from '@emotion/react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { useGlobalContext } from '../context';

const Loading = () => {
  const { loading } = useGlobalContext();
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: 'hsl(200, 15%, 8%)';
  `;

  const color = '#fff';

  return (
    loading && (
      <div className="w-full min-h-full flex flex-col justify-center items-center bg-black bg-opacity-80 overflow-auto z-10 fixed ">
        <ScaleLoader
          color={color}
          loading={loading}
          css={override}
          size={150}
        />
      </div>
    )
  );
};

export default Loading;
