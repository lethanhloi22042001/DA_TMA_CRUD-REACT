import React, { useEffect, useState, useContext } from "react";
import userService from '../Services/userService'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getAllUserRedux,
  deleteUserRedux,
  createUserRedux,
  updateUserRedux,
  getOneUser,
} from "../Redux/actions";

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient() 
function Example() {
  // dispatch, set lại user => useState
  const dispatch = useDispatch();
    useEffect( ()=>{
      dispatch(getAllUserRedux());
    },[]);
    const arrUser = useSelector((state) => state.user.arrUser);
    const [user,setUser]= useState(arrUser[1]);
    console.log('user',user);
  // const { isLoading, error, data } = useQuery('repoData',dispatch(getAllUserRedux()))
  return (
    <div>
      <h1>{user.firstName}</h1>
      <p>{user.lastName}</p>
      <strong>👀 {user.address}</strong>{' '}
      <strong>✨ {user.email}</strong>{' '}
      <strong>🍴 {user.password}</strong>
    </div>
  )
}
export default function ReactQuery() {
  return (
    <QueryClientProvider client={queryClient}> 
      <Example />
    </QueryClientProvider>
  )
}
