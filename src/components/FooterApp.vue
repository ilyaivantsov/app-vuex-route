<template>
    <footer class="main-footer d-flex p-2 px-3 bg-white border-top">
        <ul class="nav">
            <li class="nav-item"  v-for="item in  links" v-bind:key="item.id">
                <a class="nav-link" v-bind:href="item.url">{{item.name}}</a>
            </li>
        </ul>
        <span class="copyright ml-auto my-auto mr-2">Copyright © 2018
            <a v-bind:href="maintaner.url" target="_blank" rel="nofollow">{{maintaner.name}}</a>
        </span>
    </footer>
</template>
<script>
export default {
    data: function(){
        return {
            links:[{
                id:1,
                url:'/',
                name:'Home'
            },
            {
                id:2,
                url:'/',
                name:'Services'
            }],
            maintaner:{
                url:'http://google.com',
                name:'NI.I'
            }
        }
    }
}
</script>
