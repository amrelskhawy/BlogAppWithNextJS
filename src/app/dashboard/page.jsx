'use client'
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

const Dashboard = () => {



  const fetcher = (...args) => fetch(...args).then(res => res.json())

  // const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  const {data, status} = useSession()
  const router = useRouter()

    // if (status === "loading") {
    //     return <p>Loading...</p>;
    // }
    // if (status === "unauthenticated") {
    //     router?.push("/dashboard/login");
    // }

    return (
      <div>Dashboard Page</div>
    )
}

export default Dashboard