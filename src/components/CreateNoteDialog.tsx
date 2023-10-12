'use client';
import React from "react";
import {Dialog, DialogHeader, DialogTrigger, DialogContent,DialogDescription, DialogTitle } from "./ui/dialog";
import { Plus } from "lucide-react";

type Props = {}

const CreateNoteDialog = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="border-dashed border-2 border-green-600 h-full rounded-lg item-center justify-center sm:flex-col hover:shadow=xl transition hover:-translate-y-1 flex-row p-4">
          {<Plus className="w-6 h-6 text-green-600" strokeWidth={3} /> }
          <h2 className="font-semibold text-green-600 sm:mt-2"> New Notebook</h2>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> New Notebook 📚</DialogTitle>
            <DialogDescription>
          You Can Create a New Notebook Here 😁
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default CreateNoteDialog;