import { useRouter } from "next/router";

export default function SelectedClientProjectsPage(){
    const router=useRouter();

    console.log( router.pathname);
    console.log(router.query);
    return <div>
        <h1>The Project page of a Selected Client</h1>
    </div>
}