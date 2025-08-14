import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Check for secret to confirm this is a valid request
  const secret = request.headers.get('x-webhook-secret');
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { paths, tags } = body;

    // Revalidate specific paths
    if (paths && Array.isArray(paths)) {
      for (const path of paths) {
        revalidatePath(path);
        console.log(`Revalidated path: ${path}`);
      }
    }

    // Revalidate by tags
    if (tags && Array.isArray(tags)) {
      for (const tag of tags) {
        revalidateTag(tag);
        console.log(`Revalidated tag: ${tag}`);
      }
    }

    // If no specific paths/tags, revalidate common TBGS pages
    if (!paths && !tags) {
      const commonPaths = [
        '/',
        '/locaties',
        '/nl/eindhoven',
        '/nl/nuenen', 
        '/nl/veldhoven',
        '/nl/best',
        '/nl/geldrop',
        '/nl/mierlo',
        '/nl/waalre',
        '/be/locaties/lommel',
        '/be/locaties/hamont-achel',
        '/be/locaties/pelt',
        '/be/locaties/retie',
      ];

      for (const path of commonPaths) {
        revalidatePath(path);
      }

      return NextResponse.json({ 
        revalidated: true, 
        paths: commonPaths,
        message: 'Revalidated common TBGS pages' 
      });
    }

    return NextResponse.json({ 
      revalidated: true, 
      paths: paths || [], 
      tags: tags || [],
      timestamp: new Date().toISOString()
    });

  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json({ 
      message: 'Error revalidating', 
      error: err instanceof Error ? err.message : 'Unknown error'
    }, { status: 500 });
  }
}

// Handle GET requests for testing
export async function GET() {
  return NextResponse.json({ 
    message: 'TBGS Revalidation API', 
    status: 'active',
    endpoints: {
      webhook: 'POST /api/revalidate',
      headers: 'x-webhook-secret: your-secret',
      body: { paths: ['/path1', '/path2'], tags: ['tag1', 'tag2'] }
    }
  });
}