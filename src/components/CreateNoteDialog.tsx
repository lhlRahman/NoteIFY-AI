'use client';
import React from "react";
import {Dialog, DialogHeader, DialogTrigger, DialogContent,DialogDescription, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";

type Props = {}

const CreateNoteDialog = (props: Props) => {
  const [input, setInput] = React.useState("")
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
        <form>
          <Input value={input} onChange={e=> setInput(e.target.value)} placeholder="Name..."/>
          <div className="h-4"></div>
          <div className="flex items-center gap-2">
            <Button type = "reset" variant = {"secondary"}>
              Cancel
            </Button>
            <Button type = "submit" className="bg-green-600">
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateNoteDialog;