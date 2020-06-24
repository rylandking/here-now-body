import React from 'react';
import Layout from '../components/layout'
import useScript from '../hooks/useScript';

import { GlobalProvider } from '../context/GlobalState'
import SubscribeFormHorizontal from '../components/subscribe-form-horizonal';
import SubscribeFormStacked from '../components/subscribe-form-stacked';

export default function Test() {

  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/formEmbed.js');
  useScript('https://emailoctopus.com/bundles/emailoctopuslist/js/1.5/recaptcha.js');
  
  return (
    <GlobalProvider>
      <Layout>
      <SubscribeFormHorizontal />
      <SubscribeFormStacked
        cta={'Click me'}
        margin={'mx-6 sm:mx-20 mt-10'}
        formID = {'3720d073-b40f-11ea-a3d0-06b4694bee2a'}
      />          
      </Layout>
    </GlobalProvider>
  )
}
