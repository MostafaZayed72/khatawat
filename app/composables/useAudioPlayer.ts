export const useAudioPlayer = () => {
    const currentAudioUrl = useState<string | null>('currentAudioUrl', () => null);
    const isPlaying = useState<boolean>('isPlaying', () => false);

    const setAudio = (url: string) => {
        if (currentAudioUrl.value !== url) {
            currentAudioUrl.value = url;
            isPlaying.value = true; // Auto-play on change? Usually yes for this context
        }
    };

    const play = () => {
        isPlaying.value = true;
    };

    const pause = () => {
        isPlaying.value = false;
    };

    return {
        currentAudioUrl,
        isPlaying,
        setAudio,
        play,
        pause
    };
};
