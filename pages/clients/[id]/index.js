import { useRouter } from "next/router";
export default function ClientProjectsPage(){
    const router=useRouter();

    console.log( router.pathname);
    console.log(router.query);
    return <div>
        <h1>The Projects of a given Client</h1>
    </div>
}