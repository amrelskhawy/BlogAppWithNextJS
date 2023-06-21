"use client"

import React from "react";
import {useRouter} from "next/navigation";

const BlogPost = () => {
    const router = useRouter()
    console.log(router)
    return (
        <div>Post Page</div>
    )
}

export default BlogPost