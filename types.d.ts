interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

declare global {
    namespace NodeJS {
        interface Global {}
    }

    interface Credentials {
        email: string;
        password: string;
    }

    interface User {
        id: number;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }
}

export interface AuthenticatedUser {
    id: string;
    email: string;
}

export {};
