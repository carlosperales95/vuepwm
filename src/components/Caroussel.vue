<template>
    <div class="caroussel-container">
        <input type="radio" name="slider" id="item-1" checked>
        <input type="radio" name="slider" id="item-2">
        <input type="radio" name="slider" id="item-3">
        <div class="features-group">
            <label class="feature" for="item-1" id="song-1">
                <img src="../assets/templeexpmple.png" alt="song">
            </label>
            <label class="feature" for="item-2" id="song-2">
                <img src="../assets/stock2.png" alt="song">
            </label>
            <label class="feature" for="item-3" id="song-3">
                <img src="../assets/stock1.png" alt="song">
            </label>
        </div>
        <div class="player padding-slim">
            <div class="upper-part">
                <div class="info-area" id="test">
                    <label class="song-info" id="song-info-1">
                        <div class="title">
                            Super Secure
                        </div>
                        <div class="sub-line">
                            <div class="subtitle">
                                Even the Mayans used it in their day to day
                            </div>
                        </div>
                    </label>
                    <label class="song-info" id="song-info-2">
                        <div class="title">
                            Really Fast
                        </div>
                        <div class="sub-line">
                            <div class="subtitle">
                                You won't even see the electrons doing stuff
                            </div>
                        </div>
                    </label>
                    <label class="song-info" id="song-info-3">
                        <!-- <font-awesome-icon icon="fa-solid fa-shield-halved" /> -->
                        <div class="title">
                            Mega Cool
                        </div>
                        <div class="sub-line">
                            <div class="subtitle">
                                Look at the guy behind. He's smiling
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CarousselComponent',
    components: {
    },
    props: {
        
    },
    computed: {
    },
    methods: {
    
    },
}
</script>