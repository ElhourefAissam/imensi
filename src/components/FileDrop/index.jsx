import React, { useState } from "react";

function FileDrop({
  type = ["image/*"],
  title,
  text,
  textButtonLink = "browse Files",
  textBottom,
  onFileSelect,
  value,
  imgSize = 100,
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);

  function handleFileSelect(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
      setFile(selectedFile);
    }
  }

  function handleDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (!type || (droppedFile.type && type.includes(droppedFile.type))) {
      setFile(droppedFile);
    } else {
      alert(`Only ${type.join(", ")} files are accepted!`);
    }
  }

  return (
    <div className="flex flex-col">
      <h4>{title}</h4>
      <div
        className={"mt-4 p-12 border-separate border-2 border-dashed h-40"}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {file ? (
          <div className="file-card">
            <div className="file-card-content">
              <h2>{file.name}</h2>
              <p>File Type: {file.type}</p>
              <p>File Size: {file.size} bytes</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img width={imgSize} src="/images/upload.svg" alt="upload" />
            <label
              htmlFor="file-input"
              className="py-2 px-4 rounded text-gray-400"
            >
              {text} or <span className=" text-blue-600">{textButtonLink}</span>
            </label>
            <input
              id="file-input"
              type="file"
              accept={type.join(", ")}
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FileDrop;

//  <select value={fileType} onChange={handleFileTypeChange}>
//   <option value="image/*">Images</option>
//   <option value="audio/*">Audio</option>
//   <option value="video/*">Video</option>
//   <option value=".pdf">PDF</option>
//   <option value=".doc,.docx">Word Documents</option>
//   <option value=".xls,.xlsx">Excel Spreadsheets</option>
// </select>
