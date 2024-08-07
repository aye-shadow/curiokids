import { currentUser } from "@clerk/nextjs/server";
import { db } from '@/lib/db'

export const checkUser = async () => {
    const user = await currentUser();

    if (!user) {
        return null;
    }

    const loggedInUser = await db.userSchema.findUnique({
        where: {
            clerkID: user.id
        }
    })

    if (loggedInUser) {
        return loggedInUser
    }
    
    const newUSer = await db.userSchema.create({
        data: {
            clerkID: `${user.id}`,
            email: user.emailAddresses[0].emailAddress,
            username: `${user.username}`,
            photo: user.imageUrl,
            firstname: `${user.firstName}`,
            lastname: `${user.lastName}`,
        }
    })

    return newUSer;
}