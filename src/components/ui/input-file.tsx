"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

export default function FileUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState<string>("")

  return (
    <div className="flex items-center gap-3">
   
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name)
          }
        }}
      />
 
      
      <Button variant="Subtle"
      className="bg-transparent !text-end ps-36 !pe-0 w-64 relative text-maroon-600"
        type="button"
        onClick={() => fileInputRef.current?.click()}
      >
         {fileName && (
        <span className="text-sm text-muted-foreground w-10 absolute start-0">
          {fileName}
        </span>
      )}
       <Upload/> Upload file
      </Button>

      {/* اسم الملف */}
    
    </div>
  )
}
