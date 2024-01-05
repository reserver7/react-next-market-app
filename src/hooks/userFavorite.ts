'use client'

import { User } from '@prisma/client';
import { useMemo } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface UseFavorite {
    productId: string;
    currentUser?: User | null;
}

const useFavorite = ({productId, currentUser}: UseFavorite) => {
    const router = useRouter();

    const hasFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];

        return list.includes(productId);
    },[currentUser, productId])

    const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        if(!currentUser) {
            toast.warn('Please log in first 😔');
            return;
        }

        try {
            let request;

            if(hasFavorite){
                request = () => axios.delete(`/api/favorites/${productId}`);
            } else {
                request = () => axios.post(`/api/favorites/${productId}`);
            }

            await request();
            router.refresh();
            toast.success('Success 👌');

        } catch (err) {
            toast.error('Error 😔');
        }
    }

    return {
        hasFavorite, toggleFavorite
    }
}

export default useFavorite;