"use client"
import { useAppDispatch } from "../../store";
import {useEffect} from "react"
import { fetchExams } from "../../store/Exam_schedule.slice";
import {addExam} from "../../store/Exam_schedule.slice";
import {fetchNotes} from "../../store/Notes.slice";
import {addNote} from "../../store/Notes.slice";

export default function Page() {

const dispatch = useAppDispatch()

useEffect(()=>{dispatch(fetchExams())},[dispatch])
useEffect(()=>{dispatch(addExam())},[dispatch])
useEffect(()=>{dispatch(fetchNotes())},[dispatch])
useEffect(()=>{dispatch(addNote())},[dispatch])

    return <h1 className="text-3xl font-bold">Working!!
    </h1>;
  }
  