import { ID } from "appwrite";
import account from "./appwrite.js";

export const createUser = async (email, password) => {
    const id = ID.unique();
    account.create(id, email, password).then(
        function (response) {
            return response;
        },
        function (error) {
            console.dir({ message: error.response.message });
        }
    );
};

export const loginUser = async (email, password) => {
    try {
        // Create a session for the user
        const session = await account.createEmailPasswordSession(
            email,
            password
        );

        return session;
    } catch (error) {
        console.error("Error during login:", error); // Debugging failure
        console.dir({
            message: error.response?.message || "An unexpected error occurred.",
        });
    }
};

// export const verifyUser = async () => {
//     const promise = account.createVerification(
//         "http://localhost:5173/verify-email"
//     );

//     promise.then(
//         function (response) {
//             console.log(response);
//         },
//         function (error) {
//             console.log(error); // Failure
//         }
//     );

//     return promise;
// };
