import { useTypedSelector } from '@/app/hooks/useTypedSelector';
import {TypeRootState} from "@/store/store";

export const useCarousel = () =>
    useTypedSelector((state: TypeRootState) => state.carousel);