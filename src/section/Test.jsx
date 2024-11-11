import React from 'react'
import { useGetPostByIdQuery } from '../redux/services/jsonplaceholder'

const Test = () => {

    const { data: post,  error,  isLoading } = useGetPostByIdQuery(1)

    console.log(post, 'test');
    
  return (
    <div>Test</div>
  )
}

export default Test