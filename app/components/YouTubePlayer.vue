<template>
  <div class="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black group">
    <!-- Container for the YouTube Iframe -->
    <div ref="playerContainer" class="w-full h-full"></div>

    <!-- Overlay when video ends -->
    <div 
      v-if="showOverlay"
      class="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300"
    >
        <button 
          @click="replayVideo"
          class="group/btn flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-110"
        >
            <div class="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover/btn:bg-red-500 transition-colors">
                 <Icon name="material-symbols:replay-rounded" class="text-white text-5xl" />
            </div>
            <span class="text-white font-bold text-xl">{{ t('Replay Video') }}</span>
        </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  videoId: string;
}>();

const { t } = useI18n();
const playerContainer = ref<HTMLElement | null>(null);
const showOverlay = ref(false);
let player: any = null;

// Function to load YouTube API
const loadYouTubeAPI = () => {
    return new Promise<void>((resolve) => {
        if ((window as any).YT && (window as any).YT.Player) {
            resolve();
            return;
        }

        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        (window as any).onYouTubeIframeAPIReady = () => {
            resolve();
        };
    });
};

const initPlayer = async () => {
    await loadYouTubeAPI();

    if (!playerContainer.value) return;

    player = new (window as any).YT.Player(playerContainer.value, {
        videoId: props.videoId,
        width: '100%',
        height: '100%',
        playerVars: {
            'playsinline': 1,
            'rel': 0, // Reduces related videos to same channel, but overlay is main fix
            'showinfo': 0,
            'controls': 1,
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
};

const onPlayerStateChange = (event: any) => {
    // YT.PlayerState.ENDED is 0
    if (event.data === 0) {
        showOverlay.value = true;
    } else {
         // If playing or buffering, hide overlay (just in case)
        if (event.data === 1 || event.data === 3) {
             showOverlay.value = false;
        }
    }
};

const replayVideo = () => {
    showOverlay.value = false;
    if (player && player.seekTo) {
        player.seekTo(0);
        player.playVideo();
    }
};

onMounted(() => {
    initPlayer();
});

onUnmounted(() => {
    if (player && player.destroy) {
        player.destroy();
    }
});
</script>

<style scoped>
/* Optional: styling tweaks */
</style>
