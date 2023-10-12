import CreateNoteDialog from "@/components/CreateNoteDialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import { $notes } from "@/lib/db/schema";
import { UserButton, auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


type Props = {}

const page = (props: Props) => {
  return (
      <>
        <div className="grainy min-h-screen">
          <div className="max-w-7xl mx-auto p-10">
            <div className="h-14"></div>
            <div className="flex justify-between items-center md:flex-row flex-col">
              <div className="flex items-center">
                <Link href="/">
                  <Button className="bg-green-600" size="sm">
                    <ArrowLeft className="mr-1 w-4 h-4" />
                    Back
                  </Button>
                </Link>
                <div className="w-4"></div>
                <h1 className="text-3xl font-bold text-gray-900">My Notes</h1>
                <div className="w-4"></div>
                <UserButton />
              </div>
            </div>
            <div className="h-8"></div>
          <Separator />
          {/* list all notes*/}
          <div className="text-center">
          <h2 className='text-xl text-grey-500'> You Have No Notes </h2>
          </div>
          <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap3 ">
            <CreateNoteDialog />
          </div>
          </div>
        </div>
      </>
    )
  
}

export default page