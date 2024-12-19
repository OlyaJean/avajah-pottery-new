import React from 'react'
import { Suspense } from 'react'

import Success from '@/components/Success'

const suspense = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
   <Success></Success>
 </Suspense>
  )
}

export default suspense