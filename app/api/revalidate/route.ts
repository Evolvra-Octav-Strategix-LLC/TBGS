import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-webhook-secret');
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, error: 'Invalid secret' }, { status: 401 });
  }

  try {
    const { paths, tags } = await req.json();
    const revalidated: string[] = [];

    // Revalidate specific paths
    if (paths && Array.isArray(paths)) {
      for (const path of paths) {
        revalidatePath(path);
        revalidated.push(path);
      }
    }

    // Revalidate by tags (Next.js 14 feature)
    if (tags && Array.isArray(tags)) {
      const { revalidateTag } = await import('next/cache');
      for (const tag of tags) {
        revalidateTag(tag);
        revalidated.push(`tag:${tag}`);
      }
    }

    return NextResponse.json({ 
      ok: true, 
      revalidated,
      timestamp: new Date().toISOString() 
    });

  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json({ 
      ok: false, 
      error: String(error) 
    }, { status: 500 });
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
}