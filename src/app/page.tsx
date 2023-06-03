"use client"
import Login_Button from "../components/Login_Button"
import { useAppDispatch } from "../../store";
import {useEffect} from "react"
import { fetchExams } from "../../store/Exam_schedule.slice";
import {addExam} from "../../store/Exam_schedule.slice"





export default function Page() {

const dispatch = useAppDispatch()

useEffect(()=>{dispatch(fetchExams())},[dispatch])
useEffect(()=>{dispatch(addExam())},[dispatch])

    return <h1 className="text-3xl font-bold">Working!!
    <Login_Button></Login_Button></h1>;
  }
  