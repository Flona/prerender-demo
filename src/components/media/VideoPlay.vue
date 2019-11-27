<template>
    <video-player
        class="vjs-custom-skin wow slideInUp"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @loadeddata="onPlayerLoadeddata($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @canplay="onPlayerCanplay($event)"
        @canplaythrough="onPlayerCanplaythrough($event)"
        @ready="playerReadied"
        @statechanged="playerStateChanged($event)"
    ></video-player>
</template>

<script>
import { videoPlayer } from 'vue-video-player';
import playIcon from '@/assets/svg/icon-play.svg';

export default {
    name: 'VideoPlay',
    components: {
        videoPlayer
    },
    data() {
        return {
            playerOptions: {
                // width: '100%',
                // height: '833',
                autoplay: false,
                // muted: true,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [
                    {
                        type: 'video/mp4',
                        // mp4
                        src: 'http://vjs.zencdn.net/v/oceans.mp4'
                        // webm
                        // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }
                ]
                // poster: ''
            }
        };
    },
    computed: {
        player() {
            return this.$refs.videoPlayer.player;
        }
    },
    methods: {
        // listen event
        onPlayerPlay(player) {
            // console.log('player play!', player)
        },
        onPlayerPause(player) {
            // console.log('player pause!', player)
        },
        onPlayerEnded(player) {
            // console.log('player ended!', player)
        },
        onPlayerLoadeddata(player) {
            // console.log('player Loadeddata!', player)
        },
        onPlayerWaiting(player) {
            // console.log('player Waiting!', player)
        },
        onPlayerPlaying(player) {
            // console.log('player Playing!', player)
        },
        onPlayerTimeupdate(player) {
            // console.log('player Timeupdate!', player.currentTime())
        },
        onPlayerCanplay(player) {
            // console.log('player Canplay!', player)
        },
        onPlayerCanplaythrough(player) {
            // console.log('player Canplaythrough!', player)
        },
        // or listen state event
        playerStateChanged(playerCurrentState) {
            // console.log('player current update state', playerCurrentState)
        },
        // player is ready
        playerReadied(player) {
            // seek to 10s
            player.currentTime(0);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '~video.js/dist/video-js.css';

.vjs-custom-skin {
    width: 100vw !important;
    min-width: 1200px !important;
    min-height: 600px;
    /deep/ .video-js {
        width: 100vw !important;
        min-width: 1200px !important;
        min-height: 600px;
        .vjs-tech {
            outline: none;
        }
        .vjs-big-play-button {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 85px;
            height: 85px;
            line-height: 85px;
            border-radius: 50%;
            outline: none;

            .vjs-icon-placeholder:before {
                font-size: 67px;
                content: '';
                background: url('~@/assets/imgs/video-play.png') no-repeat top left / 53px 53px; /*兼容没测*/
                position: absolute;
                top: 50%;
                z-index: 2;
                width: 53px;
                height: 53px;
                left: 50%;
                transform: translate(-40%, -50%);
            }
        }
        .vjs-control {
            outline: none;
        }
        .vjs-button > .vjs-icon-placeholder:before {
            line-height: 2;
        }
        .vjs-playback-rate .vjs-playback-rate-value {
            line-height: 2.3;
        }
    }
}
</style>
