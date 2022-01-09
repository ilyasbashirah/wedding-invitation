import * as React from 'react';
import Counting from '@/src/products/landing/features/success/countingdown'
export interface ILandingPage {
}

export default function LandingPage (props: ILandingPage) {
  return (
    <div>
      <Counting />
    </div>
  );
}
