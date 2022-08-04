

> npx create-next-app project
> npx create-react-app project


# Next link
  1. import {useRoute} from "next/route";
    const route = useRouter();
    - route.push("/list")
    - route.push("/about")
    - route.push("/product/productlist")

    push({
        pathname: '/product/details',
        query: { 
            pid: 1 
        }
    })
  2. user Link 
    import Link from 'next/link'
    <Link href="/">
        <a>Home</a>
    </Link>

    <Link href="/product">
        <a>Product</a>
    </Link>

    <Link 
    
    >
        <a>Product</a>
    </Link>
     

    <a href="/about">
        <a>About</a>
    </>