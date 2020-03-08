import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from './Theming'

import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  FacebookMessengerShareButton,
  TwitterIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
} from 'react-share'

const Share = ({ url, title, twitterHandle }) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        div {
          margin-right: 20px;
          cursor: pointer;
          :hover {
            color: ${theme.colors.primary};
          }
        }
        span {
          margin-right: 20px;
          font-size: 70%;
          text-transform: uppercase;
          line-height: 2.5;
          opacity: 0.7;
        }
      `}
    >
      <div
        css={css`
          flex-grow: 1;
          border-top: 1px solid ${theme.colors.gray};
        `}
      />
      <span>Share article</span>
      <TwitterShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
        css={css`
          cursor: pointer;
          margin-right: 8px;
        `}
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
        css={css`
          cursor: pointer;
          margin-right: 8px;
        `}
      >
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
      <FacebookShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
        css={css`
          cursor: pointer;
          margin-right: 8px;
        `}
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <FacebookMessengerShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
        css={css`
          cursor: pointer;
        `}
      >
        <FacebookMessengerIcon size={32} round={true} />
      </FacebookMessengerShareButton>
    </div>
  )
}

export default Share
