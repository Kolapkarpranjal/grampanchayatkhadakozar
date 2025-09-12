import { ObjectId } from 'mongodb';

export interface Notice {
  _id?: ObjectId;
  title: string;
  description: string;
  type: 'announcement' | 'tender' | 'circular' | 'order';
  publishDate: string;
  expiryDate?: string;
  fileName: string;
  fileType: 'pdf' | 'image';
  fileUrl: string;
  createdAt: Date;
  updatedAt: Date;
}




