import { NextRequest, NextResponse } from "next/server";
import { Isites } from "./components/PlaceList/PlaceList";

export async function middleware (request: NextRequest) {
    //const urlItems = request.nextUrl.pathname.split('/').filter((item) => item !== '');
    const urlItems = request.nextUrl.pathname.split('/').filter((item) => item !== '');
    
    if (urlItems[0] === 'sites' && urlItems.length === 2) {
      const postId = urlItems[1];

      const postss: Isites[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`)
        .then((res) => res.json())
        .then((data: Isites[]) => data)
        .catch((error) => console.error(error)) as Isites[];

      if(JSON.stringify(postss) === '{}'){
        return NextResponse.redirect(new URL('/sites', request.url));
      }
    }
    /*  
      const posts: Isites[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
        .then((res) => res.json())
        .then((data: Isites[]) => data.slice(0, 10))
        .catch((error) => console.error(error)) as Isites[];
  
      

      
  
      if (!posts.some((post) => post.id === Number(postId))) {
        return NextResponse.redirect(new URL('/sites', request.url));
      }

    }
    */
  
    return NextResponse.next();
  }
  
  export const config = {
    matcher:  '/sites/:id*' 
  };
  
  