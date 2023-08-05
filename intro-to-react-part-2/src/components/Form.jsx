import React, { useState } from 'react'

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleChange = (event) => {
    const file = event.target.files[0]
    const size = file.size // แสดงเป็น bytes

    console.log(`size`, size)

    // กำหนดให้ size ใหญ่ไม่เกิน 1Mb
    if (size / 1024 > 1000) {
      alert('ไฟล์ขนาดใหญ่เกิน 1 Mb')
      return
    }
    setSelectedFile(event.target.files[0])
  }

  console.log('selected file', selectedFile)

  return (
    <>
      <h1>Example</h1>
      <input type="file" accept="image/png" onChange={handleChange} />
    </>
  )
}

export default Form
