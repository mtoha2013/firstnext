import React from 'react'

export default function PostDetail({params} : {params:{postid: string}}) {
  return (
    <div>page detail : {params.postid}</div>
  )
}
