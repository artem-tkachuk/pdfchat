import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { redirect } from "next/navigation";

const Page = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();    

    if (!user || !user.id) {
        redirect("/auth-callback?origin=/dashboard")
    }

    

    return (
        <div>
            <h1>Dashboard of {user?.email || "Guest"}</h1>
        </div>
    );
}

export default Page;