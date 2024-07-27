// the following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS. If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.
import { fetchUsers, saveUser } from '@/utils/actions';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  const users = await fetchUsers();
  return Response.json({ message: 'api' });
};
