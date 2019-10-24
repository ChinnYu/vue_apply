<template>
    <div>
        <ul>
            <router-link to="/film/nowplaying" tag="li" active-class="active">正在熱映</router-link>
            <router-link to="/film/comingsoon" tag="li" active-class="active">即將上映</router-link>

        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .active{
        color: red;
        border-bottom: 5px solid red;
    }

    ul{
        display:flex;
        li{
            flex:1;
            height: 40px;
            line-height:40px;
        }
    }
    .fixed{
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 40px;
        background: white;
    }
</style>
