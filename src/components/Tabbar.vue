<template>
    <nav>
        <ul>
            <!--<li>-->
                <!--聲名式導航-->
                <!--<a href="#/film">電影</a>-->
            <!--</li>-->
            <!--<li>-->
                <!--<a href="#/cinema">影院</a>-->
            <!--</li>-->
            <!--<li>-->
                <!--<a href="#/center">我的</a>-->
            <!--</li>-->
            <router-link to="/film" tag="li" active-class="active">
                <span>電影</span>
                <i class="icofont icofont-movie"></i>
            </router-link>
            <router-link to="/cinema" tag="li" active-class="active">
                <span>影院</span>
                <i class="icofont icofont-cart"></i>
            </router-link>
            <router-link to="/center" tag="li" active-class="active">
                <span>我的</span>
                <i class="icofont icofont-brand-myspace"></i>
            </router-link>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    .active{
        color: red;
    }

    nav{
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: white;
        ul{
            display: flex;
            li{
                flex: 1;
                text-align: center;
            }
        }
    }

</style>

<script>
import '@/assets/icofont/icofont.css'
export default {

}
</script>
