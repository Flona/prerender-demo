<template>
    <video-player
        class="vjs-custom-skin"
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

export default {
    name: 'VideoPlay',
    components: {
        videoPlayer
    },
    data() {
        return {
            playerOptions: {
                width: '500',
                autoplay: false,
                muted: true,
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [
                    {
                        type: 'video/mp4',
                        // mp4
                        src:
                            '//isc-mc.oss-cn-hangzhou.aliyuncs.com/1234/systemid/53e3bf7c0fd612eec4a026080ec05d71.mp4?Expires=4727066334&OSSAccessKeyId=LTAILalcnRqwtbt8&Signature=b9BGNWYcmjIFbh5NZaQ8b5qRD4U%3D'
                        // webm
                        // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }
                ]
                // poster: ''
            }
        };
    },
    mounted() {
        setTimeout(() => {
            this.player.muted(false);
        }, 5000);
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
    /deep/ .video-js {
        .vjs-tech {
            outline: none;
        }
        .vjs-big-play-button {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            line-height: 80px;
            border-radius: 50%;
            .vjs-icon-placeholder:before {
                font-size: 50px;
            }
        }
    }
}
</style>
