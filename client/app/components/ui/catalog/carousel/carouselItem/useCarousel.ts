import { useTypedSelector } from '@/app/hooks/useTypedSelector';
import {TypeRootState} from "@/store/store";

export const useCarousel = (cat: string) => {
    const selectedItemIndex = useTypedSelector((state: TypeRootState) => state.carousel[cat]);
    return { selectedItemIndex };
};