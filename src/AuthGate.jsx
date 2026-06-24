import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

export default function AuthGate() {
    const { user, isLoaded } = useUser();

    const [authorized, setAuthorized] =
        useState(null);

    useEffect(() => {
        if (!isLoaded || !user) return;
        console.log("isLoaded:", isLoaded);
        console.log("user:", user);

        checkAccess();
    }, [isLoaded, user]);

    async function checkAccess() {
        const email =
            user.primaryEmailAddress?.emailAddress;
            console.log("Email:", email);

        const response = await fetch(
            "https://hook.eu1.make.com/md7i8qzpubt9jgzfcwrycjdibptzalvq",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify({
                    email,
                }),
            }
        );
        console.log("Response:", response);
        console.log("checkAccess called");

        const result =
            await response.json();

        console.log("Result:", result);

        setAuthorized(result.found);
    }

    if (
        !isLoaded ||
        authorized === null
    ) {
        return <h1>Checking...</h1>;
    }

    if (!authorized) {
        return <h1>Unauthorized</h1>;
    }

    return <h1>Dashboard</h1>;
}