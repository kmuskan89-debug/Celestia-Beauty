import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/db';

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({ status: 'connected', message: 'Successfully connected to MongoDB!' });
  } catch (error: any) {
    return NextResponse.json({ status: 'error', error: error.message }, { status: 500 });
  }
}
