'use client'    
import React from 'react'
import { useSearchParams  } from 'next/navigation'


const Blogid = () => {
    const router = useSearchParams();
    const blogId  = router.get('blogid');
    return (
        <div>[blogid] : {blogId}</div>
    )
}

export default Blogid;