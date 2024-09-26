import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect, useState} from 'react'
import axios, { AxiosResponse } from 'axios'

interface SubscriptionStatus {
    isSubscribed: boolean
}

const ProtectedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { data: session, status } = useSession()
    const router = useRouter()
    const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null)

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/SignIn');
        } else if (status === 'authenticated') {
            axios.get<SubscriptionStatus>('/api/subscription')
            .then((response: AxiosResponse<SubscriptionStatus>) => {
                setIsSubscribed(response.data.isSubscribed);
            })
            .catch(error => {
                console.error('Error fetching subscription status', error);
                router.push('/auth/SignIn');
            });
        }
    }, [status, router]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'authenticated' && isSubscribed === true) {
        return <>{children}</>;
    }

    if (status === 'authenticated' && isSubscribed === false) {
        return <div>Debes tener una suscripción activa para ver este contenido.</div>
    }

    return null;
};

export default ProtectedPage