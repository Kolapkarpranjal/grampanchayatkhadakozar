import { ObjectId } from 'mongodb';

export interface Document {
  _id?: ObjectId;
  name: string;
  description: string;
  formPdfUrl?: string;
  downloadUrl?: string;
  category: 'certificate' | 'form' | 'application' | 'other';
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

