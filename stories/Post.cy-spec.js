/// <reference types="cypress" />
import React from 'react'
import {mount} from 'cypress-react-unit-test'

import SideBySide from "./SideBySide";
import Post from "./Post";
import { SkeletonTheme } from "../src";

// matches Post.story.js
describe('Post skeletons', () => {
  it('default', () => {
    mount(
      <SideBySide>
        <Post />
        <Post title="A title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec
          justo feugiat, auctor nunc ac, volutpat arcu. Suspendisse faucibus
          aliquam ante, sit amet iaculis dolor posuere et. In ut placerat leo.
        </Post>
      </SideBySide>
    )
  })

  it('large size', () => {
    mount(
      <SideBySide>
        <Post size="large" />
        <Post size="large" title="A title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec
          justo feugiat, auctor nunc ac, volutpat arcu. Suspendisse faucibus
          aliquam ante, sit amet iaculis dolor posuere et. In ut placerat leo.
        </Post>
    </SideBySide>
    )
  })

  it('different colors', () => {
    const Test = () =>
      <div>
        <SkeletonTheme color="#1D5CA6" highlightColor="#164999">
          <Post />
        </SkeletonTheme>
        <SkeletonTheme color="#333" highlightColor="#4a4a4a">
          <Post />
        </SkeletonTheme>
      </div>

    mount(<Test />)
  })
})
