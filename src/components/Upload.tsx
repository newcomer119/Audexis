import React, { useState, useRef } from 'react';
import { Upload as UploadIcon, File, X, CheckCircle } from 'lucide-react';
import { BackgroundAnimation } from './animations/BackgroundAnimation';

export function Upload() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      addFiles(selectedFiles);
    }
  };

  const addFiles = (newFiles: File[]) => {
    setFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      files.forEach(file => {
        formData.append('files', file);
      });

      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      setUploadStatus('success');
      setFiles([]);
    } catch (error) {
      console.error('Upload failed:', error);
      setUploadStatus('error');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-20 section-gradient">
      <BackgroundAnimation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-white">
            Upload Your Files
          </h1>
          <p className="mt-4 text-indigo-100/90">
            Drag and drop your audio or video files, or click to select
          </p>
        </div>

        <div
          className={`glass-card p-8 rounded-xl transition-all duration-300 ${
            isDragging ? 'border-indigo-500 scale-105' : ''
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div 
            className="border-2 border-dashed border-indigo-400/30 rounded-lg p-8 text-center cursor-pointer hover:border-indigo-400/50 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <UploadIcon className="h-12 w-12 mx-auto text-indigo-400 mb-4" />
            <p className="text-indigo-100">
              Drag and drop your files here, or click to select files
            </p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInput}
              className="hidden"
              multiple
              accept="audio/*,video/*"
            />
          </div>

          {files.length > 0 && (
            <div className="mt-6 space-y-3">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <File className="h-5 w-5 text-indigo-400" />
                    <span className="text-white">{file.name}</span>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {files.length > 0 && (
            <div className="mt-6">
              <button
                onClick={handleUpload}
                disabled={isUploading}
                className={`btn-primary w-full ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isUploading ? 'Uploading...' : 'Upload Files'}
              </button>
            </div>
          )}

          {uploadStatus === 'success' && (
            <div className="mt-4 flex items-center justify-center text-green-400 space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Files uploaded successfully!</span>
            </div>
          )}

          {uploadStatus === 'error' && (
            <div className="mt-4 flex items-center justify-center text-red-400 space-x-2">
              <X className="h-5 w-5" />
              <span>Upload failed. Please try again.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}